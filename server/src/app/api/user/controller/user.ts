import { Router, Request, Response } from "express"

// MODELS
import UserModel from "@models/User"

// ERROR
import Exception from "@error/index"

// MIDDLEWARE
import TokenVerify from "@middleware/TokenVerifyMiddleware"

// HELPER
import Validator from "@helper/Validator"
import Refine from "@helper/Refine"
import Crypto from "@helper/Crypto"

// TEST ROUTE
import TestRoute from "@api/test/test"

// VARIABLE
const router = Router()

// TEST
router.use("/test", TestRoute)

// UPDATE
router.put("/:id", TokenVerify.VerifyTokenAuthorization, async (req: Request, res: Response) => {
  if (!Validator.body(req.body, ["password"])) return res.status(401).json({ message: "Body password missing" })
  req.body.password = Crypto.encrypt(req.body.password)

  const update = async () => {
    return await UserModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
  }

  const result = await Exception.Handler.Async(update)
  if (!result) res.status(500).json("Failed to update user")

  res.status(200).json(result)
})

// DELETE
router.delete("/:id", TokenVerify.VerifyTokenAuthorization, async (req: Request, res: Response) => {
  const remove = async () => {
    return await UserModel.findByIdAndDelete(req.params.id)
  }

  const result = await Exception.Handler.Async(remove)
  if (!result) return res.status(500).json("Error while deleting the user")

  res.status(200).json("User has been deleted")
})

// GET
router.get("/find/:id", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const find = async () => {
    return await UserModel.findById(req.params.id)
  }

  const user = await Exception.Handler.Async(find)
  if (!user) return res.status(500).json("Error while getting the user data")

  res.status(200).json(Refine.except(user._doc, ["password", "createdAt", "updatedAt"]))
})

// ALL
router.get("/", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const query = "new" in req.query ? req.query.new : null

  const all = async () => {
    return query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find()
  }

  const users = await Exception.Handler.Async(all)
  if (!users) return res.status(500).json("Error while getting the user data")

  res.status(200).json(users)
})

// GET USER STATS | TODO: Under Construction
router.get("/stats", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  const stats = async () => {
    return await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      // @ts-ignore
      { $group: { _id: "$month", total: { $sum: 1 } } }
    ])
  }

  const result = await Exception.Handler.Async(stats)
  if (!result) res.status(403).json({ message: "Failed to get user stats" })

  res.status(200).json(result)
})

export default router

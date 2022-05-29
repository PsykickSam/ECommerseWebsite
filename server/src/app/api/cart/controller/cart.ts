import { Router, Request, Response } from "express"

// MODELS
import CartModel from "@models/Cart"

// ERROR
import Exception from "@error/index"

// MIDDLEWARE
import TokenVerify from "@middleware/TokenVerifyMiddleware"
import ModeVerify from "@middleware/ModeMiddleware"

// HELPER
import Refine from "@helper/Refine"

// LOG
import log from "@log/index"

// TEST ROUTE
import TestRoute from "@api/test/test"

// VARIABLE
const router = Router()

// TEST
router.use("/test", TestRoute)

// CREATE
router.put("/", ModeVerify.CheckModeForTokenGate, TokenVerify.VerifyTokenAuthorization, async (req: Request, res: Response) => {
  const create = async () => {
    return await new CartModel(req.body).save()
  }

  const result = await Exception.Handler.Async(create)
  if (result === null) res.send(500).json({ message: "Failed to create cart data" })
  if (result !== null) res.send(500).json({ message: "Failed to create cart data" })

  res.status(200).json(result)
})

// UPDATE
router.put("/:id", TokenVerify.VerifyTokenAuthorization, async (req: Request, res: Response) => {
  const update = async () => {
    return await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )
  }

  const result = await Exception.Handler.Async(update)
  if (!result) res.send(500).json({ message: "Failed to update cart data" })

  res.status(200).json(result)
})

// DELETE
router.delete("/:id", TokenVerify.VerifyTokenAuthorization, async (req: Request, res: Response) => {
  const remove = async () => {
    return await CartModel.findByIdAndDelete(req.params.id)
  }

  const result = await Exception.Handler.Async(remove)
  if (!result) res.send(500).json({ message: "Failed to remove from cart" })

  res.status(200).json(result)
})

// FIND
router.get("/find/:userId", TokenVerify.VerifyTokenAuthorization, async (req: Request, res: Response) => {
  const find = async () => {
    return await CartModel.findOne({ userId: req.params.userId })
  }

  const result = await Exception.Handler.Async(find)
  if (!result) res.send(500).json({ message: "Failed to find cart" })

  res.status(200).json(result)
})

// ALL
router.get("/", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const all = async () => {
    return await CartModel.find({})
  }

  const result = await Exception.Handler.Async(all)
  if (!result) res.send(500).json({ message: "Failed to get all from cart" })

  res.status(200).json(Refine.except(result, ["createdAt", "updatedAt"]))
})

export default router

import { Router, Request, Response } from "express"

// MODELS
import OrderModel from "@models/Order"

// ERROR
import Exception from "@error/index"

// MIDDLEWARE
import TokenVerify from "@middleware/TokenVerify"

// HELPER
import Refine from "@helper/Refine"
import Validator from "@helper/Validator"

// LOG
import log from "@log/index"

// TEST ROUTE
import TestRoute from "@api/test/test"

// VARIABLE
const router = Router()

// TEST
router.use("/test", TestRoute)

// CREATE
router.post("/", TokenVerify.VerifyToken, async (req: Request, res: Response) => {
  if (!Validator.body(req.body, ["userId", "products", "amount", "address"])) return res.status(401).send({ message: "Body elements are missing, " + JSON.stringify(req.body) })

  const create = async () => {
    return await new OrderModel(req.body).save()
  }

  const result = await Exception.Handler.Async(create)
  if (!result) res.send(500).json({ message: "Failed to create order data" })

  res.status(200).json(result)
})

// UPDATE
router.put("/:id", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const update = async () => {
    return await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )
  }

  const result = await Exception.Handler.Async(update)
  if (!result) res.send(500).json({ message: "Failed to update order data" })

  res.status(200).json(result)
})

// DELETE
router.delete("/:id", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const remove = async () => {
    return await OrderModel.findByIdAndDelete(req.params.id)
  }

  const result = await Exception.Handler.Async(remove)
  if (!result) res.send(500).json({ message: "Failed to remove from order" })

  res.status(200).json(result)
})

// FIND
router.get("/find/:userId", TokenVerify.VerifyTokenAuthorization, async (req: Request, res: Response) => {
  const find = async () => {
    return await OrderModel.find({ userId: req.params.userId })
  }

  const result = await Exception.Handler.Async(find)
  if (!result) res.send(500).json({ message: "Failed to find orders" })

  res.status(200).json(result)
})

// ALL
router.get("/", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const all = async () => {
    return await OrderModel.find({})
  }

  const result = await Exception.Handler.Async(all)
  if (!result) res.send(500).json({ message: "Failed to get all from order" })

  res.status(200).json(Refine.except(result, ["createdAt", "updatedAt"]))
})

// MONTHLY INCOME
router.get("/income", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const income = async () => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1))

    return await OrderModel.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount"
        }
      },
      {
        // @ts-ignore
        $group: {
          total: { $sum: "$sales" },
          _id: "$month"
        }
      }
    ])
  }

  const result = await Exception.Handler.Async(income)
  if (!result) res.send(500).json({ message: "Failed to get all from order" })

  res.status(200).json(result)
})

export default router

import { Router, Request, Response } from "express"

// MODELS
import ProductModel from "@models/Product"

// ERROR
import Exception from "@error/index"

// MIDDLEWARE
import TokenVerify from "@middleware/TokenVerifyMiddleware"

// HELPER
import Refine from "@helper/Refine"

// TEST ROUTE
import TestRoute from "@api/test/test"

// VARIABLE
const router = Router()

// TEST
router.use("/test", TestRoute)

// NEW
router.post("/", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const product = new ProductModel(req.body)

  const save = async () => {
    return await product.save()
  }

  const result = await Exception.Handler.Async(save)
  if (!result) return res.status(500).json("Error while saving the product data")

  res.status(200).json(result)
})

// UPDATE
router.put("/:id", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const update = async () => {
    return await ProductModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
  }

  const result = await Exception.Handler.Async(update)
  if (!result) return res.status(500).json("Error while updating the product data")

  res.status(200).json(result)
})

// DELETE
router.delete("/:id", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const remove = async () => {
    return await ProductModel.findByIdAndDelete(req.params.id)
  }

  const result = await Exception.Handler.Async(remove)
  if (!result) return res.status(500).json("Error while removing the product data")

  res.status(200).json(result)
})

// FIND
router.get("/find/:id", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const find = async () => {
    return await ProductModel.findById(req.params.id)
  }

  const result = await Exception.Handler.Async(find)
  if (!result) return res.status(500).json("Error while getting all products")

  res.status(200).json(result)
})

// ALL
router.get("/", TokenVerify.VerifyTokenAdmin, async (req: Request, res: Response) => {
  const query = {
    new: req.query.new,
    category: req.query.category
  }

  const all = async () => {
    return query.new
      ? await ProductModel.find({}).sort({ createdAt: -1 }).limit(5)
      : query.category
        ? await ProductModel.find({
          categories: {
            $in: [query.category]
          }
        }).sort({ createdAt: -1 }).limit(5)
        : await ProductModel.find({})
  }

  const result = await Exception.Handler.Async(all)
  if (!result) return res.status(500).json("Error while getting all products")

  res.status(200).json(Refine.except(result, ["createdAt", "updatedAt"]))
})

export default router

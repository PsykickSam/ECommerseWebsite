import { Router, Request, Response } from "express"

// MODELS
import UserModel from "@models/User"

// ERROR
import Exception from "@error/index"

// TEST ROUTE
import TestRoute from "@api/test/test"

// HELPER
import Validator from "@helper/Validator"
import Refine from "@helper/Refine"
import Crypto from "@helper/Crypto"
import Token from "@helper/Token"

// VARIABLE
const router = Router()

// TEST
router.use("/test", TestRoute)

// REGISTER
router.post("/register", async (req: Request, res: Response) => {
  if (!Validator.body(req.body, ["username", "email", "password"])) res.status(400).send("Invalid body given!")

  const user = new UserModel({
    username: Refine.stringify(req.body.username),
    email: Refine.stringify(req.body.email),
    password: Crypto.encrypt(Refine.stringify(req.body.password), process.env.PASSWORD_SECRET)
  })

  const save = async () => {
    return await user.save()
  }

  const result = await Exception.Handler.Async(save)
  if (!result) res.status(500).send("Failed to save in storage!")

  res.status(201).json(result)
})

// LOGIN
router.post("/login", async (req: Request, res: Response) => {
  if (!Validator.body(req.body, ["username", "password"])) res.status(400).send("Invalid body given!")

  const find = async () => {
    return await UserModel.findOne({
      username: Refine.stringify(req.body.username)
    })
  }

  const user = await Exception.Handler.Async(find)
  if (!user) res.status(401).send("Couldn't find user with this credentials!")
  if (req.body.password !== Crypto.decrypt(user.password, process.env.PASSWORD_SECRET)) {
    res.status(401).send("Couldn't match password with this credentials!")
  }

  const token = Token.sign({
    id: user._id,
    isAdmin: user.isAdmin
  })
  if (!token) res.status(500).send("Failed to create token!")

  const except = Refine.except(user._doc, ["password", "createdAt", "updatedAt"])
  res.status(200).json({ ...except, token })
})

export default router

import { Router, Request, Response } from "express"
import { Stripe } from "stripe"

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

//
router.post("/payment", (req, res) => {
  const payment = () => {
    const stripe = new Stripe(process.env.STRIPE_KEY || "", {
      apiVersion: "2020-08-27"
    })

    stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd"
    }, {}).then(() => {
      res.status(200).json()
    }).catch((err) => {
      res.status(500).json({ message: String(err) })
    })
  }

  const result = Exception.Handler.Sync(payment)
})

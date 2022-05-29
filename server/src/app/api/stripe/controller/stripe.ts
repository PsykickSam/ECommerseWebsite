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
    }).then((paymentIntent: Stripe.Charge) => {
      res.status(200).json()
    }).catch((err) => {
      res.status(500).json({ message: String(err) })
    })
  }

  const result = Exception.Handler.Sync(payment)
})

//
router.get("/client/secret", async (req, res) => {
  const secret = async () => {
    const stripe = new Stripe(process.env.STRIPE_KEY || "", {
      apiVersion: "2020-08-27"
    })

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 3000,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true
      }
    })

    return paymentIntent.client_secret
  }

  const result = await Exception.Handler.Async(secret)
  if (!result) res.status(500).json({ message: "Internal error occurred white retrieving the client secret" })

  return res.status(200).json({ secret: result })
})

export default router

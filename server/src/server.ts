import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import * as http from "http"

// MODULES
import "@module/_ExpressRequestModule"
// import "@module/_ModeRequestModule"

// LOG
import Log from "@log/index"

// Routes
import AuthRoutes from "@api/auth/routes/auth"
import UserRoute from "@api/user/controller/user"
import ProductRoute from "@api/product/controller/product"
import CartRoute from "@api/cart/controller/cart"
import OrderRoute from "@api/order/controller/order"

import { BaseRoutes } from "@common/routes/BaseRoutes"
import StripeRoute from "@api/stripe/controller/stripe"

/** Must Install Package
* Joi
*/

// DOTENV
const NODE_ENV = process.env.NODE_ENV

dotenv.config({
  path: NODE_ENV === "development" ? "./.env.development" : NODE_ENV === "prod" || NODE_ENV === "build" ? "./build/.env" : "./.env"
})

// CONSTANTS
const _PORT = process.env.PORT || "5000"

// VARIABLES
const app: express.Application = express()
const server: http.Server = http.createServer(app)
const routes: Array<BaseRoutes> = []
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : []

// MIDDLEWARE
app.use(express.json())
app.use(cors({
  origin: (origin: string | undefined, callback: Function) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) !== -1) return callback(null, true)

    const msg = "The CORS policy for this site does not allow access from the specified Origin"
    return callback(new Error(msg), false)
  }
}))

// MONGODB
mongoose.connect(`${process.env.MONGO_URL}`)
  .then(() => Log.info("MongoDB Connected Successfully"))
  .catch(err => Log.info(err))

// WEB ROUTES
app.get("/", (req, res, nxt) => {
  return res.send("ECommerce Application API")
})

// API ROUTES
// app.use("/api/auth", AuthRoute)
// app.use("/api/users", UserRoute)
// app.use("/api/products", ProductRoute)
// app.use("/api/cart", CartRoute)
// app.use("/api/order", OrderRoute)
// app.use("/api/stripe", StripeRoute)

routes.push(new AuthRoutes(app))

// LISTEN
server.listen(_PORT, () => {
  Log.info("Application is running, PORT " + _PORT)

  routes.forEach((route: BaseRoutes) => {
    Log.info(`Routes configure for ${route.getName()}`)
  })
})

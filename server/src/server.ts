import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

// MODULES
import "@module/_UserRequestModule"

// LOG
import log from "@log/index"

// Routes
import AuthRoute from "@api/auth"
import UserRoute from "@api/user"
import ProductRoute from "@api/product"
import CartRoute from "@api/cart"
import OrderRoute from "@api/order"

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
const app = express()

// MIDDLEWARE
app.use(express.json())

// MONGODB
mongoose.connect(`${process.env.MONGO_URL}`)
  .then(() => log.info("MongoDB Connected Successfully"))
  .catch(err => log.info(err))

// WEB ROUTES
app.get("/", (req, res, nxt) => {
  return res.send("ECommerce Application API")
})

// API ROUTES
app.use("/api/auth", AuthRoute)
app.use("/api/users", UserRoute)
app.use("/api/products", ProductRoute)
app.use("/api/cart", CartRoute)
app.use("/api/order", OrderRoute)

// LISTEN
app.listen(_PORT, () => {
  log.info("Application is running, PORT " + _PORT)
})

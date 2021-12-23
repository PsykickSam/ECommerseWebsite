import Mongoose from "mongoose"

// MODELS
import { Product } from "./Product"

export interface Order {
  userId: string,
  products: Array<Product>,
  amount: number,
  address: object,
  status: string
}

const OrderSchema = new Mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 }
      }
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" }
  },
  {
    timestamps: true
  }
)

export default Mongoose.model("Order", OrderSchema)

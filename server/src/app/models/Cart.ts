import Mongoose from "mongoose"

// MODELS
import { Product } from "./Product"

export interface Order {
  userId: string,
  products: Array<Product>,
}

const CartSchema = new Mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 }
      }
    ]
  },
  {
    timestamps: true
  }
)

export default Mongoose.model("Cart", CartSchema)

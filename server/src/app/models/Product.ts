import Mongoose from "mongoose"

export interface Product {
  productId: string,
  quantity: number,
  title: string,
  description: string,
  image: string,
  categories: Array<string>,
  size: string,
  color: string,
  price: number
}

const ProductSchema = new Mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

export default Mongoose.model("Product", ProductSchema)

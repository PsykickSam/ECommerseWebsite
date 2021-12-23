import Mongoose from "mongoose"

// INTERFACE
export interface User {
  id: string
  username: string,
  email: string,
  password: string,
  isAdmin: boolean
}

// SCHEMA
const UserSchema = new Mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
)

export default Mongoose.model("User", UserSchema)

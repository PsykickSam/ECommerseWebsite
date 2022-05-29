import Mongoose from "mongoose"

// SCHEMA
const UserSchema = new Mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    permissionFlags: { type: Number, required: true, default: 1 } // 1 - Normal, 2 - Seller, 97531 - Admin
  },
  {
    timestamps: true
  }
)

export default Mongoose.model("User", UserSchema)

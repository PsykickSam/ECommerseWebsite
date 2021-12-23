import { User } from "@models/User"

declare module "express-serve-static-core" {
  // eslint-disable-next-line no-unused-vars
  interface Request {
    user: User
  }
}

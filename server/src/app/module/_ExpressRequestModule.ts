import { IUserExtended } from "@interface/IUser"
import { Mode } from "@enum/EMode"

declare module "express-serve-static-core" {
  // eslint-disable-next-line no-unused-vars
  interface Request {
    user: IUserExtended | null;
    mode: Mode;
    token: string | null;
  }
}

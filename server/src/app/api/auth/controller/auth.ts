import * as express from "express"

import Refine from "@helper/Refine"

import { IAuthResponse } from "@interface/IResponse"
import { EDefaultResponseStatus } from "@enum/EDefaultResponseStatus"

class AuthController {
  login (req: express.Request, res: express.Response) {
    const user = Refine.except(req.user, ["password", "createdAt", "updatedAt"])
    const response: IAuthResponse = {
      isError: false,
      message: "Login successful!",
      status: EDefaultResponseStatus.SUCCESS,
      data: { ...user, token: req.token }
    }

    return res.status(200).json(response)
  }

  register (req: express.Request, res: express.Response) {
    const user = Refine.except(req.user, ["password", "createdAt", "updatedAt"])
    const response: IAuthResponse = {
      isError: false,
      message: "Register successful!",
      status: EDefaultResponseStatus.SUCCESS,
      data: { ...user, token: req.token }
    }

    return res.status(201).json(response)
  }
}

export default new AuthController()

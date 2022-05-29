import * as express from "express"

import Log from "@log/index"
import Crypto from "@helper/Crypto"
import CommonService from "@common/service"

import { IAuthResponse } from "@interface/IResponse"
import { EDefaultResponseStatus } from "@enum/EDefaultResponseStatus"

class UserVerificationMiddleware {
  async verifyUserExistence (req: express.Request, res: express.Response, nxt: express.NextFunction) {
    Log.info("Verifying the username existence through middleware", "verifyUserExistence")

    const user = await CommonService.UserService.getUserByUsername(req.body.username)
    const response: IAuthResponse = {} as IAuthResponse

    if (!user) {
      response.isError = true
      response.message = "Couldn't find user with in the database"
      response.status = EDefaultResponseStatus.FAILURE

      return res.status(401).json(response)
    }

    req.user = user
    return nxt()
  }

  async verifyUserNotExistence (req: express.Request, res: express.Response, nxt: express.NextFunction) {
    Log.info("Verifying the username existence through middleware", "verifyUserNotExistence")

    const user = await CommonService.UserService.getUserByUsername(req.body.username)
    const response: IAuthResponse = {} as IAuthResponse

    if (user) {
      response.isError = true
      response.message = "User already exists in the database"
      response.status = EDefaultResponseStatus.FAILURE

      return res.status(401).json(response)
    }

    req.user = null
    return nxt()
  }

  verifyUsernameAndPassword (req: express.Request, res: express.Response, nxt: express.NextFunction) {
    Log.info("Verifying the username and password through middleware", "verifyUsernameAndPassword")

    const response: IAuthResponse = {} as IAuthResponse
    if (!req.user) {
      response.isError = true
      response.message = "Couldn't find user with in the database"
      response.status = EDefaultResponseStatus.FAILURE

      return res.status(401).json(response)
    }

    if (req.body.password !== Crypto.decrypt(req.user.password, process.env.PASSWORD_SECRET)) {
      response.isError = true
      response.message = "Couldn't match password with this user"
      response.status = EDefaultResponseStatus.FAILURE

      return res.status(401).json(response)
    }

    return nxt()
  }
}

export default new UserVerificationMiddleware()

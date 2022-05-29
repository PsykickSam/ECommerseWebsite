import * as express from "express"

import Log from "@log/index"
import Refine from "@helper/Refine"
import Crypto from "@helper/Crypto"
import CommonService from "@common/service"

import { IAuthResponse } from "@interface/IResponse"
import { EDefaultResponseStatus } from "@enum/EDefaultResponseStatus"

class UserSaveMiddleware {
  async saveNewUser (req: express.Request, res: express.Response, nxt: express.NextFunction) {
    Log.info("Save new user through middleware", "saveNewUser")

    const response: IAuthResponse = {} as IAuthResponse
    const user = await CommonService.UserService.create({
      username: Refine.stringify(req.body.username),
      email: Refine.stringify(req.body.email),
      password: Crypto.encrypt(Refine.stringify(req.body.password), process.env.PASSWORD_SECRET)
    })

    if (!user) {
      response.isError = true
      response.message = "Failed to save in storage"
      response.status = EDefaultResponseStatus.FAILURE

      return res.status(500).json(response)
    }

    req.user = user
    return nxt()
  }
}

export default new UserSaveMiddleware()

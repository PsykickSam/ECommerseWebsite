import * as express from "express"

import Log from "@log/index"
import Token from "@helper/Token"

import { IAuthResponse } from "@interface/IResponse"
import { EDefaultResponseStatus } from "@enum/EDefaultResponseStatus"

class TokenMiddleware {
  createToken (req: express.Request, res: express.Response, nxt: express.NextFunction) {
    Log.info("Verifying the token through middleware", "createToken")

    const response: IAuthResponse = {} as IAuthResponse
    if (!req.user) {
      response.isError = true
      response.message = "Couldn't find user with in the database!"
      response.status = EDefaultResponseStatus.FAILURE

      return res.status(401).json(response)
    }

    const token = Token.sign({
      id: req.user.id,
      isAdmin: req.user.isAdmin
    })

    if (!token) {
      response.isError = true
      response.message = "Failed to create token!"
      response.status = EDefaultResponseStatus.FAILURE

      return res.status(500).json(response)
    }

    req.token = token
    return nxt()
  }
}

export default new TokenMiddleware()

import * as express from "express"

import Validator from "@helper/Validator"

import { IAuthResponse } from "@interface/IResponse"
import { EDefaultResponseStatus } from "@enum/EDefaultResponseStatus"

class ValidationMiddleware {
  validateRequestBody (bodyParams: Array<string>) {
    return (req: express.Request, res: express.Response, nxt: express.NextFunction) => {
      const response: IAuthResponse = {} as IAuthResponse
      if (!Validator.body(req.body, bodyParams)) {
        response.isError = true
        response.message = "Invalid body given!"
        response.status = EDefaultResponseStatus.FAILURE

        return res.status(400).json(response)
      }

      return nxt()
    }
  }
}

export default new ValidationMiddleware()

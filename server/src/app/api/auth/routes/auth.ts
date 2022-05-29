import * as express from "express"

import Constants from "@common/constants"
import ValidationMiddleware from "@api/auth/middleware/ValidationMiddleware"
import UserVerificationMiddleware from "@api/auth/middleware/UserVerificationMiddleware"
import TokenMiddleware from "@api/auth/middleware/TokenMiddleware"
import UserSaveMiddleware from "../middleware/UserSaveMiddleware"
import AuthController from "@api/auth/controller/auth"

import { BaseRoutes } from "@common/routes/BaseRoutes"

class AuthRoutes extends BaseRoutes {
  constructor (app: express.Application) {
    super(app, "AuthRoutes")
  }

  configureRoutes (): express.Application {
    this.app.post(Constants.routes.api.auth.login, [
      ValidationMiddleware.validateRequestBody(["username", "password"]),
      UserVerificationMiddleware.verifyUserExistence,
      UserVerificationMiddleware.verifyUsernameAndPassword,
      TokenMiddleware.createToken,
      AuthController.login
    ])

    this.app.post(Constants.routes.api.auth.register, [
      ValidationMiddleware.validateRequestBody(["username", "email", "password"]),
      UserVerificationMiddleware.verifyUserNotExistence,
      UserSaveMiddleware.saveNewUser,
      TokenMiddleware.createToken,
      AuthController.register
    ])

    return this.app
  }
}

export default AuthRoutes

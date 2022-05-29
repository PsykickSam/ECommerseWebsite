import jwt from "jsonwebtoken"

import { Request, Response, NextFunction } from "express"

// Util
import Util from "@util/util"

const skip = (req: Request, next: NextFunction): boolean => {
  if (Util.skipForDebugMode(req.mode)) {
    req.user = Util.debugUser(req.mode)

    next()
    return true
  }

  return false
}

const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
  if (skip(req, next)) return

  const token = Array.isArray(req.headers.token) ? req.headers.token[0] : req.headers.token

  if (token) {
    if (!process.env.JWT_SECRET) return res.status(500).json({ message: "Environment variable problem" })

    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err: any, user: any) => {
      if (err) return res.status(403).json({ message: "You are not authenticated" })
      req.user = user
      next()
    })

    return
  }

  return res.status(401).json({ message: "You are not authenticated" })
}

const VerifyTokenAuthorization = (req: Request, res: Response, next: NextFunction) => {
  if (skip(req, next)) return

  VerifyToken(req, res, () => {
    if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
      next()
      return
    }

    res.status(403).json("You are not allowed to do that!")
  })
}

const VerifyTokenAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (skip(req, next)) return

  VerifyToken(req, res, () => {
    if (req.user && req.user.isAdmin) {
      next()
      return
    }

    res.status(403).json("You are not allowed to do that!")
  })
}

export default { VerifyToken, VerifyTokenAuthorization, VerifyTokenAdmin }

import jwt from "jsonwebtoken"

const Token = {
  sign: (data: string | object | Buffer) => {
    if (!process.env.JWT_SECRET) return null

    return jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE_IN
    })
  }
}

export default Token

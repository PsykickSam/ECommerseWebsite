import { Mode } from "@enum/EMode"
import { Request, Response, NextFunction } from "express"

const CheckModeForTokenGate = (req: Request, res: Response, next: NextFunction) => {
  req.mode = process.env.MODE as Mode
}

export default { CheckModeForTokenGate }

import { Router, Request, Response } from "express"

const router = Router()

// TEST
router.get("", (req: Request, res: Response) => {
  res.send("Test is successful")
})

export default router

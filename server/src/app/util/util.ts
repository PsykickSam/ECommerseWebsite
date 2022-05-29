// Type
import { Mode } from "@enum/EMode"

// Models
import User from "@models/User"

class Util {
  static skipForDebugMode (mode: Mode): boolean {
    return mode === Mode.DEBUG
  }

  static debugUser (mode: Mode): InstanceType<typeof User> | null {
    if (mode === Mode.DEBUG) {
      const user = new User()
      user.username = "sadman"
      user.email = "sadman@gmail.com"
      user.password = "123123"
      user.isAdmin = true
      return user
    }

    return null
  }
}

export default Util

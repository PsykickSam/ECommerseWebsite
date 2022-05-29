/* eslint-disable no-console */
import util from "util"

class Log {
  private _check (run: Function, params: Array<string | undefined>) {
    if (process.env.SHOW_LOG !== "true") return

    run.apply(run, params)
  }

  private _text (text: string, message: String, method?: string, file?: string, isError: boolean = false) {
    if (method) text += "[" + method.toUpperCase() + "]"
    if (file) text += "[" + file.toUpperCase() + "]"

    if (!isError) {
      console.log("[LOG] " + text + " " + String(message))
    } else {
      console.error("[LOG] " + text + " " + String(message))
    }
  }

  info (message: string, method?: string, file?: string) {
    this._check(this._text, ["[INFO]", message, method, file])
  }

  warn (message: string, method?: string, file?: string) {
    this._check(this._text, ["[WARN]", message, method, file])
  }

  error (message: string, method?: string, file?: string) {
    this._check(this._text, ["[ERROR]", message, method, file])
  }

  object (message: string, obj: object, method?: string, file?: string) {
    this._check(this._text, ["[OBJECT]", message, method, file])

    console.log("[OBJECT - DESCRIPTION]")
    console.log(util.inspect(obj, false, null, true))
    console.log("[OBJECT - DESCRIPTION]")
  }

  table () {

  }
}

export default Log

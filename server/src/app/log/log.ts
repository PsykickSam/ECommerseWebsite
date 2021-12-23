class Log {
  private _check (run: Function, params: Array<string | undefined>) {
    if (process.env.SHOW_LOG !== "true") return

    run.apply(run, params)
  }

  private _text (text: string, message: String, method?: string, file?: string) {
    if (method) text += "[" + method.toUpperCase() + "]"
    if (file) text += "[" + file.toUpperCase() + "]"

    process.stdout.write("[LOG] " + text + " " + String(message) + "\n")
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
}

export default Log

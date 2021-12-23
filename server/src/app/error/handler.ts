import log from "@log/index"

const isNotCallback = (callback: Function): boolean => {
  log.info("Check Callback")
  return !!(callback === null || callback === undefined)
}

const Sync = (callback: Function, params?: Array<any>, message?: String, Exception?: Error): any => {
  if (isNotCallback(callback)) return null

  try {
    return callback.apply(params)
  } catch (ex) {
    log.error("Message: " + message)
    log.error("[HANDLER] Error: " + ex)

    if (Exception) throw Exception
    return null
  }
}

const Async = async (callback: Function, params?: Array<any>, message?: String, Exception?: Error): Promise<any> => {
  if (isNotCallback(callback)) return null

  try {
    return await callback.apply(params)
  } catch (ex) {
    log.error("Message: " + message)
    log.error("[HANDLER] Error: " + ex)

    if (Exception) throw Exception
    return null
  }
}

export default { Async, Sync }

const Refine = {
  stringify: (data: any): string => {
    return String(data)
  },
  except: (result: any, except: Array<string>): Array<Object> | Object | undefined => {
    if (result instanceof Array) {
      return result.map(model => {
        const others: any = {}
        Object.keys(model._doc).forEach(k => { if (!except.includes(k)) others[k] = model[k] })
        return others
      })
    } else if (result instanceof Object) {
      const others: any = {}
      Object.keys(result).forEach(k => { if (!except.includes(k)) others[k] = result[k] })
      return others
    }

    return undefined
  }
}

export default Refine

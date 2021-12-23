const Validator = {
  body: (body: any, matcher: Array<String>): boolean => {
    if (!(body instanceof Object)) return false
    if (Object.keys(body).length !== matcher.length) return false
    return Object.keys(body).every(v => matcher.includes(v))
  },
  nullify: (): any => {

  },
  email: (): any => {

  },
  password: (): any => {

  }
}

export default Validator

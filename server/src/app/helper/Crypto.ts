import { AES as CryptoAES, enc as CryptoENC } from "crypto-ts"

const Crypto = {
  encrypt: (password: string, secret?: string | undefined): string => {
    if (!secret) return password
    if (!process.env.PASSWORD_SECRET) return password
    return CryptoAES.encrypt(password, secret || process.env.PASSWORD_SECRET).toString()
  },
  decrypt: (password: string, secret?: string | undefined): string => {
    if (!secret) return password
    if (!process.env.PASSWORD_SECRET) return password
    return CryptoAES.decrypt(password, secret || process.env.PASSWORD_SECRET).toString(CryptoENC.Utf8)
  }
}

export default Crypto

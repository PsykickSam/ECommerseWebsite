import { IProduct } from "@interface/IProduct"

export interface Order {
  userId: string,
  products: Array<IProduct>,
  amount: number,
  address: object,
  status: string
}

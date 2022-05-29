export interface IProduct {
  productId: string,
  quantity: number,
  title: string,
  description: string,
  image: string,
  categories: Array<string>,
  size: string,
  color: string,
  price: number
}

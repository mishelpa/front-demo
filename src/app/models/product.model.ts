export interface Product {
 id: number,
 title: string,
 description: string,
 price: number,
 stock: number,
 brand: string,
 category: string,
 thumbnail: string,
}

export interface Products {
  products: Product[],
  total: number,
  skip: number,
  limit: number,
}

export interface IData {
  id: number;
  path: string;
  title: string;
  price: string;
  rate: string;
  discount?: number;
  count: number;
}

export interface IProduct {
  product: IData[];
  count: number;
}

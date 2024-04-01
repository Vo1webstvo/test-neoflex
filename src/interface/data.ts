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

export interface IHeadphones {
  data: {
    headphones: IData[];
    wirelles: IData[];
  };
  status: 'loading' | 'success' | 'error';
}

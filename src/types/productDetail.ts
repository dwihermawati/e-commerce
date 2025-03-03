import { Product } from './product';

export interface ProductDetail extends Product {
  quantity: number;
}

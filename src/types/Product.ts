export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'device' | 'pod' | 'juice';
  flavor?: string;
  nicotineStrength?: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}
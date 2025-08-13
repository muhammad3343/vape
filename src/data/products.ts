import { Product } from '../types/Product';

export const products: Product[] = [
  // Vape Devices
  {
    id: '1',
    name: 'VaporMax Pro Kit',
    price: 89.99,
    image: 'https://images.pexels.com/photos/5663474/pexels-photo-5663474.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'device',
    description: 'Premium vaping device with advanced temperature control and long-lasting battery.',
    inStock: true,
    rating: 4.8,
    reviews: 342
  },
  {
    id: '2',
    name: 'CloudMaster Elite',
    price: 129.99,
    image: 'https://images.pexels.com/photos/7203789/pexels-photo-7203789.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'device',
    description: 'High-performance device with customizable settings and premium build quality.',
    inStock: true,
    rating: 4.9,
    reviews: 287
  },
  
  // Pods
  {
    id: '3',
    name: 'Strawberry Kiwi Pod',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4210847/pexels-photo-4210847.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pod',
    flavor: 'Strawberry Kiwi',
    nicotineStrength: '3mg',
    description: 'Sweet strawberries perfectly blended with tangy kiwi for a refreshing experience.',
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: '4',
    name: 'Mint Chocolate Pod',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4210847/pexels-photo-4210847.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pod',
    flavor: 'Mint Chocolate',
    nicotineStrength: '6mg',
    description: 'Rich chocolate with cooling mint for the perfect dessert vape.',
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '5',
    name: 'Tropical Mango Pod',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4210847/pexels-photo-4210847.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pod',
    flavor: 'Tropical Mango',
    nicotineStrength: '3mg',
    description: 'Exotic mango flavor that transports you to tropical paradise.',
    inStock: true,
    rating: 4.5,
    reviews: 98
  },
  {
    id: '6',
    name: 'Vanilla Custard Pod',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4210847/pexels-photo-4210847.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pod',
    flavor: 'Vanilla Custard',
    nicotineStrength: '6mg',
    description: 'Smooth vanilla custard with creamy undertones.',
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  
  // E-Juices
  {
    id: '7',
    name: 'Blue Raspberry Blast',
    price: 19.99,
    image: 'https://images.pexels.com/photos/5946025/pexels-photo-5946025.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'juice',
    flavor: 'Blue Raspberry',
    nicotineStrength: '0mg',
    description: 'Bold blue raspberry flavor with a sweet finish. 60ml bottle.',
    inStock: true,
    rating: 4.4,
    reviews: 89
  },
  {
    id: '8',
    name: 'Lemon Tart Supreme',
    price: 19.99,
    image: 'https://images.pexels.com/photos/5946025/pexels-photo-5946025.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'juice',
    flavor: 'Lemon Tart',
    nicotineStrength: '3mg',
    description: 'Tangy lemon curd with buttery pastry notes. Premium 60ml bottle.',
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: '9',
    name: 'Watermelon Ice',
    price: 19.99,
    image: 'https://images.pexels.com/photos/5946025/pexels-photo-5946025.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'juice',
    flavor: 'Watermelon Ice',
    nicotineStrength: '6mg',
    description: 'Juicy watermelon with a cooling menthol finish. 60ml bottle.',
    inStock: true,
    rating: 4.6,
    reviews: 145
  }
];
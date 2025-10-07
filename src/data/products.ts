export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Stylish T-Shirt",
    price: 25.99,
    imageUrl: "https://via.placeholder.com/300x200?text=T-Shirt",
    description: "A comfortable and stylish t-shirt made from 100% organic cotton.",
  },
  {
    id: "2",
    name: "Classic Jeans",
    price: 59.99,
    imageUrl: "https://via.placeholder.com/300x200?text=Jeans",
    description: "Durable classic fit jeans, perfect for everyday wear.",
  },
  {
    id: "3",
    name: "Running Shoes",
    price: 89.99,
    imageUrl: "https://via.placeholder.com/300x200?text=Shoes",
    description: "Lightweight running shoes designed for maximum comfort and performance.",
  },
  {
    id: "4",
    name: "Leather Wallet",
    price: 35.00,
    imageUrl: "https://via.placeholder.com/300x200?text=Wallet",
    description: "Premium leather wallet with multiple card slots and a coin pocket.",
  },
  {
    id: "5",
    name: "Smartwatch",
    price: 199.99,
    imageUrl: "https://via.placeholder.com/300x200?text=Smartwatch",
    description: "Stay connected with this feature-rich smartwatch, compatible with all devices.",
  },
  {
    id: "6",
    name: "Backpack",
    price: 45.50,
    imageUrl: "https://via.placeholder.com/300x200?text=Backpack",
    description: "Spacious and durable backpack, ideal for travel or daily commute.",
  },
];
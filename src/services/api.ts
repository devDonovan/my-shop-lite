import { Product } from '../types';

const API_URL = 'https://mocki.io/v1/c53fb45e-5085-487a-afac-0295f62fb86e';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Check if data is an array directly or has a products property
    if (Array.isArray(data)) {
      return data;
    } else if (data.products && Array.isArray(data.products)) {
      return data.products;
    } else {
      return getSampleProducts();
    }
  } catch (error) {
    console.error('Error fetching products from API:', error);
    // Fallback to sample data
    return getSampleProducts();
  }
};

export const getSampleProducts = (): Product[] => [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced smartwatch with health monitoring, GPS, and water resistance.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    category: 'Home & Kitchen',
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable upper.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Sports',
  },
  {
    id: '5',
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with multiple compartments and USB charging port.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Accessories',
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    category: 'Electronics',
  },
];

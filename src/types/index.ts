export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  color: string;
  image: string;
  images?: string[];
  category: string;
  description: string;
  sizes: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface WishlistItem {
  id: string;
  product: Product;
  addedAt: Date;
}

export interface FilterOptions {
  category: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  inStock: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}
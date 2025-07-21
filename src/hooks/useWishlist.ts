import { useState, useCallback } from 'react';
import { WishlistItem, Product } from '../types';
import toast from 'react-hot-toast';

export const useWishlist = () => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = useCallback((product: Product) => {
    setItems(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) {
        toast.error('Already in wishlist');
        return prev;
      }

      const newItem: WishlistItem = {
        id: `wishlist-${product.id}-${Date.now()}`,
        product,
        addedAt: new Date(),
      };

      toast.success('Added to wishlist');
      return [...prev, newItem];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
    toast.success('Removed from wishlist');
  }, []);

  const isInWishlist = useCallback((productId: string) => {
    return items.some(item => item.product.id === productId);
  }, [items]);

  return {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};
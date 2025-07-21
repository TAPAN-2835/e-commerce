import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Product } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  loading?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onQuickView, 
  loading = false 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.sizes.length > 0) {
      addToCart(product, product.sizes[0], product.color, 1);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView(product);
  };

  if (loading) {
    return (
      <div className="group relative bg-white rounded-lg overflow-hidden">
        <Skeleton className="w-full h-64 md:h-80" />
        <div className="p-4 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-6 w-1/4" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleQuickView}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 w-full h-64 md:h-80" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="default" className="bg-green-600 text-white">
              New
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge variant="default" className="bg-orange-600 text-white">
              Best Seller
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive">
              Out of Stock
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              Sale
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="outline"
            className="w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={handleWishlistToggle}
            aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart 
              className={`w-4 h-4 ${
                isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`} 
            />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={handleQuickView}
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            className="w-full bg-black text-white hover:bg-gray-800"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-gray-700 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 mb-2">{product.color}</p>
        
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Available Sizes */}
        {product.sizes.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
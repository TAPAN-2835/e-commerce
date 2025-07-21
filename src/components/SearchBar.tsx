import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Product } from '../types';
import { products } from '../data/products';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onProductSelect?: (product: Product) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onProductSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.color.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    onSearch(searchQuery);
    setIsOpen(false);
  };

  const handleProductSelect = (product: Product) => {
    setQuery(product.name);
    setIsOpen(false);
    onProductSelect?.(product);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(query);
            }
            if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
          className="pl-10 pr-10 w-full"
          aria-label="Search products"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
          >
            {suggestions.map((product) => (
              <button
                key={product.id}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                onClick={() => handleProductSelect(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {product.color} • ${product.price}
                  </p>
                </div>
              </button>
            ))}
            <button
              className="w-full px-4 py-3 text-left hover:bg-gray-50 text-blue-600 font-medium border-t border-gray-200"
              onClick={() => handleSearch(query)}
            >
              Search for "{query}"
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
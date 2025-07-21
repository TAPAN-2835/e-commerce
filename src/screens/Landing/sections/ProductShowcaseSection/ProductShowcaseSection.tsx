import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { ProductCard } from "../../../../components/ProductCard";
import { ProductQuickView } from "../../../../components/ProductQuickView";
import { ProductFilters } from "../../../../components/ProductFilters";
import { products } from "../../../../data/products";
import { Product, FilterOptions, SortOption } from "../../../../types";

export const ProductShowcaseSection = (): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    priceRange: [0, 200],
    colors: [],
    sizes: [],
    inStock: false,
  });
  const [sortBy, setSortBy] = useState<string>('featured');

  const sortOptions: SortOption[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // In stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const activeFiltersCount = React.useMemo(() => {
    let count = 0;
    if (filters.category.length > 0) count++;
    if (filters.colors.length > 0) count++;
    if (filters.sizes.length > 0) count++;
    if (filters.inStock) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 200) count++;
    return count;
  }, [filters]);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setIsLoading(true);
    setFilters(newFilters);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <section id="products" className="pt-12 lg:pt-[90px] pb-12 lg:pb-[73px] w-full">
      <div className="px-4 lg:px-[42px]">
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="w-full font-display-100 font-[number:var(--display-100-font-weight)] text-black text-[length:var(--display-100-font-size)] text-center tracking-[var(--display-100-letter-spacing)] leading-[var(--display-100-line-height)] [font-style:var(--display-100-font-style)]">
            Everlane Favorites
          </h2>
          <p className="w-full font-text-400 font-[number:var(--text-400-font-weight)] text-black text-[length:var(--text-400-font-size)] text-center tracking-[var(--text-400-letter-spacing)] leading-[var(--text-400-line-height)] [font-style:var(--text-400-font-style)]">
            Beautifully Functional. Purposefully Designed. Consciously Crafted.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <ProductFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              isOpen={isFiltersOpen}
              onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
              activeFiltersCount={activeFiltersCount}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    onQuickView={handleQuickView}
                    loading={isLoading}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredProducts.length === 0 && !isLoading && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-lg text-gray-600 mb-4">No products found</p>
                <p className="text-sm text-gray-500 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => handleFiltersChange({
                    category: [],
                    priceRange: [0, 200],
                    colors: [],
                    sizes: [],
                    inStock: false,
                  })}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false);
          setSelectedProduct(null);
        }}
      />
    </section>
  );
};

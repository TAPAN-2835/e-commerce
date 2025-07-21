import React from 'react';
import { motion } from 'framer-motion';
import { X, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { FilterOptions } from '../types';
import { categories, colors, sizes } from '../data/products';

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
  activeFiltersCount: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
  activeFiltersCount,
}) => {
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.category, categoryId]
      : filters.category.filter(c => c !== categoryId);
    
    onFiltersChange({ ...filters, category: newCategories });
  };

  const handleColorChange = (colorId: string, checked: boolean) => {
    const newColors = checked
      ? [...filters.colors, colorId]
      : filters.colors.filter(c => c !== colorId);
    
    onFiltersChange({ ...filters, colors: newColors });
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    const newSizes = checked
      ? [...filters.sizes, size]
      : filters.sizes.filter(s => s !== size);
    
    onFiltersChange({ ...filters, sizes: newSizes });
  };

  const handlePriceRangeChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      category: [],
      priceRange: [0, 200],
      colors: [],
      sizes: [],
      inStock: false,
    });
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </div>
        </Button>
      </div>

      {/* Filter Panel */}
      <motion.div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block bg-white border border-gray-200 rounded-lg p-6 space-y-6`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Filters</h3>
          <div className="flex items-center gap-2">
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear all
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="lg:hidden w-6 h-6"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={filters.category.includes(category.id)}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(category.id, checked as boolean)
                  }
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-sm text-gray-700 cursor-pointer flex-1"
                >
                  {category.name} ({category.count})
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Price Range</h4>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceRangeChange}
              max={200}
              min={0}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Colors</h4>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <div key={color.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color.id}`}
                  checked={filters.colors.includes(color.id)}
                  onCheckedChange={(checked) =>
                    handleColorChange(color.id, checked as boolean)
                  }
                />
                <label
                  htmlFor={`color-${color.id}`}
                  className="text-sm text-gray-700 cursor-pointer flex items-center gap-2"
                >
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Sizes</h4>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  id={`size-${size}`}
                  checked={filters.sizes.includes(size)}
                  onCheckedChange={(checked) =>
                    handleSizeChange(size, checked as boolean)
                  }
                />
                <label
                  htmlFor={`size-${size}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* In Stock Only */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="in-stock"
            checked={filters.inStock}
            onCheckedChange={(checked) =>
              onFiltersChange({ ...filters, inStock: checked as boolean })
            }
          />
          <label htmlFor="in-stock" className="text-sm text-gray-700 cursor-pointer">
            In stock only
          </label>
        </div>
      </motion.div>
    </>
  );
};
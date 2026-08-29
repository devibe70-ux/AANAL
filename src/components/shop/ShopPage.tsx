import React, { useState, useMemo } from 'react';
import { Product } from '../../types/ecommerce';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from './FilterSidebar';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { CATEGORIES } from '../../data/products';

interface ShopPageProps {
  products: Product[];
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  initialCategory = 'all',
  onSelectProduct,
  onQuickView
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [maxPrice, setMaxPrice] = useState(15000);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popularity' | 'price-low' | 'price-high' | 'rating'>('popularity');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract all unique colors
  const allColors = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.colors.forEach((c) => set.add(c)));
    return Array.from(set);
  }, [products]);

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'all') {
          const match = p.categories.some(
            (c) => c.toLowerCase() === selectedCategory.toLowerCase()
          );
          if (!match) return false;
        }

        // Occasion filter
        if (selectedOccasion !== 'all') {
          const match = p.occasions.some(
            (o) => o.toLowerCase() === selectedOccasion.toLowerCase()
          );
          if (!match) return false;
        }

        // Color filter
        if (selectedColor !== 'all') {
          const match = p.colors.some(
            (c) => c.toLowerCase() === selectedColor.toLowerCase()
          );
          if (!match) return false;
        }

        // Price filter
        if (p.price > maxPrice) return false;

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const match =
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.categories.some((c) => c.toLowerCase().includes(q));
          if (!match) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.is_bestseller ? 1 : 0) - (a.is_bestseller ? 1 : 0);
      });
  }, [products, selectedCategory, selectedOccasion, selectedColor, maxPrice, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedOccasion('all');
    setSelectedColor('all');
    setMaxPrice(15000);
    setSearchQuery('');
    setSortBy('popularity');
  };

  const currentCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="bg-[#faf8f5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-bold">
            Haute Couture &amp; Festive Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-royal-950 mt-1">
            {currentCategoryObj ? currentCategoryObj.name : 'Exclusive Designer Outfits'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Handcrafted with timeless zari, authentic mirror work, and pure silk fabrics from Ahmedabad.
          </p>
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gold-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, fabric, occasion..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#fbf9f6] border border-slate-200 rounded-xl focus:outline-none focus:border-gold-600"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 bg-royal-900 text-gold-300 text-xs font-bold rounded-xl flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium hidden sm:inline flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5 text-gold-600" /> Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#fbf9f6] border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-royal-900 focus:outline-none focus:border-gold-600"
              >
                <option value="popularity">Most Popular &amp; Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <span className="text-xs font-mono text-slate-500">
              {filteredProducts.length} items
            </span>
          </div>

        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <FilterSidebar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedOccasion={selectedOccasion}
                onSelectOccasion={setSelectedOccasion}
                selectedColor={selectedColor}
                onSelectColor={setSelectedColor}
                maxPrice={maxPrice}
                onPriceChange={setMaxPrice}
                onReset={handleResetFilters}
                colorsList={allColors}
              />
            </div>
          </div>

          {/* Mobile Filter Modal */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex lg:hidden">
              <div className="w-4/5 max-w-sm bg-white h-full p-5 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif font-bold text-lg text-royal-900">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)} className="text-slate-500">
                    ✕
                  </button>
                </div>
                <FilterSidebar
                  selectedCategory={selectedCategory}
                  onSelectCategory={(c) => { setSelectedCategory(c); setMobileFilterOpen(false); }}
                  selectedOccasion={selectedOccasion}
                  onSelectOccasion={(o) => { setSelectedOccasion(o); setMobileFilterOpen(false); }}
                  selectedColor={selectedColor}
                  onSelectColor={(co) => { setSelectedColor(co); setMobileFilterOpen(false); }}
                  maxPrice={maxPrice}
                  onPriceChange={setMaxPrice}
                  onReset={handleResetFilters}
                  colorsList={allColors}
                />
              </div>
              <div className="flex-1" onClick={() => setMobileFilterOpen(false)}></div>
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gold-200 p-12 text-center space-y-4">
                <p className="font-serif text-lg text-royal-900 font-bold">No outfits found matching your filters</p>
                <p className="text-xs text-slate-500">Try adjusting your price range, selected color, or category.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-royal-900 text-gold-300 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gold-600 hover:text-royal-950 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onSelectProduct={onSelectProduct}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

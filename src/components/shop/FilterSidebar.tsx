import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import { CATEGORIES, OCCASIONS, getCategoryCount } from '../../data/products';
import { Product } from '../../types/ecommerce';
import { useCurrency } from '../../context/CurrencyContext';

interface FilterSidebarProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedOccasion: string;
  onSelectOccasion: (occ: string) => void;
  selectedColor: string;
  onSelectColor: (color: string) => void;
  maxPrice: number;
  onPriceChange: (price: number) => void;
  onReset: () => void;
  colorsList: string[];
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  selectedOccasion,
  onSelectOccasion,
  selectedColor,
  onSelectColor,
  maxPrice,
  onPriceChange,
  onReset,
  colorsList
}) => {
  const { format } = useCurrency();

  return (
    <div className="bg-white p-5 rounded-2xl border border-gold-200/70 shadow-sm space-y-6">
      
      <div className="flex justify-between items-center pb-3 border-b border-slate-100">
        <h3 className="font-serif font-bold text-base text-royal-900 flex items-center gap-2">
          <Filter className="w-4 h-4 text-gold-600" /> Filters
        </h3>
        <button
          onClick={onReset}
          className="text-xs text-slate-500 hover:text-maroon-600 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-royal-900 mb-2.5">
          Collection Category
        </h4>
        <div className="space-y-1.5">
          {CATEGORIES.map((c) => {
            const count = getCategoryCount(products, c.id);
            return (
              <button
                key={c.id}
                onClick={() => onSelectCategory(c.id)}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex justify-between items-center transition-colors ${
                  selectedCategory === c.id
                    ? 'bg-royal-900 text-gold-300 font-bold'
                    : 'text-slate-700 hover:bg-gold-50'
                }`}
              >
                <span>{c.name}</span>
                <span className="text-[10px] opacity-70 font-mono">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Occasion */}
      <div>
        <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-royal-900 mb-2.5">
          Occasion
        </h4>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSelectOccasion('all')}
            className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
              selectedOccasion === 'all'
                ? 'bg-gold-600 text-white font-bold'
                : 'bg-slate-100 text-slate-700 hover:bg-gold-100'
            }`}
          >
            All Occasions
          </button>
          {OCCASIONS.map((occ) => (
            <button
              key={occ}
              onClick={() => onSelectOccasion(occ)}
              className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                selectedOccasion === occ
                  ? 'bg-gold-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-gold-100'
              }`}
            >
              {occ}
            </button>
          ))}
        </div>
      </div>

      {/* Max Price Filter */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-royal-900">
            Price Range
          </h4>
          <span className="font-mono text-xs font-bold text-gold-700">
            Up to {format(maxPrice)}
          </span>
        </div>
        <input
          type="range"
          min="4000"
          max="15000"
          step="500"
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-gold-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
          <span>{format(4000)}</span>
          <span>{format(15000)}</span>
        </div>
      </div>

      {/* Color Swatches */}
      <div>
        <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-royal-900 mb-2.5">
          Color Palette
        </h4>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSelectColor('all')}
            className={`px-2 py-1 rounded text-xs ${
              selectedColor === 'all'
                ? 'bg-royal-900 text-white font-bold'
                : 'bg-slate-100 text-slate-700 hover:bg-gold-100'
            }`}
          >
            All Colors
          </button>
          {colorsList.map((color) => (
            <button
              key={color}
              onClick={() => onSelectColor(color)}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                selectedColor === color
                  ? 'bg-royal-900 text-gold-300 font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-gold-100'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

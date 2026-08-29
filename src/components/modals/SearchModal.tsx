import React, { useState } from 'react';
import { X, Search, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../../types/ecommerce';
import { useCurrency } from '../../context/CurrencyContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (p: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const { format } = useCurrency();

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q)) ||
          p.occasions.some((o) => o.toLowerCase().includes(q))
        );
      })
    : products.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gold-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search input bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gold-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Lehengas, Chaniya Choli, Gowns, Nayra Cut..."
            className="w-full text-sm sm:text-base font-medium text-royal-950 focus:outline-none placeholder:text-slate-400"
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-royal-900 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-6 space-y-3">
          <p className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-2">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Recommendations'}
          </p>

          {results.length === 0 ? (
            <p className="text-xs text-slate-500 py-8 text-center">No outfits found for "{query}".</p>
          ) : (
            results.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onClose();
                  onSelectProduct(prod);
                }}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-gold-50/70 border border-transparent hover:border-gold-200 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
                    className="w-12 h-14 object-cover object-top rounded-lg bg-slate-100 border border-slate-200 shrink-0"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-royal-950">{prod.title}</h4>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {prod.categories[0]} &bull; {format(prod.price)}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gold-600 opacity-0 group-hover:opacity-100" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

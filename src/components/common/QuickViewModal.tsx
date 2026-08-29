import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Scissors, Star, Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../../types/ecommerce';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onViewFullDetails: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onViewFullDetails
}) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { format } = useCurrency();
  const [selectedSize, setSelectedSize] = useState('M');

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gold-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white text-royal-900 shadow"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="aspect-[3/4] bg-[#f5f1ea] relative">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-gold-700 font-mono">
                {product.categories[0]} &bull; {product.sku}
              </span>
              <h3 className="font-serif font-bold text-lg text-royal-950 mt-1">
                {product.title}
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <span className="font-mono text-xl font-bold text-royal-900">
                  {format(product.price)}
                </span>
                {product.regular_price > product.price && (
                  <span className="font-mono text-xs text-slate-400 line-through">
                    {format(product.regular_price)}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                {product.description}
              </p>

              {/* Sizes */}
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-royal-900 mb-1.5">
                  Size:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {product.sizes.slice(0, 5).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border ${
                        selectedSize === s
                          ? 'bg-royal-900 text-gold-300 border-royal-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  addToCart(product, 1, selectedSize, product.colors[0], 'ready-to-wear');
                  onClose();
                }}
                className="w-full py-3 bg-gold-gradient text-royal-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow hover:opacity-90 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>

              <button
                onClick={() => {
                  onClose();
                  onViewFullDetails(product);
                }}
                className="w-full py-2.5 bg-slate-100 hover:bg-gold-50 text-royal-900 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Full Details &amp; Custom Stitching</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

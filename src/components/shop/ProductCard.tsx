import React from 'react';
import { Heart, Eye, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { Product } from '../../types/ecommerce';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickView
}) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { format } = useCurrency();

  const discountPercent = Math.round(
    ((product.regular_price - product.price) / product.regular_price) * 100
  );

  return (
    <div className="group relative bg-white rounded-2xl border border-[#efe9dc] overflow-hidden hover:shadow-xl hover:border-gold-400 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image & Floating Badges */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f1ea] cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.is_bestseller && (
            <span className="bg-[#1b2a4a] text-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold-500/30 flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3 text-gold-400" /> Bestseller
            </span>
          )}
          {product.is_new && (
            <span className="bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
              New Arrival
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-maroon-700 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md shadow">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-md z-10 ${
            isInWishlist(product.id)
              ? 'bg-maroon-600 text-white'
              : 'bg-white/80 text-royal-900 hover:bg-white hover:text-maroon-600'
          }`}
          title={isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View overlay button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-royal-950 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5 backdrop-blur-sm z-10"
        >
          <Eye className="w-3.5 h-3.5" /> Quick View
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span className="uppercase tracking-wider font-semibold text-gold-700">
              {product.categories[0] || 'Designer Wear'}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
              <span className="text-slate-400">({product.reviews_count})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif font-bold text-sm text-royal-900 line-clamp-1 hover:text-gold-600 cursor-pointer transition-colors"
            title={product.title}
          >
            {product.title}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-1 mt-1">
            {product.specifications.work}
          </p>
        </div>

        {/* Price & Add to Cart button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-royal-900">
                {format(product.price)}
              </span>
              {product.regular_price > product.price && (
                <span className="font-mono text-xs text-slate-400 line-through">
                  {format(product.regular_price)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold block">
              Inclusive of all taxes
            </span>
          </div>

          <button
            onClick={() => addToCart(product, 1, 'M', product.colors[0], 'ready-to-wear')}
            className="bg-[#1b2a4a] hover:bg-gold-600 text-gold-200 hover:text-royal-950 p-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

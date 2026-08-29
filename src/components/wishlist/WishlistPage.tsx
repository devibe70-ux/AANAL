import React from 'react';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { ProductCard } from '../shop/ProductCard';
import { Product } from '../../types/ecommerce';

interface WishlistPageProps {
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onNavigateToShop: () => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({
  onSelectProduct,
  onQuickView,
  onNavigateToShop
}) => {
  const { wishlist, wishlistCount } = useWishlist();

  return (
    <div className="bg-[#faf8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-200/60">
          <button
            onClick={onNavigateToShop}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-gold-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </button>
          
          <h1 className="font-serif text-2xl font-bold text-royal-950">
            My Royal Wishlist ({wishlistCount})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gold-200 p-16 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-pink-50 text-maroon-600 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-xl font-bold text-royal-950">Your Wishlist is Empty</h2>
            <p className="text-xs text-slate-500">
              Save your dream bridal lehengas and designer gowns for quick access later.
            </p>
            <button
              onClick={onNavigateToShop}
              className="px-6 py-2.5 bg-royal-900 text-gold-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold-600 hover:text-royal-950 transition-colors shadow"
            >
              Explore Catalog
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((prod) => (
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
  );
};

import React from 'react';
import { Product } from '../../types/ecommerce';
import { ProductCard } from '../shop/ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedCollectionsProps {
  products: Product[];
  onSelectProduct: (p: Product) => void;
  onQuickView: (p: Product) => void;
  onViewAll: () => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  products,
  onSelectProduct,
  onQuickView,
  onViewAll
}) => {
  const bestsellers = products.filter((p) => p.is_bestseller).slice(0, 8);

  return (
    <section className="py-16 bg-white border-t border-[#f0eae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" /> Iconic Couture
            </span>
            <h2 className="font-serif text-3xl font-bold text-royal-950 mt-1">
              Bestselling Ethnic Creations
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="px-6 py-2.5 bg-gold-50 hover:bg-gold-100 text-royal-900 border border-gold-300 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span>View All {products.length} Designs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelectProduct={onSelectProduct}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

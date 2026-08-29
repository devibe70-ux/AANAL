import React from 'react';
import { CATEGORIES } from '../../data/products';
import { ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const displayCats = CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <section className="py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-bold">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-950 mt-1">
            Shop by Royal Silhouette
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Explore authentic Gujarati festive chaniya cholis, modern indo-western gowns, and designer suit sets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayCats.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-gold-200/50"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101c33]/90 via-[#101c33]/30 to-transparent group-hover:from-[#101c33]/95 transition-colors" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] text-gold-300 uppercase tracking-widest font-mono">
                  {cat.count} Designs
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-gold-200 transition-colors">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-gold-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Sparkles, Video } from 'lucide-react';
import { Product } from '../../types/ecommerce';

interface StoryReelsProps {
  products: Product[];
  onOpenStory: (product: Product) => void;
}

export const StoryReels: React.FC<StoryReelsProps> = ({ products, onOpenStory }) => {
  const stories = [
    { title: "Real Brides", product: products[0] },
    { title: "Gowns Drape", product: products[1] },
    { title: "Silk Sharara", product: products[2] },
    { title: "Mirror Choli", product: products[18] || products[0] },
    { title: "Kalamkari", product: products[4] },
    { title: "Nayra Cut", product: products[10] || products[3] },
    { title: "Plus Size Fit", product: products[20] || products[5] },
  ];

  return (
    <div className="bg-white py-6 border-b border-[#eee7d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
          
          <div className="shrink-0 flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2px] bg-gradient-to-tr from-gold-600 via-amber-400 to-gold-700 flex items-center justify-center shadow">
              <div className="w-full h-full rounded-full bg-royal-900 flex flex-col items-center justify-center text-gold-300">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">Live</span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-royal-900">New Looks</span>
          </div>

          {stories.map((story, idx) => (
            <div
              key={idx}
              onClick={() => story.product && onOpenStory(story.product)}
              className="shrink-0 flex flex-col items-center gap-1.5 cursor-pointer group"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-gold-500 to-royal-800 group-hover:scale-105 transition-transform duration-200 shadow">
                <img
                  src={story.product?.images[0] || ''}
                  alt={story.title}
                  className="w-full h-full object-cover object-top rounded-full bg-slate-100"
                />
              </div>
              <span className="text-[11px] font-medium text-slate-700 group-hover:text-gold-700 transition-colors truncate max-w-[70px]">
                {story.title}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

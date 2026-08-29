import React from 'react';
import { OCCASIONS } from '../../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

interface OccasionSectionProps {
  onSelectOccasion: (occ: string) => void;
}

export const OccasionSection: React.FC<OccasionSectionProps> = ({ onSelectOccasion }) => {
  const occasionBanners = [
    {
      title: "Wedding & Bridal Trousseau",
      desc: "Heavily embellished kalidar lehengas, double can-can, and real mirror work.",
      image: "https://aanalgurukul.com/wp-content/uploads/2026/07/Photoroom-20250408_191909.png",
      tag: "Wedding"
    },
    {
      title: "Sangeet & Cocktail Glamour",
      desc: "Contemporary draped gowns, corset crop tops, and floor-skimming shrugs.",
      image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-16-at-12.47.38.jpeg",
      tag: "Sangeet"
    },
    {
      title: "Haldi & Mehendi Vibes",
      desc: "Luminous lemon yellows, Lakhnavi chikankari Nayra cuts, and floral organza.",
      image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.09.55-2.jpeg",
      tag: "Haldi"
    }
  ];

  return (
    <section className="py-16 bg-[#faf7f2] border-t border-gold-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-bold">
            Curated by Celebration
          </span>
          <h2 className="font-serif text-3xl font-bold text-royal-950 mt-1">
            Shop by Wedding Occasion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {occasionBanners.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectOccasion(item.tag)}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-gold-200/60 cursor-pointer h-96 flex flex-col justify-end p-6 text-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101c33] via-[#101c33]/40 to-transparent" />

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-bold uppercase tracking-wider border border-gold-400/30">
                  {item.tag} Edit
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-gold-400 font-bold">
                  <span>Shop {item.tag} Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

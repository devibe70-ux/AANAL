import React from 'react';
import { MapPin, Sparkles, Phone } from 'lucide-react';

interface BrandStoryProps {
  onOpenStoreLocator: () => void;
  onOpenBookStylist: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenStoreLocator, onOpenBookStylist }) => {
  return (
    <section className="py-20 bg-[#1b2a4a] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" /> The Aanal Gurukul Heritage
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Weaving Royal Gujarati Splendor with Haute Modern Couture
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Located at the fashion heart of Ahmedabad at Shantam Complex, Gurukul Road, Aanal Gurukul was born from an unwavering passion to celebrate the timeless grandeur of Indian craftsmanship.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From handloom Gaji silks and Rajasthani Bandhej to intricate Lakhnavi chikankari and Swarovski crystal zardozi, our master artisans craft each piece to bring regal grace, flawless fit, and enduring luxury to every bride and modern woman worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
              <div>
                <span className="font-serif text-2xl font-bold text-gold-300">10,000+</span>
                <p className="text-xs text-slate-300 mt-0.5">Brides &amp; Happy Clients Worldwide</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-gold-300">100%</span>
                <p className="text-xs text-slate-300 mt-0.5">Authentic Handcrafted Art</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenStoreLocator}
                className="px-6 py-3 bg-gold-gradient text-royal-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" /> Visit Ahmedabad Flagship Store
              </button>
              <button
                onClick={onOpenBookStylist}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-gold-200 border border-gold-500/30 font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" /> Book a Call Now
              </button>
            </div>

          </div>

          {/* Storefront / Showcase image card */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl">
              <img
                src="https://aanalgurukul.com/wp-content/uploads/2026/07/Picsart_26-07-07_23-50-08-307.jpg-scaled.jpeg"
                alt="Aanal Gurukul Ahmedabad Flagship Store"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-royal-950 p-4 rounded-2xl shadow-xl border border-gold-300 max-w-xs hidden sm:block">
              <p className="text-xs font-bold font-serif">Flagship Store in Gurukul</p>
              <p className="text-[11px] text-slate-600 mt-0.5">
                G4 Shantam Complex, Gurukul Road, Ahmedabad 380052
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

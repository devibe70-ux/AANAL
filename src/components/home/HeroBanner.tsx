import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Phone } from 'lucide-react';

interface HeroBannerProps {
  onExplore: (category?: string) => void;
  onBookStylist: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore, onBookStylist }) => {
  const slides = [
    {
      title: "Royal Bridal & Sangeet Couture",
      subtitle: "Ahmedabad's Finest Handcrafted Lehengas & Chaniya Cholis",
      badge: "Festive Collection 2026",
      image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-16-at-12.47.38.jpeg",
      category: "Lehenga",
      cta: "Shop Bridal Choli"
    },
    {
      title: "Haute Indo-Western Gowns",
      subtitle: "Fluid Draped Silhouettes, Corset Bodices & Modern Zardozi",
      badge: "Red Carpet & Cocktail",
      image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-16-at-12.47.43-2.jpeg",
      category: "Gowns",
      cta: "Explore Gowns"
    },
    {
      title: "Royal Silk Sharara & Palazzo Sets",
      subtitle: "Pure Gaji & Chinon Silk Handcrafted in Gujarat",
      badge: "Bestselling Ensembles",
      image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-2.19.42-PM.jpeg",
      category: "Sharara",
      cta: "View Sharara Sets"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide];

  return (
    <div className="relative bg-[#101c33] text-white overflow-hidden">
      
      {/* Background Image with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-top opacity-35 scale-105 transition-all duration-1000 ease-out filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101c33] via-[#101c33]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{slide.badge}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {slide.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
            {slide.subtitle}. Every creation is customized to your bespoke measurements with master Gujarati craftsmanship.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onExplore(slide.category)}
              className="px-8 py-4 bg-gold-gradient text-royal-950 font-bold text-xs uppercase tracking-widest rounded-full hover:opacity-95 shadow-2xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>{slide.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* USER SPECIFIED: Book a Call Now */}
            <button
              onClick={onBookStylist}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-gold-200 border border-gold-500/30 font-semibold text-xs uppercase tracking-wider rounded-full backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Book a Call Now</span>
            </button>
          </div>

        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'w-10 bg-gold-400' : 'w-2.5 bg-white/30'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

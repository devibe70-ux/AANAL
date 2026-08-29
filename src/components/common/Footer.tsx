import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Truck, 
  Scissors, 
  CreditCard,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenStoreLocator: () => void;
  onOpenBookStylist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onOpenStoreLocator, 
  onOpenBookStylist 
}) => {
  return (
    <footer className="bg-[#101c33] text-[#e5eaf3] border-t-2 border-gold-500/40 pt-16 pb-8">
      
      {/* 4 Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#22355b]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-4 bg-[#18294a] p-4 rounded-xl border border-gold-500/20">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">100% Authentic Handcraft</h4>
              <p className="text-xs text-slate-300">Pure Gaji, Chinon, Organza &amp; Real Mirror Work</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#18294a] p-4 rounded-xl border border-gold-500/20">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300 shrink-0">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">Custom Made-to-Measure</h4>
              <p className="text-xs text-slate-300">Bespoke stitching tailored to your exact body fit</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#18294a] p-4 rounded-xl border border-gold-500/20">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">Worldwide Express Shipping</h4>
              <p className="text-xs text-slate-300">Doorstep delivery to USA, UK, Canada, UAE &amp; India</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#18294a] p-4 rounded-xl border border-gold-500/20">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300 shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">Secure Payment Gateway</h4>
              <p className="text-xs text-slate-300">Razorpay, UPI QR, Cards &amp; Verified COD</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display tracking-[0.2em] text-2xl font-extrabold text-white uppercase">
                AANAL
              </span>
              <span className="font-serif italic text-xs tracking-widest text-gold-400 font-semibold px-2 py-0.5 border border-gold-400/50 rounded">
                GURUKUL
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pr-6">
              Aanal Gurukul is a premier Indian ethnic and indo-western couture brand rooted in Ahmedabad, Gujarat. Celebrated for royal bridal lehengas, festive chaniya cholis, Lakhnavi chikankari, and contemporary fusion silhouettes designed for every occasion.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://www.instagram.com/aanal_gurukul" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity text-xs font-bold"
                title="Follow @aanal_gurukul on Instagram"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity text-xs font-bold"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity text-xs font-bold"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase mb-4 border-b border-gold-500/30 pb-2">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><button onClick={() => onNavigate('shop', 'Lehenga')} className="hover:text-gold-400 transition-colors">Bridal Lehengas</button></li>
              <li><button onClick={() => onNavigate('shop', 'Lehenga')} className="hover:text-gold-400 transition-colors">Chaniya Choli</button></li>
              <li><button onClick={() => onNavigate('shop', 'Gowns')} className="hover:text-gold-400 transition-colors">Designer Gowns</button></li>
              <li><button onClick={() => onNavigate('shop', 'Sharara')} className="hover:text-gold-400 transition-colors">Sharara &amp; Palazzo</button></li>
              <li><button onClick={() => onNavigate('shop', 'Nayra Cut')} className="hover:text-gold-400 transition-colors">Nayra Cut Suits</button></li>
              <li><button onClick={() => onNavigate('shop', 'Co-ords')} className="hover:text-gold-400 transition-colors">Indo-Western Co-ords</button></li>
              <li><button onClick={() => onNavigate('shop', 'Plus Size')} className="hover:text-gold-400 transition-colors">Plus Size Couture (3XL-5XL)</button></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase mb-4 border-b border-gold-500/30 pb-2">
              Client Concierge
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><button onClick={() => onNavigate('track')} className="hover:text-gold-400 transition-colors font-medium text-gold-300">Track Your Order</button></li>
              <li><button onClick={onOpenBookStylist} className="hover:text-gold-400 transition-colors">Book a Call Now</button></li>
              <li><button onClick={onOpenStoreLocator} className="hover:text-gold-400 transition-colors">Flagship Store Directions (Gurukul)</button></li>
              <li><button onClick={() => onNavigate('wishlist')} className="hover:text-gold-400 transition-colors">My Wishlist</button></li>
              <li><button onClick={() => onNavigate('admin')} className="hover:text-gold-400 transition-colors text-slate-400">Merchant Portal &amp; Google Feed</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase mb-4 border-b border-gold-500/30 pb-2">
              Flagship Store
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>G4, Nr. Sunset Shantam Complex, Gurukul Road, Avani Row House, Ahmedabad, Gujarat 380052 India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+917600917948" className="hover:text-gold-300">+91 76009 17948</a> / <a href="tel:+919274854445" className="hover:text-gold-300">92748 54445</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:contact@aanalgurukul.com" className="hover:text-gold-300">contact@aanalgurukul.com</a>
              </p>
              <div className="pt-2">
                <span className="inline-block bg-gold-500/20 text-gold-300 px-2 py-1 rounded text-[11px] font-mono border border-gold-500/30">
                  Open Daily: 10:30 AM – 9:00 PM
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright & Payment Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#22355b] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} AANAL GURUKUL. Handcrafted in Ahmedabad. All Rights Reserved.
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span>Accepted:</span>
          <span className="px-2 py-0.5 bg-[#18294a] rounded text-slate-200 border border-slate-700 font-mono">UPI / GPay / PhonePe</span>
          <span className="px-2 py-0.5 bg-[#18294a] rounded text-slate-200 border border-slate-700 font-mono">Razorpay</span>
          <span className="px-2 py-0.5 bg-[#18294a] rounded text-slate-200 border border-slate-700 font-mono">Cards &amp; NetBanking</span>
        </div>
      </div>
    </footer>
  );
};

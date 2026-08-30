import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Globe, 
  Phone, 
  Sparkles, 
  MapPin, 
  Truck, 
  User
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';
import { CurrencyCode } from '../../types/ecommerce';

interface NavbarProps {
  onNavigate: (view: string, param?: string) => void;
  currentView: string;
  onOpenSearch: () => void;
  onOpenStoreLocator: () => void;
  onOpenBookStylist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  currentView,
  onOpenSearch,
  onOpenStoreLocator,
  onOpenBookStylist
}) => {
  const { itemCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { currency, setCurrency, supportedCurrencies } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'All Collections', view: 'shop', param: 'all' },
    { label: 'Lehenga & Chaniya Choli', view: 'shop', param: 'Lehenga' },
    { label: 'Designer Gowns', view: 'shop', param: 'Gowns' },
    { label: 'Sharara & Palazzo', view: 'shop', param: 'Sharara' },
    { label: 'Nayra Cut', view: 'shop', param: 'Nayra Cut' },
    { label: 'Plus Size', view: 'shop', param: 'Plus Size' },
    { label: 'Track Order', view: 'track' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#1b2a4a] text-[#f5eed2] text-xs py-2 px-4 border-b border-[#2d426d] flex justify-between items-center tracking-wider">
        <div className="hidden md:flex items-center gap-6 text-[11px] font-medium">
          <span className="flex items-center gap-1.5 text-gold-300">
            <Sparkles className="w-3.5 h-3.5" /> Handcrafted in Ahmedabad, Gujarat
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Truck className="w-3.5 h-3.5 text-gold-400" /> Worldwide Express Shipping (USA, UK, UAE &amp; 50+ Countries)
          </span>
        </div>
        
        <div className="flex-1 md:flex-initial text-center md:text-left text-[11px]">
          <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded font-semibold border border-gold-500/30 mr-2">
            FESTIVE OFFER
          </span>
          Use code <strong className="text-gold-300 tracking-widest font-mono">AANAL10</strong> for 10% OFF
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[11px]">
          <button 
            onClick={onOpenBookStylist} 
            className="hover:text-gold-300 transition-colors flex items-center gap-1 font-bold text-gold-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-gold-400/30"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" /> Book a Call Now
          </button>
          
          <button 
            onClick={onOpenStoreLocator} 
            className="hover:text-gold-300 transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-gold-400" /> Visit Gurukul Flagship Store
          </button>

          {/* Vercel Geolocation & Localized Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 bg-black/30 hover:bg-black/50 px-2.5 py-1 rounded border border-white/10 text-gold-200 transition-colors font-mono"
            >
              <Globe className="w-3 h-3 text-gold-400" />
              <span>{currency} ({supportedCurrencies[currency]?.symbol})</span>
            </button>
            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-[#1b2a4a] border border-gold-500/30 rounded-xl shadow-2xl py-1 z-50 overflow-hidden">
                {(Object.keys(supportedCurrencies) as CurrencyCode[]).map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setCurrency(code);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex justify-between items-center hover:bg-gold-500/20 transition-colors ${
                      currency === code ? 'text-gold-300 font-bold bg-gold-500/10' : 'text-slate-200'
                    }`}
                  >
                    <span>{code}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{supportedCurrencies[code].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Brand Header */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gold-100 ${
        isScrolled ? 'shadow-md py-3' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-royal-800 hover:text-gold-600 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 text-royal-800 hover:text-gold-600"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo & Tagline */}
          <div 
            onClick={() => onNavigate('home')} 
            className="cursor-pointer flex flex-col items-center group select-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-display tracking-[0.25em] text-2xl sm:text-3xl font-extrabold text-royal-900 group-hover:text-gold-600 transition-colors uppercase">
                AANAL
              </span>
              <span className="font-serif italic text-xs tracking-widest text-gold-600 font-semibold px-2 py-0.5 border border-gold-400/50 rounded">
                GURUKUL
              </span>
            </div>
            <span className="text-[10px] tracking-[0.35em] text-royal-700 font-medium uppercase mt-0.5">
              Ahmedabad &bull; Luxury Couture
            </span>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-xs mx-8">
            <div 
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-3.5 py-2 bg-[#f6f3ee] border border-[#e4dec8] rounded-full text-slate-500 text-xs cursor-pointer hover:border-gold-500 hover:bg-white transition-all shadow-inner"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-gold-600" /> Search Lehengas, Gowns, Kurtis...
              </span>
              <kbd className="bg-white border border-slate-300 px-1.5 py-0.5 rounded text-[10px] text-slate-400 font-mono">
                /
              </kbd>
            </div>
          </div>

          {/* Action Icons (Wishlist, Cart, Stylist, Admin) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            <button
              onClick={() => onNavigate('shop', 'all')}
              className="hidden sm:flex text-xs font-semibold uppercase tracking-wider text-royal-800 hover:text-gold-600 px-3 py-1.5 rounded-full border border-gold-200 hover:border-gold-500 transition-colors items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Explore All</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => onNavigate('wishlist')}
              className="relative p-2 text-royal-800 hover:text-maroon-600 transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-maroon-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 bg-royal-900 text-gold-200 hover:bg-gold-600 hover:text-royal-950 transition-all rounded-full px-3 py-2 flex items-center gap-2 shadow-sm"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-bold font-mono tracking-wider">
                {itemCount}
              </span>
              {itemCount > 0 && (
                <span className="sm:hidden absolute -top-1 -right-1 bg-gold-500 text-royal-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Admin Portal link */}
            <button
              onClick={() => onNavigate('admin')}
              className="hidden md:flex p-2 text-slate-400 hover:text-royal-900 transition-colors"
              title="Store Admin Dashboard & Merchant Feed"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Category Navigation */}
        <nav className="hidden lg:block border-t border-[#f0eae1] mt-3 pt-2">
          <ul className="flex items-center justify-center gap-8 text-xs uppercase tracking-widest font-medium text-royal-900">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => onNavigate(link.view, link.param)}
                  className={`py-1 relative transition-colors hover:text-gold-600 font-semibold ${
                    currentView === link.view ? 'text-gold-600' : 'text-royal-800'
                  }`}
                >
                  {link.label}
                  {currentView === link.view && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="p-4 bg-[#1b2a4a] text-white flex justify-between items-center border-b border-gold-500/30">
                <div className="flex flex-col">
                  <span className="font-display text-lg tracking-widest text-gold-200">AANAL GURUKUL</span>
                  <span className="text-[10px] text-slate-300">Ahmedabad Flagship Store</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Currency selector inside mobile menu */}
              <div className="p-4 bg-[#f8f5ef] border-b border-gold-200/50 flex justify-between items-center">
                <span className="text-xs font-semibold text-royal-800 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-gold-600" /> Currency:
                </span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                  className="text-xs bg-white border border-gold-300 rounded px-2 py-1 font-semibold text-royal-900"
                >
                  {(Object.keys(supportedCurrencies) as CurrencyCode[]).map((c) => (
                    <option key={c} value={c}>
                      {c} ({supportedCurrencies[c].symbol})
                    </option>
                  ))}
                </select>
              </div>

              {/* Navigation links */}
              <div className="py-2">
                <button
                  onClick={() => {
                    onOpenBookStylist();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 text-xs font-bold text-royal-900 bg-gold-50 hover:bg-gold-100 border-b border-gold-200 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold-600" /> Book a Call Now
                  </span>
                  <span className="text-gold-600 text-xs">&rarr;</span>
                </button>

                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      onNavigate(link.view, link.param);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 text-sm font-medium text-royal-900 hover:bg-gold-50 hover:text-gold-600 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-gold-500 text-xs">&rarr;</span>
                  </button>
                ))}
                
                <button
                  onClick={() => {
                    onNavigate('wishlist');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 text-sm font-medium text-royal-900 hover:bg-gold-50 border-b border-slate-100 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-maroon-600" /> My Wishlist ({wishlistCount})
                  </span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('admin');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 text-sm font-medium text-slate-700 hover:bg-gold-50 border-b border-slate-100 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-royal-700" /> Merchant &amp; Admin Portal
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Quick Help */}
            <div className="p-4 bg-[#fbf9f4] border-t border-gold-200">
              <p className="text-xs text-royal-900 font-semibold mb-1">Aanal Gurukul Flagship Store</p>
              <p className="text-[11px] text-slate-600 mb-3">Shantam Complex, Gurukul Road, Ahmedabad</p>
              <a 
                href="https://wa.me/917600917948?text=Hello%20Aanal%20Gurukul%2C%20I%20am%20interested%20in%20your%20designer%20collection." 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-[#25D366] text-white py-2 px-3 rounded text-xs font-semibold flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp Stylist: +91 76009 17948
              </a>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}
    </header>
  );
};

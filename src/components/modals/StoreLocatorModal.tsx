import React from 'react';
import { X, MapPin, Phone, Clock, Navigation, Compass } from 'lucide-react';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-gold-200 overflow-hidden text-slate-900">
        
        {/* Header */}
        <div className="bg-[#1b2a4a] text-white p-6 flex justify-between items-center border-b border-gold-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Flagship Store in Ahmedabad</h3>
              <p className="text-xs text-slate-300">Aanal Gurukul Experience Center</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Store Info */}
          <div className="bg-[#faf7f2] p-5 rounded-2xl border border-gold-200 space-y-3">
            <h4 className="font-serif font-bold text-base text-royal-950">Aanal Gurukul Flagship Store</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              G4, Nr. Sunset Shantam Complex, Gurukul Road, Avani Row House, Ahmedabad, Gujarat 380052 India
            </p>
            
            <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-4 h-4 text-gold-600" />
                <span>10:30 AM – 9:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-gold-600" />
                <span>+91 76009 17948</span>
              </div>
            </div>
          </div>

          {/* Interactive Google Map embed mock */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 flex items-center justify-center">
            <div className="text-center p-6 space-y-3">
              <Compass className="w-10 h-10 text-gold-600 mx-auto animate-spin" style={{ animationDuration: '10s' }} />
              <div>
                <p className="font-serif font-bold text-sm text-royal-900">Gurukul Road, Ahmedabad</p>
                <p className="text-xs text-slate-500">Opp. Sunset Drive &bull; Landmark: Shantam Complex</p>
              </div>
              <a
                href="https://maps.google.com/?q=Aanal+Gurukul+Shantam+Complex+Gurukul+Road+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-royal-900 text-gold-300 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gold-600 hover:text-royal-950 transition-colors shadow"
              >
                <Navigation className="w-3.5 h-3.5" /> Open Google Maps Directions
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';

interface BookStylistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookStylistModal: React.FC<BookStylistModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('3:00 PM - 4:00 PM');
  const [occasion, setOccasion] = useState('Bridal Wedding Lehenga');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gold-200 overflow-hidden text-slate-900">
        
        {/* Header */}
        <div className="bg-[#1b2a4a] text-white p-6 flex justify-between items-center border-b border-gold-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Book a Call Now</h3>
              <p className="text-xs text-slate-300">1-on-1 Consultation with Aanal Gurukul Senior Designer</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-xl text-royal-950">Call Request Confirmed!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you {name}! Our senior stylist will call you on <strong>{phone}</strong> on <strong>{date || 'selected date'}</strong> at <strong>{time}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-royal-900 text-gold-300 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Riddhi Shah"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Mobile Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+91 98250 12345 or +1 (USA)"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Time Slot (IST)</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none bg-white font-medium"
                >
                  <option value="11:30 AM - 12:30 PM">11:30 AM - 12:30 PM</option>
                  <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                  <option value="5:30 PM - 6:30 PM">5:30 PM - 6:30 PM</option>
                  <option value="7:30 PM - 8:30 PM">7:30 PM - 8:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Occasion / Outfit Interest</label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none bg-white font-medium"
              >
                <option value="Bridal Wedding Lehenga">Bridal Wedding Lehenga</option>
                <option value="Sangeet & Cocktail Gown">Sangeet &amp; Cocktail Gown</option>
                <option value="Navratri Chaniya Choli">Navratri Chaniya Choli</option>
                <option value="Plus-Size Custom Couture">Plus-Size Custom Couture</option>
                <option value="Sharara / Palazzo Sets">Sharara / Palazzo Sets</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2 text-xs text-slate-500 font-semibold">
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-royal-900 text-gold-300 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gold-600 hover:text-royal-950 transition-colors shadow"
              >
                Confirm Call Booking
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

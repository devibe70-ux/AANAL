import React, { useState } from 'react';
import { X, Scissors, Check, HelpCircle, ShieldCheck } from 'lucide-react';
import { CustomMeasurements } from '../../types/ecommerce';

interface CustomMeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (measurements: CustomMeasurements) => void;
  initialMeasurements?: CustomMeasurements;
}

export const CustomMeasurementModal: React.FC<CustomMeasurementModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialMeasurements
}) => {
  const [form, setForm] = useState<CustomMeasurements>(
    initialMeasurements || {
      bust: '36',
      waist: '30',
      hips: '40',
      shoulder: '14.5',
      armhole: '16',
      blouseLength: '15',
      lehengaLength: '42',
      height: "5'4 in",
      specialInstructions: ''
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-gold-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#1b2a4a] text-white p-6 flex justify-between items-center border-b border-gold-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Custom Made-to-Measure Stitching</h3>
              <p className="text-xs text-slate-300">Handcrafted by Master Tailors at Aanal Gurukul</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-gold-50 p-4 rounded-xl border border-gold-200 text-xs text-royal-900 leading-relaxed">
            ✨ <strong>Master Fit Guarantee:</strong> Provide your measurements in inches. Our senior master artisan will review your dimensions and contact you via WhatsApp for final fitting confirmation before stitching.
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Bust (Inches)
              </label>
              <input
                type="text"
                value={form.bust}
                onChange={(e) => setForm({ ...form, bust: e.target.value })}
                required
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 36"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Waist (Inches)
              </label>
              <input
                type="text"
                value={form.waist}
                onChange={(e) => setForm({ ...form, waist: e.target.value })}
                required
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Hips (Inches)
              </label>
              <input
                type="text"
                value={form.hips}
                onChange={(e) => setForm({ ...form, hips: e.target.value })}
                required
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Shoulder Width
              </label>
              <input
                type="text"
                value={form.shoulder}
                onChange={(e) => setForm({ ...form, shoulder: e.target.value })}
                required
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 14.5"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Armhole (Inches)
              </label>
              <input
                type="text"
                value={form.armhole}
                onChange={(e) => setForm({ ...form, armhole: e.target.value })}
                required
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 16"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Total Height
              </label>
              <input
                type="text"
                value={form.height}
                onChange={(e) => setForm({ ...form, height: e.target.value })}
                required
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 5 ft 5 in"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Blouse Length
              </label>
              <input
                type="text"
                value={form.blouseLength}
                onChange={(e) => setForm({ ...form, blouseLength: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 15"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Lehenga/Pant Length
              </label>
              <input
                type="text"
                value={form.lehengaLength}
                onChange={(e) => setForm({ ...form, lehengaLength: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none font-mono"
                placeholder="e.g. 42"
              />
            </div>

          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Neckline &amp; Sleeve Preferences / Special Notes
            </label>
            <textarea
              rows={3}
              value={form.specialInstructions}
              onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
              placeholder="e.g. Deep back with dori tassels, elbow length sleeves, extra margin in seams..."
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-gold-600 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-royal-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-royal-900 text-gold-300 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gold-600 hover:text-royal-950 transition-all flex items-center gap-2 shadow"
            >
              <Check className="w-4 h-4" /> Save Custom Fit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Smartphone, 
  CreditCard, 
  Building2, 
  Wallet, 
  QrCode, 
  CheckCircle2, 
  Loader2,
  Lock
} from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';

interface RazorpaySimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  onSuccess: (paymentId: string) => void;
}

export const RazorpaySimulator: React.FC<RazorpaySimulatorProps> = ({
  isOpen,
  onClose,
  amount,
  customerName,
  customerEmail,
  customerPhone,
  onSuccess
}) => {
  const { format } = useCurrency();
  const [activeTab, setActiveTab] = useState<'upi' | 'card' | 'netbanking' | 'wallet'>('upi');
  const [selectedUpiApp, setSelectedUpiApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'qr'>('gpay');
  const [upiVpa, setUpiVpa] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Card mock state
  const [cardNumber, setCardNumber] = useState('4532 8920 1928 3491');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvv, setCardCvv] = useState('890');
  const [cardHolder, setCardHolder] = useState(customerName || 'Aanal Client');

  if (!isOpen) return null;

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const generatedPayId = `pay_${Math.random().toString(36).substring(2, 14)}`;
      onSuccess(generatedPayId);
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#ffffff] rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Razorpay Brand Header */}
        <div className="bg-[#0b2240] text-white p-5 flex justify-between items-center border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow">
              ₹
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-wide">Razorpay Checkout</span>
                <span className="bg-blue-500/30 text-blue-200 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                  TEST MODE
                </span>
              </div>
              <p className="text-[11px] text-blue-200">Aanal Gurukul Boutique</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            disabled={isProcessing}
            className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Amount Summary Bar */}
        <div className="bg-[#f0f4f9] px-6 py-3 border-b border-slate-200 flex justify-between items-center">
          <span className="text-xs text-slate-600 font-medium">Paying Total:</span>
          <span className="font-mono font-bold text-lg text-blue-900">{format(amount)}</span>
        </div>

        {/* Payment Tabs */}
        <div className="grid grid-cols-4 border-b border-slate-200 text-xs font-semibold bg-slate-50">
          <button
            onClick={() => setActiveTab('upi')}
            className={`py-3 flex flex-col items-center gap-1 border-b-2 transition-colors ${
              activeTab === 'upi'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" /> UPI / QR
          </button>
          
          <button
            onClick={() => setActiveTab('card')}
            className={`py-3 flex flex-col items-center gap-1 border-b-2 transition-colors ${
              activeTab === 'card'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <CreditCard className="w-4 h-4" /> Card
          </button>

          <button
            onClick={() => setActiveTab('netbanking')}
            className={`py-3 flex flex-col items-center gap-1 border-b-2 transition-colors ${
              activeTab === 'netbanking'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" /> NetBanking
          </button>

          <button
            onClick={() => setActiveTab('wallet')}
            className={`py-3 flex flex-col items-center gap-1 border-b-2 transition-colors ${
              activeTab === 'wallet'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Wallet className="w-4 h-4" /> Wallets
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 space-y-4">
          
          {/* UPI TAB */}
          {activeTab === 'upi' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedUpiApp('gpay')}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                    selectedUpiApp === 'gpay'
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">G</span>
                  <span>Google Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedUpiApp('phonepe')}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                    selectedUpiApp === 'phonepe'
                      ? 'border-purple-600 bg-purple-50 text-purple-900'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">Pe</span>
                  <span>PhonePe</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedUpiApp('paytm')}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                    selectedUpiApp === 'paytm'
                      ? 'border-sky-600 bg-sky-50 text-sky-900'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-[10px]">Pt</span>
                  <span>Paytm UPI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedUpiApp('qr')}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                    selectedUpiApp === 'qr'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  <span>Scan QR Code</span>
                </button>
              </div>

              {selectedUpiApp === 'qr' ? (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-2">
                  <div className="w-36 h-36 bg-white border-2 border-slate-300 p-2 mx-auto rounded-lg flex items-center justify-center">
                    <QrCode className="w-28 h-28 text-slate-800" />
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">
                    Scan with any UPI App (GPay, PhonePe, Paytm, BHIM, CRED)
                  </p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enter UPI ID / VPA
                  </label>
                  <input
                    type="text"
                    value={upiVpa}
                    onChange={(e) => setUpiVpa(e.target.value)}
                    placeholder="mobileNumber@okaxis or user@upi"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 font-mono"
                  />
                </div>
              )}
            </div>
          )}

          {/* CARD TAB */}
          {activeTab === 'card' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-blue-600 font-mono"
                  placeholder="4532 8920 1928 3491"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Expiry (MM/YY)</label>
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-blue-600 font-mono"
                    placeholder="12/28"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">CVV</label>
                  <input
                    type="password"
                    maxLength={4}
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-blue-600 font-mono"
                    placeholder="123"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Cardholder Name</label>
                <input
                  type="text"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-blue-600"
                />
              </div>
            </div>
          )}

          {/* NETBANKING TAB */}
          {activeTab === 'netbanking' && (
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              {['HDFC Bank', 'State Bank of India', 'ICICI Bank', 'Axis Bank', 'Kotak Bank', 'Punjab National Bank'].map((bank) => (
                <button
                  key={bank}
                  type="button"
                  className="p-3 border border-slate-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 text-left"
                >
                  {bank}
                </button>
              ))}
            </div>
          )}

          {/* WALLETS TAB */}
          {activeTab === 'wallet' && (
            <div className="space-y-2 text-xs font-semibold">
              {['Amazon Pay Balance', 'Mobikwik Wallet', 'Freecharge', 'JioMoney'].map((w) => (
                <button
                  key={w}
                  type="button"
                  className="w-full p-3 border border-slate-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 text-left flex justify-between"
                >
                  <span>{w}</span>
                  <span className="text-blue-600">Link &amp; Pay</span>
                </button>
              ))}
            </div>
          )}

        </div>

        {/* CTA Pay Button */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-2">
          <button
            onClick={handlePayNow}
            disabled={isProcessing}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating with Bank Gateway...</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Pay {format(amount)}</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-bit SSL Encrypted &bull; PCI-DSS Level 1 Compliant</span>
          </div>
        </div>

      </div>
    </div>
  );
};

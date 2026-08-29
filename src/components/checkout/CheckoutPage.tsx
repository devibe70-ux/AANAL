import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Scissors, 
  CheckCircle2, 
  ArrowLeft, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Lock,
  Sparkles
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useCurrency } from '../../context/CurrencyContext';
import { useOrder } from '../../context/OrderContext';
import { ShippingAddress, PaymentMethod, Order } from '../../types/ecommerce';
import { RazorpaySimulator } from './RazorpaySimulator';
import confetti from 'canvas-confetti';

interface CheckoutPageProps {
  onBackToShop: () => void;
  onOrderSuccess: (order: Order) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBackToShop, onOrderSuccess }) => {
  const { cart, subtotal, discountAmount, shippingCost, total, clearCart } = useCart();
  const { currency, format } = useCurrency();
  const { createOrder } = useOrder();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Address form
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: 'Pooja Patel',
    email: 'pooja.patel@example.com',
    phone: '+91 98250 12345',
    addressLine1: '402, Royal Enclave, Gurukul Road',
    addressLine2: 'Near Sunset Shantam Complex',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380052',
    country: 'India'
  });

  // Shipping Method
  const [shippingMethod, setShippingMethod] = useState<'express' | 'same-day-ahmedabad' | 'international'>('express');
  
  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('razorpay');
  const [razorpayModalOpen, setRazorpayModalOpen] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handlePlaceOrder = () => {
    if (paymentMethod === 'razorpay' || paymentMethod === 'upi' || paymentMethod === 'card') {
      setRazorpayModalOpen(true);
      return;
    }

    // Direct COD flow
    finalizeOrder('COD_VERIFIED_' + Math.random().toString(36).substring(2, 8).toUpperCase());
  };

  const finalizeOrder = (paymentId?: string) => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      const order = createOrder(
        cart,
        address,
        shippingMethod === 'same-day-ahmedabad' ? 'Ahmedabad Local Same-Day VIP' : 'Express Courier',
        shippingCost,
        subtotal,
        discountAmount,
        total,
        currency,
        paymentMethod,
        paymentId
      );

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}

      clearCart();
      setIsPlacingOrder(false);
      onOrderSuccess(order);
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-royal-950">Your Cart is Empty</h2>
        <p className="text-xs text-slate-500 mt-2 mb-6">Add your favorite designer outfits before proceeding to checkout.</p>
        <button
          onClick={onBackToShop}
          className="px-6 py-3 bg-royal-900 text-gold-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold-600 hover:text-royal-950 transition-colors"
        >
          Explore Collections
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#faf8f5] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-200/60">
          <button
            onClick={onBackToShop}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-gold-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </button>
          
          <div className="flex items-center gap-2">
            <span className="font-display tracking-widest text-lg font-bold text-royal-900">AANAL GURUKUL</span>
            <span className="text-xs text-gold-700 font-serif font-bold">&bull; Secure Checkout</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form: Steps */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Shipping Address */}
            <div className="bg-white rounded-3xl border border-gold-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-serif font-bold text-lg text-royal-950 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-600" /> 1. Delivery Details
                </h3>
                <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  India &amp; International Delivery
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone (for delivery SMS)</label>
                  <input
                    type="text"
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={address.email}
                    onChange={(e) => setAddress({ ...address, email: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Street Address / House No.</label>
                  <input
                    type="text"
                    value={address.addressLine1}
                    onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">State / Province</label>
                  <input
                    type="text"
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Postal / ZIP Code</label>
                  <input
                    type="text"
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={address.country}
                    onChange={(e) => setAddress({ ...address, country: e.target.value })}
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-gold-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Method */}
            <div className="bg-white rounded-3xl border border-gold-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-royal-950 flex items-center gap-2">
                <Truck className="w-5 h-5 text-gold-600" /> 2. Delivery Options
              </h3>

              <div className="space-y-3">
                <label 
                  onClick={() => setShippingMethod('express')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    shippingMethod === 'express'
                      ? 'border-gold-600 bg-gold-50/70 text-royal-900 shadow-sm'
                      : 'border-slate-200 hover:border-gold-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={shippingMethod === 'express'} readOnly className="accent-gold-600" />
                    <div>
                      <p className="font-serif font-bold text-xs">Express BlueDart / DHL Courier (3 - 5 Days)</p>
                      <p className="text-[11px] text-slate-500">Fully insured insured with real-time SMS tracking</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    {shippingCost === 0 ? 'FREE' : format(shippingCost)}
                  </span>
                </label>

                <label 
                  onClick={() => setShippingMethod('same-day-ahmedabad')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    shippingMethod === 'same-day-ahmedabad'
                      ? 'border-gold-600 bg-gold-50/70 text-royal-900 shadow-sm'
                      : 'border-slate-200 hover:border-gold-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={shippingMethod === 'same-day-ahmedabad'} readOnly className="accent-gold-600" />
                    <div>
                      <p className="font-serif font-bold text-xs">Ahmedabad VIP Same-Day Store Hand Delivery</p>
                      <p className="text-[11px] text-slate-500">Dispatched directly from Gurukul Road boutique</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700">FREE</span>
                </label>
              </div>
            </div>

            {/* Step 3: Payment Options */}
            <div className="bg-white rounded-3xl border border-gold-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-royal-950 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-gold-600" /> 3. Payment Method
              </h3>

              <div className="space-y-3">
                
                {/* Razorpay Master Gateway */}
                <label
                  onClick={() => setPaymentMethod('razorpay')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'razorpay'
                      ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === 'razorpay'} readOnly className="accent-blue-600" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-xs text-blue-950">Razorpay All-in-One Gateway</span>
                        <span className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">POPULAR</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        UPI, Google Pay, PhonePe, Cards, NetBanking, EMI &amp; Wallets
                      </p>
                    </div>
                  </div>
                </label>

                {/* Direct UPI QR */}
                <label
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-emerald-600 bg-emerald-50/70 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === 'upi'} readOnly className="accent-emerald-600" />
                    <div>
                      <span className="font-serif font-bold text-xs text-emerald-950">Instant UPI &amp; Dynamic QR</span>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Scan with GPay, PhonePe, Paytm, BHIM, CRED
                      </p>
                    </div>
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-amber-600 bg-amber-50/70 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-amber-600" />
                    <div>
                      <span className="font-serif font-bold text-xs text-amber-950">Cash on Delivery (COD)</span>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Pay upon doorstep arrival after opening the parcel verification
                      </p>
                    </div>
                  </div>
                </label>

              </div>
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-gold-200 p-6 sm:p-8 shadow-lg sticky top-28 space-y-6">
              
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="font-serif font-bold text-lg text-royal-950">Order Summary</h3>
                <span className="font-mono text-xs text-slate-500 font-bold">{cart.length} Outfits</span>
              </div>

              {/* Items List */}
              <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-xs">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-14 h-16 object-cover object-top rounded-lg border border-slate-200 shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-royal-900 line-clamp-1">
                        {item.product.title}
                      </h4>
                      <p className="text-slate-500 text-[11px]">
                        Size: <strong>{item.selectedSize}</strong> &bull; Qty: <strong>{item.quantity}</strong>
                      </p>
                      {item.stitchingOption === 'custom-stitched' && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-gold-800 font-bold bg-gold-100 px-1.5 py-0.2 rounded mt-0.5">
                          <Scissors className="w-2.5 h-2.5" /> Custom Fit
                        </span>
                      )}
                    </div>
                    <span className="font-mono font-bold text-royal-900">
                      {format(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium text-royal-900">{format(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount Applied</span>
                    <span className="font-mono">- {format(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping &amp; Handling</span>
                  <span className="font-mono font-medium">
                    {shippingCost === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : format(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-royal-950 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="font-mono text-xl text-gold-700">{format(total)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
                className="w-full py-4 bg-gold-gradient text-royal-950 font-bold text-xs uppercase tracking-widest rounded-2xl hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {isPlacingOrder ? 'Processing Order...' : `Place Order & Pay ${format(total)}`}
                </span>
              </button>

              <div className="bg-[#fbf9f5] p-3 rounded-xl border border-gold-100 text-[11px] text-slate-600 space-y-1 text-center">
                <p className="font-semibold text-royal-900">✨ Aanal Gurukul Quality Promise</p>
                <p>100% Handcrafted Artisanal Luxury &bull; Hassle-Free Sizing Support</p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Razorpay Sandbox Simulator */}
      <RazorpaySimulator
        isOpen={razorpayModalOpen}
        onClose={() => setRazorpayModalOpen(false)}
        amount={total}
        customerName={address.fullName}
        customerEmail={address.email}
        customerPhone={address.phone}
        onSuccess={(payId) => {
          setRazorpayModalOpen(false);
          finalizeOrder(payId);
        }}
      />
    </div>
  );
};

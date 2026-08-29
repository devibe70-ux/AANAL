import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  Scissors 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useCurrency } from '../../context/CurrencyContext';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
  onNavigateToShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  onProceedToCheckout, 
  onNavigateToShop 
}) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingCost,
    total,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    freeShippingThreshold,
    freeShippingProgress
  } = useCart();

  const { format } = useCurrency();
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState<{ success: boolean; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponMessage({ success: res.success, text: res.message });
    if (res.success) setCouponInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-[#1b2a4a] text-white flex justify-between items-center border-b border-gold-500/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-400" />
              <h2 className="font-serif text-lg font-bold">Your Royal Cart ({cart.length})</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-slate-300 hover:text-white rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#f8f5ee] px-6 py-3 border-b border-gold-200">
            <div className="flex justify-between items-center text-xs font-semibold text-royal-900 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-gold-600" />
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-emerald-700 font-bold">Congratulations! You qualify for Free Express Shipping!</span>
                ) : (
                  <span>Add {format(freeShippingThreshold - subtotal)} more for Free Shipping</span>
                )}
              </span>
              <span className="text-gold-700 font-mono font-bold">{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gold-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-royal-900">Your Cart is Empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Discover our authentic handcrafted bridal chaniya cholis, lehengas, and designer gowns.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigateToShop();
                  }}
                  className="mt-4 px-6 py-2.5 bg-royal-900 text-gold-300 font-semibold text-xs rounded-full hover:bg-gold-600 hover:text-royal-900 transition-colors uppercase tracking-wider"
                >
                  Explore Designer Wear
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div 
                  key={`${item.product.id}-${item.selectedSize}-${index}`}
                  className="flex gap-4 p-3 bg-[#fbf9f5] border border-gold-100 rounded-xl relative"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-20 h-24 object-cover object-top rounded-lg bg-white shrink-0 border border-slate-200"
                  />
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-sm text-royal-900 line-clamp-1">
                        {item.product.title}
                      </h4>
                      <p className="text-xs text-gold-700 font-semibold mt-0.5">
                        {format(item.product.price)}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 text-[11px] text-slate-600 mt-1">
                        <span className="bg-white px-2 py-0.5 rounded border border-slate-200">
                          Size: <strong>{item.selectedSize}</strong>
                        </span>
                        {item.stitchingOption === 'custom-stitched' && (
                          <span className="bg-gold-100 text-gold-800 px-2 py-0.5 rounded border border-gold-300 flex items-center gap-1 font-medium">
                            <Scissors className="w-3 h-3" /> Custom Stitched
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      {/* Quantity buttons */}
                      <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1 hover:text-gold-600"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1 hover:text-gold-600"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-slate-400 hover:text-maroon-600 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 bg-[#fcfbfa] border-t border-gold-200 space-y-4">
              
              {/* Coupon input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Enter Coupon (e.g. AANAL10)"
                    className="w-full pl-9 pr-3 py-2 text-xs uppercase font-mono border border-slate-300 rounded-lg focus:outline-none focus:border-gold-600"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-royal-900 text-gold-300 text-xs font-bold rounded-lg hover:bg-royal-800 transition-colors uppercase tracking-wider"
                >
                  Apply
                </button>
              </form>

              {couponMessage && (
                <p className={`text-xs font-medium ${couponMessage.success ? 'text-emerald-700' : 'text-maroon-600'}`}>
                  {couponMessage.text}
                </p>
              )}

              {appliedCoupon && (
                <div className="flex justify-between items-center bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs text-emerald-800">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Coupon {appliedCoupon.code} applied!
                  </span>
                  <button 
                    onClick={removeCoupon}
                    className="text-slate-400 hover:text-maroon-600 text-[11px] underline"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Subtotal breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium text-royal-900">{format(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Coupon Discount</span>
                    <span className="font-mono">- {format(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-mono font-medium">
                    {shippingCost === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : format(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-royal-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="font-mono text-base text-gold-700">{format(total)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 bg-gold-gradient text-royal-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-95 shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-500">
                🔒 100% Encrypted &amp; Secure Checkout powered by Razorpay
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

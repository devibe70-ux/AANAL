import React, { useState } from 'react';
import { 
  Search, 
  Package, 
  CheckCircle2, 
  Truck, 
  Clock, 
  Scissors, 
  FileText, 
  MapPin, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { useOrder } from '../../context/OrderContext';
import { useCurrency } from '../../context/CurrencyContext';
import { Order } from '../../types/ecommerce';
import { InvoiceModal } from './InvoiceModal';

interface OrderTrackerPageProps {
  onContinueShopping: () => void;
}

export const OrderTrackerPage: React.FC<OrderTrackerPageProps> = ({ onContinueShopping }) => {
  const { orders, getOrderById } = useOrder();
  const { format } = useCurrency();
  const [searchInput, setSearchInput] = useState('AG-2026-8894');
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(orders[0] || null);
  const [errorMessage, setErrorMessage] = useState('');
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!searchInput.trim()) return;

    const found = getOrderById(searchInput);
    if (found) {
      setSearchedOrder(found);
    } else {
      setSearchedOrder(null);
      setErrorMessage(`No order found matching "${searchInput}". Please verify your Order ID.`);
    }
  };

  const steps: { label: Order['orderStatus']; desc: string }[] = [
    { label: 'Confirmed', desc: 'Order verified & fabric reserved' },
    { label: 'Fabric Sourcing', desc: 'Pure silk / georgette inspection' },
    { label: 'Tailoring & Stitching', desc: 'Hand zardozi & master cutting' },
    { label: 'Quality Check', desc: 'Fitting & embellishment audit' },
    { label: 'Dispatched', desc: 'Handed to BlueDart / DHL courier' },
    { label: 'Delivered', desc: 'Safely delivered to your doorstep' }
  ];

  const getStepIndex = (status: Order['orderStatus']) => {
    const idx = steps.findIndex((s) => s.label === status);
    return idx >= 0 ? idx : 0;
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-bold">
            Real-time Status
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-royal-950 mt-1">
            Track Your Royal Order
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Enter your Order ID (e.g. AG-2026-8894) or Airway Bill Tracking Number.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter Order ID (e.g. AG-2026-8894)"
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-gold-300 rounded-xl focus:outline-none focus:border-gold-600 font-mono shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-royal-900 text-gold-300 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gold-600 hover:text-royal-950 transition-colors shadow"
          >
            Track
          </button>
        </form>

        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2 max-w-md mx-auto">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {searchedOrder && (
          <div className="bg-white rounded-3xl border border-gold-200 shadow-lg p-6 sm:p-8 space-y-8 animate-in fade-in">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-xl text-royal-900">
                    Order #{searchedOrder.id}
                  </span>
                  <span className="bg-gold-100 text-gold-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-gold-300">
                    {searchedOrder.orderStatus}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Placed on {new Date(searchedOrder.date).toLocaleDateString('en-IN', { dateStyle: 'long' })} &bull; Airway Bill: <strong className="font-mono text-slate-800">{searchedOrder.trackingNumber}</strong>
                </p>
              </div>

              <button
                onClick={() => setInvoiceOpen(true)}
                className="px-4 py-2 bg-slate-100 hover:bg-gold-100 text-royal-900 text-xs font-semibold rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-gold-600" /> View GST Invoice
              </button>
            </div>

            {/* Visual Step Tracker */}
            <div>
              <h3 className="font-serif font-bold text-sm text-royal-900 mb-6">Artisan &amp; Delivery Progress</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
                {steps.map((s, idx) => {
                  const currentIdx = getStepIndex(searchedOrder.orderStatus);
                  const isDone = idx <= currentIdx;
                  const isCurrent = idx === currentIdx;

                  return (
                    <div key={idx} className="flex flex-col items-center text-center relative z-10">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                          isDone
                            ? 'bg-royal-900 text-gold-300 border-2 border-gold-400'
                            : 'bg-slate-100 text-slate-400 border border-slate-200'
                        } ${isCurrent ? 'ring-4 ring-gold-300/40 animate-pulse' : ''}`}
                      >
                        {isDone ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                      </div>

                      <h4 className={`text-xs font-bold mt-2 ${isDone ? 'text-royal-900' : 'text-slate-400'}`}>
                        {s.label}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-0.5 max-w-[120px]">
                        {s.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Destination & Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100 text-xs">
              <div className="bg-[#fbf9f5] p-4 rounded-2xl border border-gold-100 space-y-2">
                <h4 className="font-serif font-bold text-royal-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold-600" /> Destination Address
                </h4>
                <p className="text-slate-700 font-medium">{searchedOrder.shippingAddress.fullName}</p>
                <p className="text-slate-600">{searchedOrder.shippingAddress.addressLine1}</p>
                <p className="text-slate-600">
                  {searchedOrder.shippingAddress.city}, {searchedOrder.shippingAddress.state} - {searchedOrder.shippingAddress.pincode}
                </p>
                <p className="text-slate-600">Phone: {searchedOrder.shippingAddress.phone}</p>
              </div>

              <div className="bg-[#fbf9f5] p-4 rounded-2xl border border-gold-100 space-y-2">
                <h4 className="font-serif font-bold text-royal-900 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-gold-600" /> Courier &amp; Logistics
                </h4>
                <p className="text-slate-700">Courier: BlueDart / DHL Express Global</p>
                <p className="text-slate-700">Estimated Delivery: <strong>{searchedOrder.estimatedDelivery}</strong></p>
                <p className="text-slate-700">Payment Status: <strong className="text-emerald-700 font-bold uppercase">{searchedOrder.paymentStatus}</strong></p>
              </div>
            </div>

          </div>
        )}

      </div>

      <InvoiceModal
        order={searchedOrder}
        isOpen={invoiceOpen}
        onClose={() => setInvoiceOpen(false)}
      />
    </div>
  );
};

import React from 'react';
import { X, Printer, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { Order } from '../../types/ecommerce';
import { formatPrice } from '../../utils/currency';

interface InvoiceModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({ order, isOpen, onClose }) => {
  if (!isOpen || !order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gold-200 overflow-hidden my-8 text-slate-900 print:m-0 print:border-none">
        
        {/* Modal Controls */}
        <div className="bg-[#1b2a4a] text-white p-4 flex justify-between items-center print:hidden">
          <span className="font-serif font-bold text-sm text-gold-300">GST Tax Invoice &bull; {order.id}</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1 bg-gold-500 text-royal-950 text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-gold-400"
            >
              <Printer className="w-3.5 h-3.5" /> Print Invoice
            </button>
            <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Body */}
        <div className="p-8 space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display tracking-[0.2em] text-2xl font-extrabold text-royal-900">
                  AANAL GURUKUL
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Luxury Ethnic &amp; Designer Boutique</p>
              <p className="text-[11px] text-slate-500 max-w-xs mt-0.5">
                G4 Shantam Complex, Gurukul Road, Ahmedabad, Gujarat 380052 India
              </p>
              <p className="text-[11px] text-slate-500 font-mono">GSTIN: 24AABCU9821R1Z4</p>
            </div>

            <div className="text-right">
              <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded border border-emerald-200 mb-2">
                PAID &amp; CONFIRMED
              </span>
              <p className="text-xs font-bold text-royal-900 font-mono">Invoice #{order.id}</p>
              <p className="text-[11px] text-slate-500">Date: {new Date(order.date).toLocaleDateString('en-IN')}</p>
              <p className="text-[11px] text-slate-500 font-mono">Txn ID: {order.paymentId}</p>
            </div>
          </div>

          {/* Customer & Shipping */}
          <div className="grid grid-cols-2 gap-6 text-xs border-b border-slate-200 pb-6">
            <div>
              <h4 className="font-bold text-royal-900 mb-1">Billed &amp; Shipped To:</h4>
              <p className="font-medium text-slate-800">{order.shippingAddress.fullName}</p>
              <p className="text-slate-600">{order.shippingAddress.addressLine1}</p>
              {order.shippingAddress.addressLine2 && <p className="text-slate-600">{order.shippingAddress.addressLine2}</p>}
              <p className="text-slate-600">
                {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </p>
              <p className="text-slate-600">{order.shippingAddress.country}</p>
              <p className="text-slate-600 mt-1">Phone: {order.shippingAddress.phone}</p>
            </div>

            <div className="text-right">
              <h4 className="font-bold text-royal-900 mb-1">Shipping &amp; Tracking:</h4>
              <p className="text-slate-700">{order.shippingMethod}</p>
              <p className="font-mono font-semibold text-gold-700 mt-0.5">
                AWB: {order.trackingNumber}
              </p>
              <p className="text-slate-500 mt-1">Payment Method: {order.paymentMethod.toUpperCase()}</p>
            </div>
          </div>

          {/* Itemized Table */}
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                <th className="py-2 text-left">Item Description</th>
                <th className="py-2 text-center">Fit / Size</th>
                <th className="py-2 text-center">Qty</th>
                <th className="py-2 text-right">Price</th>
                <th className="py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {order.items.map((item, idx) => (
                <tr key={idx} className="py-2">
                  <td className="py-2.5 font-medium text-royal-950">
                    {item.product.title}
                    <span className="block text-[10px] text-slate-400 font-mono">SKU: {item.product.sku}</span>
                  </td>
                  <td className="py-2.5 text-center">{item.selectedSize}</td>
                  <td className="py-2.5 text-center font-mono">{item.quantity}</td>
                  <td className="py-2.5 text-right font-mono">{formatPrice(item.product.price, order.currency)}</td>
                  <td className="py-2.5 text-right font-mono font-bold">{formatPrice(item.product.price * item.quantity, order.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Subtotals */}
          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <div className="w-64 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-semibold">{formatPrice(order.subtotal, order.currency)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount</span>
                  <span className="font-mono">- {formatPrice(order.discount, order.currency)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-mono">{order.shippingCost === 0 ? 'FREE' : formatPrice(order.shippingCost, order.currency)}</span>
              </div>
              <div className="flex justify-between font-bold text-royal-950 text-sm pt-2 border-t border-slate-300">
                <span>Total Paid (INR)</span>
                <span className="font-mono text-gold-700">{formatPrice(order.total, order.currency)}</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 text-center pt-6 border-t border-slate-100">
            Thank you for choosing Aanal Gurukul Ahmedabad. For care or styling queries, reach us at +91 76009 17948.
          </div>

        </div>

      </div>
    </div>
  );
};

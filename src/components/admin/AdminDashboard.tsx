import React, { useState } from 'react';
import { 
  Package, 
  ShoppingBag, 
  Download, 
  Code, 
  CheckCircle2, 
  Users, 
  DollarSign, 
  FileCode, 
  ExternalLink,
  Edit,
  Tag
} from 'lucide-react';
import { Product, Order } from '../../types/ecommerce';
import { useOrder } from '../../context/OrderContext';
import { useCurrency } from '../../context/CurrencyContext';
import { generateGoogleMerchantXml } from '../../utils/googleMerchantFeed';

interface AdminDashboardProps {
  products: Product[];
  onBackToStore: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ products, onBackToStore }) => {
  const { orders, updateOrderStatus } = useOrder();
  const { format } = useCurrency();
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'google-merchant'>('orders');
  const [copiedFeed, setCopiedFeed] = useState(false);

  const googleXml = generateGoogleMerchantXml(products);

  const handleDownloadXml = () => {
    const blob = new Blob([googleXml], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'google-merchant-aanal-gurukul.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyXml = () => {
    navigator.clipboard.writeText(googleXml);
    setCopiedFeed(true);
    setTimeout(() => setCopiedFeed(false), 2500);
  };

  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);

  return (
    <div className="bg-[#faf8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gold-200">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-gold-700 font-bold">
              Merchant Management Portal
            </span>
            <h1 className="font-serif text-3xl font-bold text-royal-950">Aanal Gurukul Admin</h1>
          </div>

          <button
            onClick={onBackToStore}
            className="px-5 py-2.5 bg-royal-900 text-gold-300 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gold-600 hover:text-royal-950 transition-colors"
          >
            ← Return to Storefront
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gold-200 shadow-sm">
            <span className="text-xs text-slate-500">Total Products</span>
            <p className="font-mono text-2xl font-bold text-royal-900 mt-1">{products.length}</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gold-200 shadow-sm">
            <span className="text-xs text-slate-500">Total Orders</span>
            <p className="font-mono text-2xl font-bold text-royal-900 mt-1">{orders.length}</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gold-200 shadow-sm">
            <span className="text-xs text-slate-500">Gross Revenue</span>
            <p className="font-mono text-2xl font-bold text-emerald-700 mt-1">{format(totalRevenue)}</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gold-200 shadow-sm">
            <span className="text-xs text-slate-500">Google Feed Sync</span>
            <p className="font-mono text-sm font-bold text-blue-700 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Active (22 SKUs)
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors ${
              activeTab === 'orders' ? 'bg-royal-900 text-gold-300' : 'bg-white text-slate-600 hover:bg-gold-50'
            }`}
          >
            Orders &amp; Fulfillment ({orders.length})
          </button>
          
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors ${
              activeTab === 'products' ? 'bg-royal-900 text-gold-300' : 'bg-white text-slate-600 hover:bg-gold-50'
            }`}
          >
            Catalog Inventory ({products.length})
          </button>

          <button
            onClick={() => setActiveTab('google-merchant')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors ${
              activeTab === 'google-merchant' ? 'bg-royal-900 text-gold-300' : 'bg-white text-slate-600 hover:bg-gold-50'
            }`}
          >
            Google Merchant Center Feed (XML)
          </button>
        </div>

        {/* TAB 1: ORDERS */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-gold-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-royal-950">Recent Customer Orders</h3>
              <span className="text-xs text-slate-500">Change status to notify client via SMS</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#fbf9f6] text-slate-500 uppercase text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Client</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Total</th>
                    <th className="p-4">Payment</th>
                    <th className="p-4">Fulfillment Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((o) => (
                    <tr key={o.id} className="hover:bg-slate-50">
                      <td className="p-4 font-mono font-bold text-royal-900">{o.id}</td>
                      <td className="p-4">
                        <p className="font-bold text-slate-900">{o.shippingAddress.fullName}</p>
                        <p className="text-slate-500 text-[11px]">{o.shippingAddress.city}, {o.shippingAddress.phone}</p>
                      </td>
                      <td className="p-4 text-slate-600">
                        {new Date(o.date).toLocaleDateString('en-IN')}
                      </td>
                      <td className="p-4 font-mono font-bold text-royal-950">{format(o.total)}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase">
                          {o.paymentStatus} ({o.paymentMethod})
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={o.orderStatus}
                          onChange={(e) => updateOrderStatus(o.id, e.target.value as any)}
                          className="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-semibold text-royal-900"
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Fabric Sourcing">Fabric Sourcing</option>
                          <option value="Tailoring & Stitching">Tailoring &amp; Stitching</option>
                          <option value="Quality Check">Quality Check</option>
                          <option value="Dispatched">Dispatched</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-3xl border border-gold-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-serif font-bold text-lg text-royal-950">Aanal Gurukul Catalog SKUs</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#fbf9f6] text-slate-500 uppercase text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="p-4">Image</th>
                    <th className="p-4">SKU / Code</th>
                    <th className="p-4">Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Stock Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="p-4">
                        <img src={p.images[0]} alt={p.title} className="w-10 h-12 object-cover rounded bg-slate-100 border border-slate-200" />
                      </td>
                      <td className="p-4 font-mono font-bold text-slate-700">{p.sku}</td>
                      <td className="p-4 font-serif font-bold text-royal-900">{p.title}</td>
                      <td className="p-4 text-slate-600">{p.categories[0]}</td>
                      <td className="p-4 font-mono font-bold text-royal-950">{format(p.price)}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          In Stock ({p.stock_count || 5} units)
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: GOOGLE MERCHANT CENTER FEED */}
        {activeTab === 'google-merchant' && (
          <div className="bg-white rounded-3xl border border-gold-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-royal-950">Google Merchant Center XML Feed</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Compliant with Google Shopping RSS 2.0 product specifications (id, title, description, link, price, availability, image_link).
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyXml}
                  className="px-4 py-2 bg-slate-100 hover:bg-gold-50 text-royal-900 text-xs font-bold rounded-xl border border-slate-200 flex items-center gap-1.5"
                >
                  <Code className="w-4 h-4 text-gold-600" />
                  <span>{copiedFeed ? 'Copied XML ✓' : 'Copy Feed'}</span>
                </button>

                <button
                  onClick={handleDownloadXml}
                  className="px-4 py-2 bg-royal-900 text-gold-300 text-xs font-bold rounded-xl flex items-center gap-1.5 hover:bg-gold-600 hover:text-royal-950 shadow"
                >
                  <Download className="w-4 h-4" /> Download .xml File
                </button>
              </div>
            </div>

            <div className="bg-[#101c33] text-emerald-300 p-4 rounded-2xl font-mono text-xs overflow-x-auto max-h-96 border border-slate-700">
              <pre>{googleXml}</pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

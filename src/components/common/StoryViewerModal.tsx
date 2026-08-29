import React from 'react';
import { X, ShoppingBag, Eye, MessageCircle } from 'lucide-react';
import { Product } from '../../types/ecommerce';
import { useCart } from '../../context/CartContext';
import { useCurrency } from '../../context/CurrencyContext';

interface StoryViewerModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onViewProduct: (product: Product) => void;
}

export const StoryViewerModal: React.FC<StoryViewerModalProps> = ({
  product,
  isOpen,
  onClose,
  onViewProduct
}) => {
  const { addToCart } = useCart();
  const { format } = useCurrency();

  if (!isOpen || !product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Aanal Gurukul! I saw "${product.title}" on your story reel. I would like to buy it (Price: ₹${product.price}, SKU: ${product.sku}).`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-sm w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-gold-500/40 flex flex-col justify-between text-white">
        
        {/* Story progress bar */}
        <div className="absolute top-3 inset-x-4 z-20 flex gap-1">
          <div className="h-1 bg-white flex-1 rounded-full animate-shimmer" />
        </div>

        {/* Top bar */}
        <div className="relative z-20 p-4 pt-6 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gold-600 flex items-center justify-center font-serif font-bold text-xs">
              AG
            </span>
            <div>
              <p className="font-serif font-bold text-xs">Aanal Gurukul Spotlight</p>
              <p className="text-[10px] text-slate-300">Ahmedabad Flagship Store</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-white hover:text-gold-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image background */}
        <img
          src={product.images[0]}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

        {/* Bottom Product Card Action */}
        <div className="relative z-20 p-5 space-y-3">
          <div className="bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300">
              {product.categories[0]}
            </span>
            <h4 className="font-serif font-bold text-sm text-white line-clamp-1">{product.title}</h4>
            <p className="font-mono text-xs font-bold text-gold-400 mt-0.5">{format(product.price)}</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="py-3 bg-gold-gradient text-royal-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4" /> Bag
            </button>

            <a
              href={`https://wa.me/917600917948?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="py-3 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp
            </a>

            <button
              onClick={() => {
                onClose();
                onViewProduct(product);
              }}
              className="py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1"
            >
              <Eye className="w-4 h-4" /> Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Scissors, 
  Truck, 
  ShieldCheck, 
  Star, 
  Check, 
  Share2, 
  Phone, 
  Clock, 
  ChevronRight, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { Product, CustomMeasurements } from '../../types/ecommerce';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';
import { CustomMeasurementModal } from './CustomMeasurementModal';
import { ProductCard } from '../shop/ProductCard';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  onBack: () => void;
  onSelectProduct: (p: Product) => void;
  onQuickView: (p: Product) => void;
  onOpenBookStylist: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  onBack,
  onSelectProduct,
  onQuickView,
  onOpenBookStylist
}) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { format } = useCurrency();

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || 'Default');
  const [stitchingOption, setStitchingOption] = useState<'ready-to-wear' | 'custom-stitched'>('ready-to-wear');
  const [measurementModalOpen, setMeasurementModalOpen] = useState(false);
  const [customMeasurements, setCustomMeasurements] = useState<CustomMeasurements | undefined>(undefined);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const discountPercent = Math.round(
    ((product.regular_price - product.price) / product.regular_price) * 100
  );

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize, selectedColor, stitchingOption, customMeasurements);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.categories.some((c) => product.categories.includes(c)))
    .slice(0, 4);

  return (
    <div className="bg-[#faf8f5] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <button onClick={onBack} className="hover:text-gold-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
          </button>
          <span>/</span>
          <span className="text-gold-700">{product.categories[0]}</span>
          <span>/</span>
          <span className="text-royal-950 font-bold truncate max-w-xs">{product.title}</span>
        </div>

        {/* Main Product Section */}
        <div className="bg-white rounded-3xl border border-gold-200/80 shadow-sm p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Gallery Left */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f5f1ea] border border-slate-200">
                <img
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.is_bestseller && (
                    <span className="bg-[#1b2a4a] text-gold-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-500/30 flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Bestseller
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="bg-maroon-700 text-white text-xs font-bold tracking-wider px-2.5 py-1 rounded-lg shadow">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>

                {/* Wishlist floating */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 p-3 rounded-full shadow-lg backdrop-blur-md transition-all ${
                    isInWishlist(product.id)
                      ? 'bg-maroon-600 text-white'
                      : 'bg-white/80 text-royal-900 hover:bg-white hover:text-maroon-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-20 h-24 rounded-xl overflow-hidden border-2 shrink-0 ${
                        activeImageIdx === idx ? 'border-gold-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Right */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <div>
                {/* SKU & Category */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="uppercase tracking-widest font-bold text-gold-700 font-mono">
                    SKU: {product.sku}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviews_count} Reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-royal-950 mt-2">
                  {product.title}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-royal-900">
                    {format(product.price)}
                  </span>
                  {product.regular_price > product.price && (
                    <span className="font-mono text-base text-slate-400 line-through">
                      {format(product.regular_price)}
                    </span>
                  )}
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Save {format(product.regular_price - product.price)}
                  </span>
                </div>
                <span className="text-xs text-slate-500 block mt-1">Inclusive of GST and all applicable taxes</span>

                <hr className="my-6 border-slate-100" />

                {/* Stitching Option Toggle */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-royal-900">
                    Stitching &amp; Fitting Preference:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setStitchingOption('ready-to-wear')}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        stitchingOption === 'ready-to-wear'
                          ? 'border-royal-900 bg-[#1b2a4a] text-white shadow'
                          : 'border-slate-200 hover:border-gold-400 bg-slate-50 text-royal-900'
                      }`}
                    >
                      <span className="block font-serif font-bold text-xs">Standard Ready Sizes</span>
                      <span className="text-[11px] opacity-80">Quick Dispatched (2-3 days)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setStitchingOption('custom-stitched');
                        setMeasurementModalOpen(true);
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        stitchingOption === 'custom-stitched'
                          ? 'border-gold-600 bg-gold-50 text-royal-900 shadow'
                          : 'border-slate-200 hover:border-gold-400 bg-slate-50 text-royal-900'
                      }`}
                    >
                      <span className="block font-serif font-bold text-xs flex items-center gap-1.5 text-gold-800">
                        <Scissors className="w-3.5 h-3.5 text-gold-600" /> Custom Made-to-Measure
                      </span>
                      <span className="text-[11px] text-slate-600">
                        {customMeasurements ? 'Measurements Saved ✓' : 'Add Your Exact Fit'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Size Selector */}
                {stitchingOption === 'ready-to-wear' && (
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold uppercase tracking-wider text-royal-900">
                        Select Standard Size:
                      </span>
                      <button 
                        onClick={() => {
                          setStitchingOption('custom-stitched');
                          setMeasurementModalOpen(true);
                        }}
                        className="text-gold-700 font-semibold underline hover:text-gold-800"
                      >
                        Need Custom Size?
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedSize(s)}
                          className={`px-4 py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                            selectedSize === s
                              ? 'bg-royal-900 text-gold-300 border-royal-900 shadow'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-gold-400'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selector */}
                {product.colors.length > 1 && (
                  <div className="mt-6 space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-royal-900">
                      Color Variant: <span className="font-normal text-gold-700">{selectedColor}</span>
                    </label>
                    <div className="flex gap-2">
                      {product.colors.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setSelectedColor(c)}
                          className={`px-3 py-1.5 text-xs rounded-lg border font-medium ${
                            selectedColor === c
                              ? 'border-gold-600 bg-gold-100 text-gold-900 font-bold'
                              : 'border-slate-200 bg-white text-slate-700'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions: Add to Cart + WhatsApp Stylist */}
                <div className="mt-8 space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-4 bg-gold-gradient text-royal-950 font-bold text-sm uppercase tracking-widest rounded-2xl hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>{addedAnimation ? 'Added to Cart ✓' : 'Add to Royal Bag'}</span>
                  </button>

                  <a
                    href={`https://wa.me/917600917948?text=Hello%20Aanal%20Gurukul%2C%20I%20am%20interested%20in%20ordering%20"${encodeURIComponent(product.title)}"%20(SKU%3A%20${product.sku}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-2xl transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Order / Consult with Stylist on WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100 text-center">
                <div className="p-3 bg-[#fbf9f5] rounded-xl border border-gold-100">
                  <Truck className="w-4 h-4 text-gold-600 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-royal-900">Express Delivery</p>
                  <p className="text-[10px] text-slate-500">Free over ₹4,999</p>
                </div>
                <div className="p-3 bg-[#fbf9f5] rounded-xl border border-gold-100">
                  <Scissors className="w-4 h-4 text-gold-600 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-royal-900">Custom Stitching</p>
                  <p className="text-[10px] text-slate-500">Bespoke Fit</p>
                </div>
                <div className="p-3 bg-[#fbf9f5] rounded-xl border border-gold-100">
                  <ShieldCheck className="w-4 h-4 text-gold-600 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-royal-900">Authentic Art</p>
                  <p className="text-[10px] text-slate-500">Ahmedabad Craft</p>
                </div>
              </div>

            </div>

          </div>

          {/* Detailed Specifications Tabs */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <h3 className="font-serif text-xl font-bold text-royal-900 mb-6">
              Fabric, Craftsmanship &amp; Specifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#fbf9f5] p-6 rounded-2xl border border-gold-100">
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Fabric</span>
                  <span className="font-medium text-royal-900">{product.specifications.fabric}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Work / Embroidery</span>
                  <span className="font-medium text-royal-900">{product.specifications.work}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Occasions</span>
                  <span className="font-medium text-royal-900">{product.specifications.occasion}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Included in Package</span>
                  <span className="font-medium text-royal-900">{product.specifications.included}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Garment Care</span>
                  <span className="font-medium text-royal-900">{product.specifications.care}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Dispatch Time</span>
                  <span className="font-medium text-emerald-700 font-semibold">24 to 48 Hours</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-600 leading-relaxed">
              <h4 className="font-serif font-bold text-sm text-royal-900 mb-2">Artisan Notes &amp; Brand Heritage</h4>
              <p>{product.description}</p>
            </div>
          </div>

        </div>

        {/* Related Collections */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 mb-12">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">Matching Sets</span>
              <h3 className="font-serif text-2xl font-bold text-royal-950 mt-1">You May Also Love</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onSelectProduct={onSelectProduct}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Measurement Modal */}
      <CustomMeasurementModal
        isOpen={measurementModalOpen}
        onClose={() => setMeasurementModalOpen(false)}
        onSave={(measurements) => {
          setCustomMeasurements(measurements);
          setStitchingOption('custom-stitched');
        }}
        initialMeasurements={customMeasurements}
      />
    </div>
  );
};

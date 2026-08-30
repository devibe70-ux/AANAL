import React, { useState } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { OrderProvider } from './context/OrderContext';
import { PRODUCTS } from './data/products';
import { Product, Order } from './types/ecommerce';

// Components
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';
import { QuickViewModal } from './components/common/QuickViewModal';
import { StoryViewerModal } from './components/common/StoryViewerModal';

// Home Sections
import { HeroBanner } from './components/home/HeroBanner';
import { StoryReels } from './components/home/StoryReels';
import { CategoryGrid } from './components/home/CategoryGrid';
import { FeaturedCollections } from './components/home/FeaturedCollections';
import { OccasionSection } from './components/home/OccasionSection';
import { BrandStory } from './components/home/BrandStory';
import { GoogleReviewsWidget } from './components/home/GoogleReviewsWidget';

// Views
import { ShopPage } from './components/shop/ShopPage';
import { ProductDetailPage } from './components/product/ProductDetailPage';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { OrderTrackerPage } from './components/orders/OrderTrackerPage';
import { WishlistPage } from './components/wishlist/WishlistPage';
import { AdminDashboard } from './components/admin/AdminDashboard';

// Modals
import { BookStylistModal } from './components/modals/BookStylistModal';
import { StoreLocatorModal } from './components/modals/StoreLocatorModal';
import { SearchModal } from './components/modals/SearchModal';

export const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'product' | 'checkout' | 'track' | 'wishlist' | 'admin'>('home');
  const [shopCategoryParam, setShopCategoryParam] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [storyProduct, setStoryProduct] = useState<Product | null>(null);
  const [bookStylistOpen, setBookStylistOpen] = useState(false);
  const [storeLocatorOpen, setStoreLocatorOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleNavigate = (view: string, param?: string) => {
    if (param) setShopCategoryParam(param);
    setCurrentView(view as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSuccess = (_order: Order) => {
    setCurrentView('track');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-900 selection:bg-gold-200">
      
      {/* Navigation Header */}
      <Navbar
        onNavigate={handleNavigate}
        currentView={currentView}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenStoreLocator={() => setStoreLocatorOpen(true)}
        onOpenBookStylist={() => setBookStylistOpen(true)}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroBanner
              onExplore={(cat) => handleNavigate('shop', cat || 'all')}
              onBookStylist={() => setBookStylistOpen(true)}
            />
            <StoryReels
              products={PRODUCTS}
              onOpenStory={(p) => setStoryProduct(p)}
            />
            <CategoryGrid
              products={PRODUCTS}
              onSelectCategory={(cat) => handleNavigate('shop', cat)}
            />
            <FeaturedCollections
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onQuickView={(p) => setQuickViewProduct(p)}
              onViewAll={() => handleNavigate('shop', 'all')}
            />
            <OccasionSection
              onSelectOccasion={(occ) => handleNavigate('shop', occ)}
            />
            <BrandStory
              onOpenStoreLocator={() => setStoreLocatorOpen(true)}
              onOpenBookStylist={() => setBookStylistOpen(true)}
            />
            <GoogleReviewsWidget />
          </>
        )}

        {currentView === 'shop' && (
          <ShopPage
            products={PRODUCTS}
            initialCategory={shopCategoryParam}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            allProducts={PRODUCTS}
            onBack={() => handleNavigate('shop', 'all')}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOpenBookStylist={() => setBookStylistOpen(true)}
          />
        )}

        {currentView === 'checkout' && (
          <CheckoutPage
            onBackToShop={() => handleNavigate('shop', 'all')}
            onOrderSuccess={handleOrderSuccess}
          />
        )}

        {currentView === 'track' && (
          <OrderTrackerPage
            onContinueShopping={() => handleNavigate('shop', 'all')}
          />
        )}

        {currentView === 'wishlist' && (
          <WishlistPage
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigateToShop={() => handleNavigate('shop', 'all')}
          />
        )}

        {currentView === 'admin' && (
          <AdminDashboard
            products={PRODUCTS}
            onBackToStore={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenStoreLocator={() => setStoreLocatorOpen(true)}
        onOpenBookStylist={() => setBookStylistOpen(true)}
      />

      {/* Floating WhatsApp Stylist */}
      <WhatsAppWidget />

      {/* Global Slide Cart */}
      <CartDrawer
        onProceedToCheckout={() => setCurrentView('checkout')}
        onNavigateToShop={() => handleNavigate('shop', 'all')}
      />

      {/* Modals */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onViewFullDetails={handleSelectProduct}
      />

      <StoryViewerModal
        product={storyProduct}
        isOpen={!!storyProduct}
        onClose={() => setStoryProduct(null)}
        onViewProduct={handleSelectProduct}
      />

      <BookStylistModal
        isOpen={bookStylistOpen}
        onClose={() => setBookStylistOpen(false)}
      />

      <StoreLocatorModal
        isOpen={storeLocatorOpen}
        onClose={() => setStoreLocatorOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

    </div>
  );
};

export function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <WishlistProvider>
          <OrderProvider>
            <AppContent />
          </OrderProvider>
        </WishlistProvider>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;

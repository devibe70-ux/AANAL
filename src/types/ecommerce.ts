export type CurrencyCode = 'INR' | 'USD' | 'GBP' | 'EUR' | 'AED' | 'CAD';

export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  regular_price: number;
  currency: 'INR';
  in_stock: boolean;
  stock_count?: number;
  sku: string;
  description: string;
  short_description: string;
  categories: string[];
  occasions: string[];
  images: string[];
  colors: string[];
  sizes: string[];
  is_bestseller?: boolean;
  is_new?: boolean;
  rating: number;
  reviews_count: number;
  specifications: {
    fabric: string;
    work: string;
    occasion: string;
    care: string;
    included: string;
    lining?: string;
  };
}

export interface CustomMeasurements {
  bust: string;
  waist: string;
  hips: string;
  shoulder: string;
  armhole: string;
  blouseLength: string;
  lehengaLength: string;
  height: string;
  specialInstructions?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  customMeasurements?: CustomMeasurements;
  stitchingOption: 'ready-to-wear' | 'custom-stitched' | 'unstitched';
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
  minSpend: number;
  description: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export type PaymentMethod = 'razorpay' | 'upi' | 'card' | 'cod';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  shippingMethod: string;
  shippingCost: number;
  subtotal: number;
  discount: number;
  total: number;
  currency: CurrencyCode;
  paymentMethod: PaymentMethod;
  paymentStatus: 'paid' | 'pending' | 'cod';
  paymentId?: string;
  trackingNumber: string;
  orderStatus: 'Confirmed' | 'Fabric Sourcing' | 'Tailoring & Stitching' | 'Quality Check' | 'Dispatched' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  likes: number;
}

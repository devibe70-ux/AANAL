export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'INR' | 'CAD' | 'AUD' | 'AED';

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
  lehengaLength?: string;
  height: string;
  specialInstructions?: string;
  specialNotes?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  stitchingOption: 'ready-to-wear' | 'custom-stitched';
  customMeasurements?: CustomMeasurements;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed' | 'percent';
  value: number;
  minSpend: number;
  description: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export type PaymentMethod = 'razorpay' | 'upi' | 'cod' | 'card';

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;
  currency: CurrencyCode;
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  paymentId?: string;
  paymentStatus: 'paid' | 'pending' | 'failed' | 'cod' | string;
  orderStatus: 'Confirmed' | 'Fabric Sourcing' | 'Tailoring & Stitching' | 'Quality Check' | 'Dispatched' | 'Delivered' | 'confirmed' | 'fabric_sourcing' | 'tailoring' | 'quality_check' | 'dispatched' | 'delivered' | string;
  status?: string;
  date: string;
  estimatedDelivery?: string;
  estimatedDeliveryDate?: string;
  trackingNumber: string;
  shippingMethod: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

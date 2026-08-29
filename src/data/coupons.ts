import { Coupon } from '../types/ecommerce';

export const AVAILABLE_COUPONS: Coupon[] = [
  {
    code: 'AANAL10',
    discountType: 'percentage',
    value: 10,
    minSpend: 2999,
    description: '10% OFF on your royal ethnic order'
  },
  {
    code: 'FESTIVE15',
    discountType: 'percentage',
    value: 15,
    minSpend: 6999,
    description: '15% Festive Special Discount on orders over ₹6,999'
  },
  {
    code: 'FIRSTORDER',
    discountType: 'fixed',
    value: 500,
    minSpend: 3499,
    description: 'Flat ₹500 Welcome Discount on first purchase'
  },
  {
    code: 'BRIDALVIP',
    discountType: 'percentage',
    value: 20,
    minSpend: 15000,
    description: '20% Bridal Trousseau VIP discount'
  }
];

import { CurrencyCode } from '../types/ecommerce';

export const EXCHANGE_RATES: Record<CurrencyCode, { symbol: string; rate: number; label: string }> = {
  INR: { symbol: '₹', rate: 1, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 0.012, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.0095, label: 'GBP (£)' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR (€)' },
  AED: { symbol: 'AED ', rate: 0.044, label: 'AED (د.إ)' },
  CAD: { symbol: 'CA$', rate: 0.016, label: 'CAD ($)' },
};

export function formatPrice(amountInINR: number, currency: CurrencyCode = 'INR'): string {
  const { symbol, rate } = EXCHANGE_RATES[currency] || EXCHANGE_RATES.INR;
  const converted = Math.round(amountInINR * rate);
  
  if (currency === 'INR') {
    return `${symbol}${amountInINR.toLocaleString('en-IN')}`;
  }
  return `${symbol}${converted.toLocaleString('en-US')}`;
}

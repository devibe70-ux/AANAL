import { CurrencyCode } from '../types/ecommerce';

export type { CurrencyCode };

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateAgainstINR: number;
  locale: string;
}

export const SUPPORTED_CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rateAgainstINR: 0.012, locale: 'en-US' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', rateAgainstINR: 0.011, locale: 'de-DE' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rateAgainstINR: 0.0095, locale: 'en-GB' },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', rateAgainstINR: 1.0, locale: 'en-IN' },
  CAD: { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', rateAgainstINR: 0.016, locale: 'en-CA' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rateAgainstINR: 0.018, locale: 'en-AU' },
  AED: { code: 'AED', symbol: 'AED ', name: 'UAE Dirham', rateAgainstINR: 0.044, locale: 'ar-AE' },
};

export const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  US: 'USD',
  GB: 'GBP',
  IN: 'INR',
  CA: 'CAD',
  AU: 'AUD',
  AE: 'AED',
  DE: 'EUR',
  FR: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  NL: 'EUR',
  BE: 'EUR',
  AT: 'EUR',
  IE: 'EUR',
  NZ: 'AUD',
  SG: 'USD',
};

export const DEFAULT_CURRENCY: CurrencyCode = 'INR';

export function getCurrencyForCountry(countryCode?: string | null): CurrencyCode {
  if (!countryCode) return DEFAULT_CURRENCY;
  return COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] || 'USD';
}

/**
 * Native Intl.NumberFormat localized currency formatter
 * @param amountInINR Base catalog price in INR
 * @param currency Target currency code
 */
export function formatPrice(amountInINR: number, currency: CurrencyCode = 'INR', customLocale?: string): string {
  const config = SUPPORTED_CURRENCIES[currency] || SUPPORTED_CURRENCIES.INR;
  const convertedAmount = currency === 'INR' ? amountInINR : Math.round(amountInINR * config.rateAgainstINR);
  const locale = customLocale || (currency === 'INR' ? 'en-IN' : config.locale);

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency === 'AED' ? 'AED' : currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(convertedAmount);
  } catch (_e) {
    return `${config.symbol}${convertedAmount.toLocaleString()}`;
  }
}

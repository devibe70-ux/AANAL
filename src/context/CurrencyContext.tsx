import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode, SUPPORTED_CURRENCIES, formatPrice, getCurrencyForCountry } from '../config/currencies';
import { getCookie, setCookie } from '../utils/cookies';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  format: (amountInINR: number) => string;
  supportedCurrencies: typeof SUPPORTED_CURRENCIES;
  detectedCountry: string | null;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CURRENCY_COOKIE_NAME = 'user_currency';

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    // 1. Check user_currency cookie first (manual override preference)
    const cookieCurrency = getCookie(CURRENCY_COOKIE_NAME) as CurrencyCode | null;
    if (cookieCurrency && SUPPORTED_CURRENCIES[cookieCurrency]) {
      return cookieCurrency;
    }

    // 2. Check localStorage fallback
    const localCurrency = (typeof window !== 'undefined' ? localStorage.getItem('user_currency') : null) as CurrencyCode | null;
    if (localCurrency && SUPPORTED_CURRENCIES[localCurrency]) {
      return localCurrency;
    }

    // Default to INR for Indian luxury brand
    return 'INR';
  });

  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  // Automatic Edge / Geolocation Detection on first visit
  useEffect(() => {
    const existingCookie = getCookie(CURRENCY_COOKIE_NAME);
    if (existingCookie) return; // User already has a preference set

    // Fetch Vercel Edge Geolocation Header via /api/geo
    fetch('/api/geo')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API route unavailable');
      })
      .then((data) => {
        if (data?.country) {
          setDetectedCountry(data.country);
          const mappedCurrency = getCurrencyForCountry(data.country);
          setCurrencyState(mappedCurrency);
          setCookie(CURRENCY_COOKIE_NAME, mappedCurrency, 365);
        }
      })
      .catch(() => {
        // Client-side timezone fallback detection if deployed statically
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
          if (tz.includes('Calcutta') || tz.includes('Kolkata')) {
            setCurrencyState('INR');
          } else if (tz.includes('New_York') || tz.includes('Los_Angeles') || tz.includes('Chicago')) {
            setCurrencyState('USD');
          } else if (tz.includes('London')) {
            setCurrencyState('GBP');
          } else if (tz.includes('Dubai')) {
            setCurrencyState('AED');
          } else if (tz.includes('Toronto') || tz.includes('Vancouver')) {
            setCurrencyState('CAD');
          } else if (tz.includes('Sydney') || tz.includes('Melbourne')) {
            setCurrencyState('AUD');
          }
        } catch (_e) {
          // keep current state
        }
      });
  }, []);

  // Manual Currency Override by User
  const setCurrency = (code: CurrencyCode) => {
    if (!SUPPORTED_CURRENCIES[code]) return;
    setCurrencyState(code);
    setCookie(CURRENCY_COOKIE_NAME, code, 365);
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_currency', code);
    }
  };

  const format = (amountInINR: number) => formatPrice(amountInINR, currency);

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      format,
      supportedCurrencies: SUPPORTED_CURRENCIES,
      detectedCountry
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within a CurrencyProvider');
  return ctx;
};

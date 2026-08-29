import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode } from '../types/ecommerce';
import { EXCHANGE_RATES, formatPrice } from '../utils/currency';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  format: (amountInINR: number) => string;
  rates: typeof EXCHANGE_RATES;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    return (localStorage.getItem('aanal_currency') as CurrencyCode) || 'INR';
  });

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code);
    localStorage.setItem('aanal_currency', code);
  };

  const format = (amountInINR: number) => formatPrice(amountInINR, currency);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, rates: EXCHANGE_RATES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within a CurrencyProvider');
  return ctx;
};

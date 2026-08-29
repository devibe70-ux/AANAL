import React, { createContext, useContext, useState, useEffect } from 'react';
import { Order, CartItem, ShippingAddress, PaymentMethod, CurrencyCode } from '../types/ecommerce';

interface OrderContextType {
  orders: Order[];
  currentOrder: Order | null;
  createOrder: (
    items: CartItem[],
    shippingAddress: ShippingAddress,
    shippingMethod: string,
    shippingCost: number,
    subtotal: number,
    discount: number,
    total: number,
    currency: CurrencyCode,
    paymentMethod: PaymentMethod,
    paymentId?: string
  ) => Order;
  getOrderById: (orderId: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: Order['orderStatus']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('aanal_orders');
      if (saved) return JSON.parse(saved);
    } catch {}
    
    // Sample initial demo order for tracking showcase
    return [
      {
        id: "AG-2026-8894",
        date: new Date(Date.now() - 86400000 * 2).toISOString(),
        items: [],
        shippingAddress: {
          fullName: "Pooja Patel",
          email: "pooja.patel@example.com",
          phone: "+91 98250 12345",
          addressLine1: "402, Royal Enclave, Bodakdev",
          city: "Ahmedabad",
          state: "Gujarat",
          pincode: "380054",
          country: "India"
        },
        shippingMethod: "Express Courier (3-5 Days)",
        shippingCost: 0,
        subtotal: 10490,
        discount: 1049,
        total: 9441,
        currency: "INR",
        paymentMethod: "razorpay",
        paymentStatus: "paid",
        paymentId: "pay_Nq98xK198aLmP",
        trackingNumber: "BLD-998241098IN",
        orderStatus: "Tailoring & Stitching",
        estimatedDelivery: "3 days from today"
      }
    ];
  });

  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  useEffect(() => {
    localStorage.setItem('aanal_orders', JSON.stringify(orders));
  }, [orders]);

  const createOrder = (
    items: CartItem[],
    shippingAddress: ShippingAddress,
    shippingMethod: string,
    shippingCost: number,
    subtotal: number,
    discount: number,
    total: number,
    currency: CurrencyCode,
    paymentMethod: PaymentMethod,
    paymentId?: string
  ): Order => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const trackingNum = `AG-${Math.random().toString(36).substring(2, 9).toUpperCase()}IN`;
    
    const newOrder: Order = {
      id: `AG-2026-${randomNum}`,
      date: new Date().toISOString(),
      items: [...items],
      shippingAddress,
      shippingMethod,
      shippingCost,
      subtotal,
      discount,
      total,
      currency,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'cod' : 'paid',
      paymentId: paymentId || `txn_${Math.random().toString(36).substring(2, 10)}`,
      trackingNumber: trackingNum,
      orderStatus: 'Confirmed',
      estimatedDelivery: '5 - 7 Business Days'
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCurrentOrder(newOrder);
    return newOrder;
  };

  const getOrderById = (orderId: string) => {
    const clean = orderId.trim().toUpperCase();
    return orders.find((o) => o.id.toUpperCase() === clean || o.trackingNumber.toUpperCase() === clean);
  };

  const updateOrderStatus = (orderId: string, status: Order['orderStatus']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, orderStatus: status } : o))
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        currentOrder,
        createOrder,
        getOrderById,
        updateOrderStatus
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrder must be used within an OrderProvider');
  return ctx;
};

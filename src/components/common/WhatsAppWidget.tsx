import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  return (
    <aside aria-label="Stylist WhatsApp Support" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      <div className="bg-white text-royal-900 text-xs px-3 py-1.5 rounded-full shadow-lg border border-gold-200 opacity-0 group-hover:opacity-100 transition-opacity font-medium hidden sm:block">
        💬 Chat with Aanal Stylist
      </div>
      <a
        href="https://wa.me/917600917948?text=Hello%20Aanal%20Gurukul%2C%20I%20am%20browsing%20your%20designer%20collection%20and%20need%20assistance."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-200 border-2 border-white"
        aria-label="Chat on WhatsApp with Aanal Gurukul Stylist"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};

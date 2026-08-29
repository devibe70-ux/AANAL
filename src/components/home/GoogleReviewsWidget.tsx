import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../../data/testimonials';

export const GoogleReviewsWidget: React.FC = () => {
  return (
    <section className="py-16 bg-[#faf8f5] border-t border-gold-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-amber-500 font-bold text-sm bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-2">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <span className="text-royal-900 ml-1">4.9 / 5.0 Google Rating</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-royal-950">
            Loved by Royalty Across the Globe
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Real reviews from our brides and discerning clients in Ahmedabad, Mumbai, UK, USA &amp; Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-gold-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-gold-300 opacity-60" />
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-gold-300"
                />
                <div>
                  <h4 className="font-serif font-bold text-xs text-royal-900 flex items-center gap-1">
                    {rev.author}
                    {rev.verified && <CheckCircle className="w-3 h-3 text-emerald-600" />}
                  </h4>
                  <span className="text-[10px] text-slate-500">{rev.city} &bull; {rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

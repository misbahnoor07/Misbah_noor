import React from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Star, Quote, CheckCircle2, ShoppingBag } from 'lucide-react';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  darkMode,
}) => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Client Feedback & Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Loved By <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">E-commerce Owners</span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            Read what store owners, digital item creators, and business clients say about Misbah's work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className={`p-8 rounded-3xl border-2 transition-all relative flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 hover:border-orange-500/40'
                  : 'bg-white border-orange-200 shadow-xl shadow-orange-500/5 hover:border-orange-300'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  {/* Verified Tag */}
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-200 border border-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Verified {t.platform} Order
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-sm sm:text-base text-slate-950 dark:text-slate-100 leading-relaxed italic font-bold mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-slate-950 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-bold">
                    {t.role} • {t.companyOrNiche}
                  </p>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold">
                    Service: {t.orderType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

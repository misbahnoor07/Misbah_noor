import React, { useState } from 'react';
import { ShoppingBag, Calculator, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface EtsySeoCalculatorProps {
  darkMode: boolean;
  onOpenHireModal: () => void;
}

export const EtsySeoCalculator: React.FC<EtsySeoCalculatorProps> = ({
  darkMode,
  onOpenHireModal,
}) => {
  const [monthlyViews, setMonthlyViews] = useState<number>(1500);
  const [avgPrice, setAvgPrice] = useState<number>(15);
  const [currentConversion, setCurrentConversion] = useState<number>(1.2);

  // Calculate current vs optimized estimates
  const currentMonthlyOrders = Math.round((monthlyViews * (currentConversion / 100)));
  const currentMonthlyRevenue = Math.round(currentMonthlyOrders * avgPrice);

  // SEO Optimization boosts views by ~3.5x and improves conversion rate to ~3.8%
  const optimizedViews = Math.round(monthlyViews * 3.5);
  const optimizedConversion = 3.8;
  const optimizedOrders = Math.round((optimizedViews * (optimizedConversion / 100)));
  const optimizedRevenue = Math.round(optimizedOrders * avgPrice);

  const monthlyGain = Math.max(0, optimizedRevenue - currentMonthlyRevenue);
  const yearlyGain = monthlyGain * 12;

  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-3xl p-8 sm:p-12 border-2 relative overflow-hidden shadow-2xl ${
            darkMode
              ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-orange-900/60'
              : 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white border-orange-800'
          }`}
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description & Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-orange-500/20 text-orange-300 border border-orange-400/30">
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>Interactive Etsy Growth Tool</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Etsy SEO & Sales Revenue Growth Estimator
              </h2>

              <p className="text-sm font-semibold text-slate-300 leading-relaxed">
                Estimate how much passive income your digital or physical Etsy shop could generate when optimized with Misbah’s 13-tag strategy and title keywords.
              </p>

              {/* Controls */}
              <div className="space-y-5 pt-2">
                {/* Views Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Current Monthly Views / Traffic:</span>
                    <span className="text-orange-400 font-extrabold">{monthlyViews.toLocaleString()} views</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="10000"
                    step="100"
                    value={monthlyViews}
                    onChange={(e) => setMonthlyViews(Number(e.target.value))}
                    className="w-full accent-orange-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Avg Product Price Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Average Digital Item Price ($):</span>
                    <span className="text-orange-400 font-extrabold">${avgPrice} USD</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={avgPrice}
                    onChange={(e) => setAvgPrice(Number(e.target.value))}
                    className="w-full accent-orange-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Conversion Rate */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Current Shop Conversion Rate (%):</span>
                    <span className="text-orange-400 font-extrabold">{currentConversion}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    className="w-full accent-orange-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right Projected Results Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border-2 border-orange-500/30 text-white space-y-6 shadow-2xl">
                <div className="text-center pb-4 border-b border-slate-800">
                  <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                    Projected Monthly Revenue
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 mt-1">
                    ${optimizedRevenue.toLocaleString()}
                    <span className="text-xs font-bold text-slate-400 ml-1">/ mo</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300 mt-1">
                    Estimated {optimizedOrders} monthly orders at {optimizedConversion}% conversion.
                  </p>
                </div>

                {/* Additional Lift Stats */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-300 font-bold">Est. Additional Monthly Revenue:</span>
                    <span className="font-black text-emerald-400 text-sm">+${monthlyGain.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-300 font-bold">Est. Annual Revenue Boost:</span>
                    <span className="font-black text-amber-400 text-sm">+${yearlyGain.toLocaleString()} / year</span>
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={onOpenHireModal}
                  className="w-full py-4 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 hover:from-orange-500 hover:to-amber-500 transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-slate-950/20" />
                  <span>Get Your Custom Etsy SEO Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

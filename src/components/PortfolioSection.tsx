import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioItem, PortfolioCategory } from '../types';
import {
  ShoppingBag,
  TrendingUp,
  Megaphone,
  PackageCheck,
  ExternalLink,
  X,
  Sparkles,
  CheckCircle2,
  BarChart3,
  ChevronRight,
} from 'lucide-react';

interface PortfolioSectionProps {
  darkMode: boolean;
  onOpenHireModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  darkMode,
  onOpenHireModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories: { id: PortfolioCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'etsy', label: 'Etsy Projects', icon: ShoppingBag },
    { id: 'seo', label: 'SEO Projects', icon: TrendingUp },
    { id: 'ads', label: 'Advertising Projects', icon: Megaphone },
    { id: 'ecommerce', label: 'eCommerce Projects', icon: PackageCheck },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <ShoppingBag className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Featured Case Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Real Results &{' '}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
              Client Portfolio
            </span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            Explore digital product sales growth, crochet listings, SEO keyword rankings, ad ROAS, and eBay store inventory projects.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                    : darkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-white text-slate-800 hover:bg-orange-50 hover:text-orange-700 border-2 border-orange-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className={`group rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 hover:border-orange-500/50 hover:shadow-2xl'
                  : 'bg-white border-orange-200 shadow-lg shadow-orange-500/5 hover:border-orange-400 hover:shadow-2xl'
              }`}
            >
              <div>
                {/* Thumbnail Header Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white border border-white/20">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute inset-0 bg-orange-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2.5 rounded-xl bg-white text-slate-950 font-extrabold text-xs shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>Inspect Case Study</span>
                      <ChevronRight className="w-4 h-4 text-orange-600" />
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-1">
                    Client: {item.client}
                  </div>

                  <h3 className="text-lg font-black text-slate-950 dark:text-white leading-snug mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-900 dark:text-slate-200 line-clamp-2 leading-relaxed mb-4 font-bold">
                    {item.summary}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-900/50 mb-4">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xs sm:text-sm font-black text-orange-800 dark:text-orange-300">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-700 dark:text-slate-300 font-bold truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalItem(item);
                  }}
                  className="w-full py-3 rounded-xl font-bold text-xs text-orange-950 dark:text-orange-200 bg-orange-100/80 dark:bg-orange-950/60 hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-orange-200 dark:border-orange-800"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>View Full Details & Metrics</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Inspection Modal */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border-2 shadow-2xl ${
                darkMode ? 'bg-slate-950 text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-orange-200'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-orange-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Banner */}
              <div className="rounded-2xl overflow-hidden aspect-video mb-6 relative">
                <img
                  src={activeModalItem.thumbnail}
                  alt={activeModalItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white border border-white/20">
                  {activeModalItem.categoryLabel}
                </div>
              </div>

              <div className="text-xs font-bold text-orange-600 dark:text-orange-400">
                Client: {activeModalItem.client}
              </div>

              <h3 className="text-2xl font-black text-slate-950 dark:text-white mt-1 mb-4">
                {activeModalItem.title}
              </h3>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/60 border-2 border-orange-200 dark:border-orange-800 mb-6">
                {activeModalItem.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg sm:text-xl font-black text-orange-800 dark:text-orange-300">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 font-bold">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="space-y-4 mb-6 text-sm leading-relaxed">
                <div>
                  <h4 className="font-extrabold text-slate-950 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    The Challenge
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium pl-3.5">
                    {activeModalItem.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-950 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    Strategy & Execution
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium pl-3.5">
                    {activeModalItem.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-950 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    Key Outcomes & Impact
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium pl-3.5">
                    {activeModalItem.results}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalItem.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold px-2.5 py-1 rounded-md bg-orange-100 dark:bg-orange-950/80 text-orange-900 dark:text-orange-200 border border-orange-200"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    onOpenHireModal();
                  }}
                  className="px-5 py-3 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-md cursor-pointer"
                >
                  Request Similar Strategy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

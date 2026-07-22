import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';
import {
  ShoppingBag,
  TrendingUp,
  PenTool,
  Megaphone,
  PackageCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  darkMode: boolean;
  onSelectServiceToHire: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  darkMode,
  onSelectServiceToHire,
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return ShoppingBag;
      case 'TrendingUp':
        return TrendingUp;
      case 'PenTool':
        return PenTool;
      case 'Megaphone':
        return Megaphone;
      case 'PackageCheck':
        return PackageCheck;
      default:
        return Sparkles;
    }
  };

  const filteredServices =
    activeCategoryFilter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategoryFilter);

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Premium Services Designed to{' '}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
              Scale Your Brand
            </span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            From Etsy shop optimization and Google SEO to Meta advertising and eBay inventory management.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'etsy', label: 'Etsy Services' },
            { id: 'seo', label: 'SEO Services' },
            { id: 'content', label: 'Content Writing' },
            { id: 'ads', label: 'Digital Marketing' },
            { id: 'ebay', label: 'eBay Management' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-4.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/25'
                  : darkMode
                  ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'bg-white text-slate-800 border-2 border-orange-100 hover:border-orange-300 hover:bg-orange-50/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className={`group rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 hover:border-orange-500/50 hover:shadow-2xl'
                    : 'bg-white border-orange-200/90 shadow-xl shadow-orange-500/5 hover:border-orange-400 hover:shadow-2xl'
                }`}
              >
                <div>
                  {/* Top Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {service.highlightTag && (
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-950 dark:bg-amber-950/80 dark:text-amber-200 border border-amber-300">
                        {service.highlightTag}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    {service.categoryLabel}
                  </span>

                  <h3 className="text-xl font-black text-slate-950 dark:text-white mt-1 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm font-bold text-slate-900 dark:text-slate-200 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet feature list */}
                  <div className="space-y-2.5 mb-8">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <button
                  onClick={() => onSelectServiceToHire(service.title)}
                  className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-orange-950 dark:text-orange-200 bg-orange-100/80 hover:bg-orange-600 hover:text-white dark:bg-orange-950/60 dark:hover:bg-orange-600 dark:hover:text-white border-2 border-orange-200 dark:border-orange-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Order {service.categoryLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

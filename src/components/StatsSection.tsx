import React, { useEffect, useState } from 'react';
import { ShoppingBag, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

interface StatsSectionProps {
  darkMode: boolean;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ darkMode }) => {
  const [counts, setCounts] = useState({
    orders: 0,
    products: 0,
    experience: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts((prev) => {
        const nextOrders = Math.min(prev.orders + 10, 200);
        const nextProducts = Math.min(prev.products + 2, 50);
        const nextExp = Math.min(prev.experience + 1, 5);
        const nextSat = Math.min(prev.satisfaction + 5, 99);

        if (
          nextOrders === 200 &&
          nextProducts === 50 &&
          nextExp === 5 &&
          nextSat === 99
        ) {
          clearInterval(timer);
        }

        return {
          orders: nextOrders,
          products: nextProducts,
          experience: nextExp,
          satisfaction: nextSat,
        };
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      id: 'orders',
      icon: ShoppingBag,
      value: `${counts.orders}+`,
      title: 'Etsy Orders Completed',
      subtitle: 'Verified 5-star customer ratings',
      color: 'from-orange-600 via-amber-600 to-rose-500',
    },
    {
      id: 'products',
      icon: Sparkles,
      value: `${counts.products}+`,
      title: 'Successful Digital Products',
      subtitle: 'Planners, templates & craft guides',
      color: 'from-amber-600 to-orange-500',
    },
    {
      id: 'experience',
      icon: TrendingUp,
      value: `${counts.experience}+ Years`,
      title: 'SEO & Marketing Experience',
      subtitle: 'On-page, off-page & ad strategies',
      color: 'from-orange-500 via-amber-500 to-yellow-500',
    },
    {
      id: 'satisfaction',
      icon: ShieldCheck,
      value: `${counts.satisfaction}%`,
      title: 'eCommerce Expertise',
      subtitle: 'eBay stock & store growth',
      color: 'from-emerald-600 to-teal-600',
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 hover:border-orange-500/50 shadow-xl'
                    : 'bg-white border-orange-200 shadow-lg shadow-orange-500/5 hover:border-orange-400 hover:shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shadow-md shadow-orange-500/10`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-200 border border-emerald-300">
                    Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight mb-1">
                  {stat.value}
                </div>

                <div className="text-sm font-black text-slate-900 dark:text-slate-100">
                  {stat.title}
                </div>

                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                  {stat.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

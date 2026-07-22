import React from 'react';
import { WHY_HIRE_ME_REASONS } from '../data/portfolioData';
import {
  Award,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Target,
  Layers,
  Check,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface WhyHireMeSectionProps {
  darkMode: boolean;
  onOpenHireModal: () => void;
}

export const WhyHireMeSection: React.FC<WhyHireMeSectionProps> = ({
  darkMode,
  onOpenHireModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'Sparkles':
        return Sparkles;
      case 'TrendingUp':
        return TrendingUp;
      case 'MessageSquare':
        return MessageSquare;
      case 'Target':
        return Target;
      case 'Layers':
        return Layers;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <ShieldCheck className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Why Choose Misbah Noor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Why Hire <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">Misbah Noor?</span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            A trusted digital partner committed to delivering measurable e-commerce results, strategic clarity, and 5-star communication.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_HIRE_ME_REASONS.map((reason, idx) => {
            const IconComponent = getIcon(reason.iconName);
            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 hover:border-orange-500/50'
                    : 'bg-white border-orange-200 shadow-lg shadow-orange-500/5 hover:border-orange-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-700 dark:text-emerald-300 border border-emerald-300">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-slate-950 dark:text-white mb-2">
                  {reason.title}
                </h3>

                <p className="text-sm font-bold text-slate-900 dark:text-slate-200 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenHireModal}
            className="px-8 py-4 rounded-2xl font-extrabold text-base text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 fill-white/20" />
            <span>Hire Misbah Noor For Your Business Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

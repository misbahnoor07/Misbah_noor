import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/portfolioData';
import { CaseStudy } from '../types';
import {
  BarChart2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Quote,
  Clock,
  Sparkles,
} from 'lucide-react';

interface CaseStudiesSectionProps {
  darkMode: boolean;
  onOpenHireModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  darkMode,
  onOpenHireModal,
}) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy>(CASE_STUDIES_DATA[0]);

  return (
    <section id="case-studies" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <BarChart2 className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Deep Dive Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Detailed <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            In-depth breakdowns showing real store growth before & after Misbah’s strategic interventions.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CASE_STUDIES_DATA.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setSelectedStudy(cs)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedStudy.id === cs.id
                  ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-white text-slate-800 border-2 border-orange-100 hover:bg-orange-50 shadow-xs'
              }`}
            >
              {cs.category}
            </button>
          ))}
        </div>

        {/* Active Case Study Details Card */}
        <div
          className={`rounded-3xl border-2 p-6 sm:p-10 shadow-2xl transition-all duration-300 ${
            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-orange-200 shadow-orange-500/5'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image & Metadata */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-video relative group border-2 border-orange-200 dark:border-slate-700">
                <img
                  src={selectedStudy.heroImage}
                  alt={selectedStudy.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white border border-white/20">
                  {selectedStudy.category}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 px-1">
                <span>Client: {selectedStudy.clientName}</span>
                <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-extrabold">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedStudy.duration}
                </span>
              </div>
            </div>

            {/* Right Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white leading-tight">
                  {selectedStudy.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-200 leading-relaxed">
                  {selectedStudy.overview}
                </p>
              </div>

              {/* Before vs After Comparison Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Before Box */}
                <div className="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/40 border-2 border-rose-200 dark:border-rose-900/50">
                  <div className="text-xs font-black uppercase text-rose-800 dark:text-rose-300 mb-2">
                    Before Misbah's Strategy
                  </div>
                  <div className="space-y-2">
                    {selectedStudy.beforeStats.map((st, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{st.label}:</span>
                        <span className="font-extrabold text-rose-900 dark:text-rose-200">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After Box */}
                <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-900/50">
                  <div className="text-xs font-black uppercase text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    After Results Achieved
                  </div>
                  <div className="space-y-2">
                    {selectedStudy.afterStats.map((st, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{st.label}:</span>
                        <span className="font-black text-emerald-900 dark:text-emerald-200">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Action Steps */}
              <div>
                <h4 className="text-sm font-black text-slate-950 dark:text-white mb-2">
                  Key Strategic Action Steps:
                </h4>
                <ul className="space-y-2">
                  {selectedStudy.keyStrategies.map((strat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{strat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial Quote */}
              {selectedStudy.testimonialQuote && (
                <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/50 border-2 border-orange-200 dark:border-orange-800/60 flex items-start gap-3">
                  <Quote className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm italic font-semibold text-slate-800 dark:text-slate-200">
                      "{selectedStudy.testimonialQuote}"
                    </p>
                    <p className="text-xs font-extrabold text-orange-800 dark:text-orange-300 mt-1">
                      — {selectedStudy.testimonialAuthor}
                    </p>
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={onOpenHireModal}
                  className="px-6 py-3 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-white/20" />
                  <span>Achieve Similar Growth for Your Store</span>
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

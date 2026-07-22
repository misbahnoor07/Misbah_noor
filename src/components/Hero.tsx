import React from 'react';
import { PageTab } from '../types';
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  TrendingUp,
  Award,
  CheckCircle2,
  Send,
  Download,
} from 'lucide-react';
import misbahPortrait from '../assets/images/misbah_portrait_1784702174977.jpg';

interface HeroProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenHireModal: () => void;
  onOpenResumeModal: () => void;
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  setActiveTab,
  onOpenHireModal,
  onOpenResumeModal,
  darkMode,
}) => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-b from-orange-50/60 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-orange-100/90 text-orange-950 border border-orange-200 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-800/80 shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400 animate-pulse" />
              <span>Digital Entrepreneur & Etsy SEO Strategist</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-emerald-800 dark:text-emerald-400 font-bold">Available for New Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
              Helping Businesses Scale Through{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent underline decoration-orange-300 decoration-wavy underline-offset-8">
                Etsy SEO
              </span>{' '}
              & Digital Growth.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-900 dark:text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold">
              I am <strong className="font-black text-slate-950 dark:text-white underline decoration-orange-400">Misbah Noor</strong>, an E-commerce Specialist with 200+ completed Etsy orders, specializing in{' '}
              <span className="text-orange-700 dark:text-orange-300 font-extrabold">Etsy Digital Products</span>, Search Engine Optimization, High-Converting Copywriting, Facebook & Google Ads, and eBay Store Management.
            </p>

            {/* Core Capability Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border-2 border-orange-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600" />
                200+ Etsy Orders Completed
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border-2 border-amber-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                Digital Product Specialist
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Page 1 Etsy SEO Rank
              </span>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              {/* Hire Me Primary CTA */}
              <button
                onClick={onOpenHireModal}
                className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all flex items-center gap-2.5 group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 fill-white/20" />
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* View Portfolio Button */}
              <button
                onClick={() => {
                  setActiveTab('portfolio');
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-6 py-4 rounded-xl text-base font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-700 hover:border-orange-500/50'
                    : 'bg-white border-orange-200 text-slate-900 hover:bg-orange-50 hover:border-orange-400 shadow-sm'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-orange-600" />
                <span>View Portfolio</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={() => {
                  setActiveTab('contact');
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-5 py-4 rounded-xl text-base font-semibold border-2 transition-all flex items-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800'
                    : 'border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Send className="w-4 h-4 text-amber-600" />
                <span>Contact Me</span>
              </button>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResumeModal}
                className="px-4 py-4 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Download Misbah Noor's Resume"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Floating Stat Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Backing Frame */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-3 bg-gradient-to-tr from-orange-500/30 via-amber-500/20 to-rose-500/20 backdrop-blur-xl border-2 border-orange-200/80 dark:border-slate-700/80 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src={misbahPortrait}
                  alt="Misbah Noor - Digital Entrepreneur & Etsy Specialist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-orange-200 dark:border-slate-800 shadow-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-950 dark:text-white">
                      Misbah Noor
                    </h3>
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-bold">
                      Etsy Digital & SEO Specialist
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300 border border-orange-200">
                    Pro Verified
                  </span>
                </div>
              </div>

              {/* Floating Stat Card #1 - Top Left */}
              <div className="absolute -top-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-orange-300 dark:border-slate-700 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-slate-950 dark:text-white">
                    200+ Orders
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-200">
                    5-Star Etsy Success
                  </div>
                </div>
              </div>

              {/* Floating Stat Card #2 - Bottom Right */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-slate-700 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-slate-950 dark:text-white">
                    95% Etsy SEO
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-200">
                    Search Rank Score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MISBAH_INFO } from '../data/portfolioData';
import {
  CheckCircle2,
  Download,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  Megaphone,
  PackageCheck,
  Award,
  ArrowRight,
} from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
  onOpenResumeModal: () => void;
  onOpenHireModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  darkMode,
  onOpenResumeModal,
  onOpenHireModal,
}) => {
  const expertiseList = [
    { name: 'Etsy Digital Products', icon: ShoppingBag },
    { name: 'Etsy SEO & Listing Optimization', icon: TrendingUp },
    { name: 'Content Writing & Copywriting', icon: Sparkles },
    { name: 'Search Engine Optimization (On Page & Off Page)', icon: TrendingUp },
    { name: 'Facebook Advertising', icon: Megaphone },
    { name: 'Google Ads Campaign Management', icon: Megaphone },
    { name: 'Digital Marketing Strategies', icon: Sparkles },
    { name: 'eBay Product Management', icon: PackageCheck },
    { name: 'eBay Stock Management', icon: PackageCheck },
    { name: 'Stock Model Management', icon: PackageCheck },
    { name: 'Social Media Marketing', icon: Megaphone },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>About Misbah Noor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Meet <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">Misbah Noor</span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            Digital Entrepreneur & E-commerce Marketing Specialist dedicated to growing online stores and brands.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Summary & Mission Card */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-8 rounded-3xl border-2 relative overflow-hidden ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 shadow-2xl'
                  : 'bg-white border-orange-200 shadow-xl'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-600 to-rose-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-orange-500/20">
                  MN
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                    Misbah Noor
                  </h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-bold">
                    E-commerce Growth & SEO Strategist
                  </p>
                </div>
              </div>

              <blockquote className="text-slate-950 dark:text-slate-100 text-base leading-relaxed mb-6 font-bold border-l-4 border-orange-600 pl-4 py-1">
                "I have successfully completed more than{' '}
                <strong className="text-orange-600 dark:text-orange-400 font-black">200 Etsy orders</strong>{' '}
                and have extensive experience helping business owners rank higher, launch winning digital items, and maximize ad return."
              </blockquote>

              <p className="text-sm text-slate-900 dark:text-slate-200 leading-relaxed mb-8 font-semibold">
                My goal is to help businesses increase visibility, sales and brand growth through strategic digital solutions, detailed analytics, and stress-free store management.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={onOpenResumeModal}
                  className="px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-md flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={onOpenHireModal}
                  className={`px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
                    darkMode
                      ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                      : 'border-orange-200 text-slate-900 hover:bg-orange-50'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span>Hire Me</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Skills & Capability Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`p-8 rounded-3xl border-2 ${
                darkMode
                  ? 'bg-slate-900 border-slate-700'
                  : 'bg-white border-orange-200 shadow-xl'
              }`}
            >
              <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mb-2">
                Core Expertise & Technical Skills
              </h3>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-6">
                A multi-skilled digital professional equipped with end-to-end e-commerce solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertiseList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border-2 flex items-center gap-3 transition-colors ${
                        darkMode
                          ? 'bg-slate-950/60 border-slate-800 hover:border-orange-500/50'
                          : 'bg-orange-50/50 border-orange-100 hover:border-orange-300'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/80 flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-rose-500/10 border-2 border-orange-200 dark:border-orange-800/40 flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-orange-800 dark:text-orange-300">
                    Ready to transform your online store?
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Let's craft a custom SEO & marketing strategy for your business.
                  </div>
                </div>
                <button
                  onClick={onOpenHireModal}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-md flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

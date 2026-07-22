import React, { useState, useEffect } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <TrendingUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Specialized Skills &{' '}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
              Expertise Level
            </span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            Tested through 200+ successful client orders, e-commerce shop launches, and ad campaign optimizations.
          </p>
        </div>

        {/* Skill Progress Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILLS_DATA.map((skill, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border-2 transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 hover:border-orange-500/40'
                  : 'bg-white border-orange-200 shadow-md shadow-orange-500/5 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/80 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-base font-extrabold text-slate-950 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-black text-orange-700 dark:text-orange-300 bg-orange-100/80 dark:bg-orange-950/80 px-3 py-1 rounded-lg border border-orange-200 dark:border-orange-800">
                  {skill.percentage}%
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-900 dark:text-slate-200 mb-3 font-bold">
                {skill.description}
              </p>

              {/* Progress Bar Container */}
              <div className="w-full h-3.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-orange-600 via-amber-600 to-rose-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${skill.percentage}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-rose-500/10 border-2 border-orange-200 dark:border-orange-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-orange-600 dark:text-orange-400 flex-shrink-0" />
            <div>
              <h4 className="text-base font-black text-slate-950 dark:text-white">
                Continuous Market Learning
              </h4>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Regularly updated with Etsy algorithm changes, Google search updates, and Meta advertising tools.
              </p>
            </div>
          </div>
          <span className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-extrabold text-xs shadow-md whitespace-nowrap">
            100% Client-Driven Results
          </span>
        </div>
      </div>
    </section>
  );
};

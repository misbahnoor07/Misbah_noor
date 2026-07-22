import React from 'react';
import { MISBAH_INFO } from '../data/portfolioData';
import { PageTab } from '../types';
import {
  Sparkles,
  ArrowUp,
  Linkedin,
  ShoppingBag,
  Facebook,
  Instagram,
  Heart,
  MessageCircle,
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  darkMode: boolean;
  onOpenHireModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  darkMode,
  onOpenHireModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-900 text-white border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-amber-600 to-rose-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-orange-500/20">
                MN
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Misbah Noor
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
              Helping businesses grow through Etsy digital products, search engine optimization, paid ad campaigns, and eBay store management.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-400">
                200+ Etsy Orders Completed
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-orange-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              {['home', 'about', 'services', 'portfolio', 'case-studies', 'testimonials', 'blog', 'contact'].map(
                (tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => {
                        setActiveTab(tab as PageTab);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-orange-400 transition-colors capitalize cursor-pointer"
                    >
                      {tab.replace('-', ' ')}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-orange-400">
              Connect & Hire
            </h4>
            <p className="text-xs text-slate-300 font-semibold leading-relaxed">
              Email: {MISBAH_INFO.email}<br />
              WhatsApp: {MISBAH_INFO.whatsappDisplay}
            </p>

            <div className="flex items-center gap-2">
              <a
                href={MISBAH_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-orange-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={MISBAH_INFO.socialLinks.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-orange-600 transition-colors"
                title="Etsy Store"
              >
                <ShoppingBag className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${MISBAH_INFO.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenHireModal}
              className="w-full py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 fill-white/20" />
              <span>Hire Misbah Noor</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Misbah Noor. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Digital Growth
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

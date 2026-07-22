import React, { useState } from 'react';
import { PageTab } from '../types';
import {
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  ShoppingBag,
  Send,
  PhoneCall,
} from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenHireModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-950/90 border-slate-800 text-slate-100'
          : 'bg-white/95 border-orange-200/80 text-slate-900 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Branding */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-amber-600 to-rose-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              MN
            </div>
            <div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                Misbah Noor
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Etsy SEO Specialist</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 relative cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'text-orange-400 bg-orange-950/50 border border-orange-800/60'
                        : 'text-orange-700 bg-orange-50 border border-orange-200'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Dark mode toggle & Hire Me button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-colors border-2 cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                  : 'bg-orange-50 border-orange-200 text-slate-800 hover:bg-orange-100'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-orange-600" />}
            </button>

            {/* Hire Me CTA Button */}
            <button
              onClick={onOpenHireModal}
              className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-md shadow-orange-500/25 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white/20" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-400'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-orange-200'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? darkMode
                      ? 'bg-orange-950/60 text-orange-300 border border-orange-800/60'
                      : 'bg-orange-50 text-orange-800 border border-orange-200'
                    : darkMode
                    ? 'text-slate-300 hover:bg-slate-800'
                    : 'text-slate-800 hover:bg-orange-50/50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white/20" />
              <span>Hire Misbah Noor</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

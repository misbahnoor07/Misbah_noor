import React, { useState } from 'react';
import { MISBAH_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Phone,
  CheckCircle2,
  Linkedin,
  ShoppingBag,
  Globe,
  Facebook,
  Instagram,
} from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  darkMode,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: preselectedService || 'Etsy SEO & Listing Optimization',
    budget: '$300 - $1,000',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-200 mb-3">
            <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Start Your Project with{' '}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
              Misbah Noor
            </span>
          </h2>
          <p className="mt-3 text-base font-bold text-slate-900 dark:text-slate-200">
            Specializing in <strong className="font-extrabold text-slate-950 dark:text-white">Etsy | SEO | Digital Marketing | eCommerce</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-8 rounded-3xl border-2 ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-orange-200 shadow-xl shadow-orange-500/5'
              }`}
            >
              <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-8">
                Ready to rank #1 on Etsy or double your website sales? Reach out directly via form or WhatsApp!
              </p>

              {/* Direct Info list */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/80 flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0 border border-orange-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${MISBAH_INFO.email}`}
                      className="text-base font-extrabold text-slate-950 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {MISBAH_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Direct Chat Button */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 border border-emerald-200">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      Instant WhatsApp Consultation
                    </div>
                    <a
                      href={`https://wa.me/${MISBAH_INFO.whatsapp.replace(/\+/g, '')}?text=Hi%20Misbah,%20I'd%20like%20to%20discuss%20a%20project!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <span>Chat on WhatsApp ({MISBAH_INFO.whatsappDisplay})</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Icons Row */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-black uppercase text-slate-600 dark:text-slate-400 mb-3">
                  Connect Across Platforms
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={MISBAH_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-orange-600 hover:text-white transition-colors border border-slate-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={MISBAH_INFO.socialLinks.etsy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-orange-600 hover:text-white transition-colors border border-slate-200"
                    title="Etsy Shop"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </a>

                  <a
                    href={MISBAH_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-orange-600 hover:text-white transition-colors border border-slate-200"
                    title="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  <a
                    href={MISBAH_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-orange-600 hover:text-white transition-colors border border-slate-200"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-3xl border-2 ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-orange-200 shadow-xl shadow-orange-500/5'
              }`}
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-300">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 max-w-md mx-auto">
                    Your inquiry for <strong className="text-orange-600 dark:text-orange-400 font-extrabold">{formData.service}</strong> has been received by Misbah Noor. She will review your details and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-black text-white bg-orange-600 hover:bg-orange-700 cursor-pointer shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">
                    Send a Direct Project Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-black text-slate-800 dark:text-slate-200 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-500 ${
                          darkMode
                            ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-orange-100 text-slate-950 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-black text-slate-800 dark:text-slate-200 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@store.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-500 ${
                          darkMode
                            ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-orange-100 text-slate-950 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-black text-slate-800 dark:text-slate-200 mb-1.5">
                      Required Service Category
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-500 ${
                        darkMode
                          ? 'bg-slate-950 border-slate-700 text-white'
                          : 'bg-slate-50 border-orange-100 text-slate-950'
                      }`}
                    >
                      <option value="Etsy SEO & Listing Optimization">Etsy SEO & Listing Optimization</option>
                      <option value="Etsy Digital Products Setup">Etsy Digital Products Setup</option>
                      <option value="Search Engine Optimization (Website)">Search Engine Optimization (Website)</option>
                      <option value="Content & Blog Writing">Content & Blog Writing</option>
                      <option value="Facebook & Google Ads">Facebook & Google Ads</option>
                      <option value="eBay Store & Stock Management">eBay Store & Stock Management</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-black text-slate-800 dark:text-slate-200 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['$100 - $300', '$300 - $1,000', '$1,000+'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 rounded-xl text-xs font-black border-2 transition-colors cursor-pointer ${
                            formData.budget === b
                              ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                              : darkMode
                              ? 'bg-slate-950 border-slate-700 text-slate-300'
                              : 'bg-slate-50 border-orange-100 text-slate-800 hover:bg-orange-50'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-black text-slate-800 dark:text-slate-200 mb-1.5">
                      Project Details / Store URL
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell Misbah about your Etsy shop, products, or marketing goals..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-500 ${
                        darkMode
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-orange-100 text-slate-950 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message to Misbah Noor</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

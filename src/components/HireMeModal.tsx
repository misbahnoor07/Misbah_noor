import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, Send, ShoppingBag } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  darkMode: boolean;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  darkMode,
}) => {
  const [selectedService, setSelectedService] = useState(
    prefilledService || 'Etsy SEO & Listing Optimization'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeline, setTimeline] = useState('Urgent (1-3 days)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 border-2 shadow-2xl ${
          darkMode ? 'bg-slate-950 text-white border-slate-700' : 'bg-white text-slate-900 border-orange-200'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-orange-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black">Hiring Request Received!</h3>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Misbah Noor will review your store requirements and reach out to <strong className="text-orange-600 font-extrabold">{email}</strong> shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-black text-white bg-orange-600 hover:bg-orange-700 cursor-pointer shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-black text-orange-600 dark:text-orange-400">
              <Sparkles className="w-4 h-4 fill-orange-500/20" />
              <span>Direct Project Inquiry</span>
            </div>

            <h3 className="text-2xl font-black text-slate-950 dark:text-white">Hire Misbah Noor</h3>

            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Select your service requirement to get a custom proposal within 12 hours.
            </p>

            <div>
              <label className="block text-xs font-black mb-1 text-slate-800 dark:text-slate-200">Target Service</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className={`w-full p-3 rounded-xl border-2 text-sm font-semibold ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-orange-100 text-slate-950'
                }`}
              >
                <option value="Etsy SEO & Listing Optimization">Etsy SEO & Listing Optimization</option>
                <option value="Etsy Digital Products Setup">Etsy Digital Products Setup</option>
                <option value="On-Page & Off-Page SEO">On-Page & Off-Page SEO</option>
                <option value="Content & Product Writing">Content & Product Writing</option>
                <option value="Facebook & Google Ads Campaign">Facebook & Google Ads Campaign</option>
                <option value="eBay Store & Stock Model Management">eBay Store & Stock Model Management</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black mb-1 text-slate-800 dark:text-slate-200">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-3 rounded-xl border-2 text-sm font-medium ${
                    darkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-orange-100 text-slate-950 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-black mb-1 text-slate-800 dark:text-slate-200">Your Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. elena@store.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 rounded-xl border-2 text-sm font-medium ${
                    darkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-orange-100 text-slate-950 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black mb-1 text-slate-800 dark:text-slate-200">Project Timeline</label>
              <div className="grid grid-cols-3 gap-2">
                {['Urgent (1-3 days)', 'Standard (1-2 wks)', 'Flexible'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`py-2 rounded-xl text-xs font-black border-2 cursor-pointer ${
                      timeline === t
                        ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                        : darkMode
                        ? 'bg-slate-900 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-orange-100 text-slate-800 hover:bg-orange-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-black mb-1 text-slate-800 dark:text-slate-200">Notes / Store Link</label>
              <textarea
                rows={3}
                placeholder="Share your store URL or key goals..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={`w-full p-3 rounded-xl border-2 text-sm font-medium ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-orange-100 text-slate-950 placeholder-slate-400'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Project Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

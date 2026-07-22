import React from 'react';
import { MISBAH_INFO } from '../data/portfolioData';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a downloadable text file representing Misbah Noor's Resume
    const resumeText = `
MISBAH NOOR - RESUME
Digital Entrepreneur | Etsy SEO Specialist | E-commerce Strategist
Email: ${MISBAH_INFO.email}
Phone: ${MISBAH_INFO.whatsappDisplay}

PROFESSIONAL SUMMARY
Completed 200+ Etsy orders with 5-star ratings. Specialist in Etsy Digital Products, SEO (On-page/Off-page), Facebook/Google Ads, Content Writing, and eBay inventory management.

KEY SKILLS
- Etsy SEO & 13-Tag Listing Optimization (95%)
- Digital Marketing & Strategy (90%)
- Facebook & Instagram Ads (88%)
- Google Ads Campaign Management (85%)
- Content Writing & Product Descriptions (90%)
- eBay Product & Stock Model Management (85%)

EXPERIENCE HIGHLIGHTS
- Etsy Digital Products & SEO Strategist (5+ Years)
  Optimized 200+ shops for Page 1 Etsy search placement.
- Digital Marketing & Ads Consultant
  Managed Meta & Google search ad campaigns achieving up to 4.8x ROAS.
- E-commerce Operations Manager
  Bulk SKU uploads, variation stock modeling, and top-rated seller standing.

EDUCATION & CERTIFICATIONS
- Certification in Digital Marketing & E-Commerce Strategy
- Specialized Training in Advanced Search Engine Optimization (SEO)
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Misbah_Noor_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border-2 shadow-2xl ${
          darkMode ? 'bg-slate-950 text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-orange-200'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-orange-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Resume Header */}
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-600 via-amber-600 to-rose-500 text-white font-black flex items-center justify-center text-lg shadow-md shadow-orange-500/20">
            MN
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-950 dark:text-white">
              Misbah Noor
            </h3>
            <p className="text-xs text-orange-600 dark:text-orange-400 font-extrabold">
              Digital Entrepreneur & E-commerce Strategist
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="font-black text-slate-950 dark:text-white mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-orange-600" />
              Professional Overview
            </h4>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
              I have successfully completed more than 200 Etsy orders and have extensive experience in Etsy Digital Products, Etsy SEO, Content Writing, Search Engine Optimization, Facebook Advertising, Google Ads, eBay Management, and Social Media Marketing.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-950 dark:text-white mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              Core Competencies
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                'Etsy SEO & Listing Rank',
                'Digital Products & Templates',
                'On-Page & Off-Page SEO',
                'Facebook & Google Ads',
                'E-commerce Copywriting',
                'eBay Stock & Inventory Control',
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-900/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                  <span className="font-bold text-slate-800 dark:text-slate-200">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-950 dark:text-white mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              Education & Track Record
            </h4>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
              • 200+ Verified Orders Completed on Etsy & Digital Services<br />
              • Certified Search Engine Optimization & Paid Ads Marketer<br />
              • 5+ Years Hands-On E-commerce Scaling Experience
            </p>
          </div>
        </div>

        {/* Download Action */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Official Resume Format (.txt)</span>
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume File</span>
          </button>
        </div>
      </div>
    </div>
  );
};

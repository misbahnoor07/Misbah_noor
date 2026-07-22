import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { EtsySeoCalculator } from './components/EtsySeoCalculator';
import { WhyHireMeSection } from './components/WhyHireMeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HireMeModal } from './components/HireMeModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [hireModalOpen, setHireModalOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedServiceToHire, setSelectedServiceToHire] = useState<string>('');

  // Apply dark mode class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenHireModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceToHire(serviceName);
    }
    setHireModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-purple-500 selection:text-white ${
        darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50/50 text-slate-800'
      }`}
    >
      {/* Top Fixed Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenHireModal={() => handleOpenHireModal()}
      />

      {/* Main Page Layout */}
      <main>
        {activeTab === 'home' && (
          <>
            <Hero
              setActiveTab={setActiveTab}
              onOpenHireModal={() => handleOpenHireModal()}
              onOpenResumeModal={() => setResumeModalOpen(true)}
              darkMode={darkMode}
            />
            <StatsSection darkMode={darkMode} />
            <AboutSection
              darkMode={darkMode}
              onOpenResumeModal={() => setResumeModalOpen(true)}
              onOpenHireModal={() => handleOpenHireModal()}
            />
            <ServicesSection
              darkMode={darkMode}
              onSelectServiceToHire={(srv) => handleOpenHireModal(srv)}
            />
            <EtsySeoCalculator
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal('Etsy SEO & Listing Optimization')}
            />
            <SkillsSection darkMode={darkMode} />
            <PortfolioSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
            <CaseStudiesSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
            <WhyHireMeSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
            <TestimonialsSection darkMode={darkMode} />
            <BlogSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
            <ContactSection
              darkMode={darkMode}
              preselectedService={selectedServiceToHire}
            />
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-6">
            <AboutSection
              darkMode={darkMode}
              onOpenResumeModal={() => setResumeModalOpen(true)}
              onOpenHireModal={() => handleOpenHireModal()}
            />
            <WhyHireMeSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
            <StatsSection darkMode={darkMode} />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-6">
            <ServicesSection
              darkMode={darkMode}
              onSelectServiceToHire={(srv) => handleOpenHireModal(srv)}
            />
            <EtsySeoCalculator
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal('Etsy SEO & Listing Optimization')}
            />
            <SkillsSection darkMode={darkMode} />
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="pt-6">
            <PortfolioSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div className="pt-6">
            <CaseStudiesSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="pt-6">
            <TestimonialsSection darkMode={darkMode} />
            <WhyHireMeSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="pt-6">
            <BlogSection
              darkMode={darkMode}
              onOpenHireModal={() => handleOpenHireModal()}
            />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-6">
            <ContactSection
              darkMode={darkMode}
              preselectedService={selectedServiceToHire}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        onOpenHireModal={() => handleOpenHireModal()}
      />

      {/* Modals */}
      <HireMeModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        prefilledService={selectedServiceToHire}
        darkMode={darkMode}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}

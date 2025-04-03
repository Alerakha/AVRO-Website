'use client';
import Image from 'next/image';
import {useState} from 'react';
import RecruitmentPopup from './RecruitmentPopup';

export default function Navbar() {
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      <div className="w-full px-4 sm:px-9 py-4 left-0 top-0 fixed bg-[#101010] shadow-[0px_32px_32px_0px_rgba(29,29,29,0.45)] inline-flex justify-between items-center z-50">
        <a onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="cursor-pointer">
          <Image className="w-24 sm:w-28 h-9 sm:h-11" src="/assets/logo.png" alt="AVRO Logo" width={100} height={100} />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden sm:flex px-8 py-2 rounded-[120px] justify-start items-center gap-10">
          <a
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
            className="justify-start small-font cursor-pointer text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300"
          >
            TENTANG
          </a>
          <a
            onClick={() => scrollToSection('divisi')}
            className="justify-start small-font cursor-pointer text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300"
          >
            DIVISI
          </a>
          <a
            onClick={() => scrollToSection('roadmap')}
            className="justify-start small-font cursor-pointer text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300"
          >
            ROADMAP
          </a>
          <div className="px-2 py-1 bg-zinc-100 rounded-3xl flex justify-center cursor-pointer items-center gap-2.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]">
            <a onClick={() => setIsRecruitmentOpen(true)} className="justify-center small-font text-[#101010]">
              OPREC
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-16 left-0 w-full bg-[#101010] shadow-lg transition-transform duration-300 ease-in-out z-40 sm:hidden ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col p-4 gap-4">
          <a
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
            className="text-white small-font cursor-pointer py-2"
          >
            TENTANG
          </a>
          <a
            onClick={() => scrollToSection('divisi')}
            className="text-white small-font cursor-pointer py-2"
          >
            DIVISI
          </a>
          <a
            onClick={() => scrollToSection('roadmap')}
            className="text-white small-font cursor-pointer py-2"
          >
            ROADMAP
          </a>
          <div className="px-2 py-1 bg-zinc-100 rounded-3xl flex justify-center cursor-pointer items-center gap-2.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]">
            <a onClick={() => setIsRecruitmentOpen(true)} className="justify-center small-font text-[#101010]">
              OPREC
            </a>
          </div>
        </div>
      </div>

      <RecruitmentPopup 
        isOpen={isRecruitmentOpen}
        onClose={() => setIsRecruitmentOpen(false)}
      />
    </>
  );
} 
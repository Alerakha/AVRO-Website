'use client';
import RoadmapSection from "./components/RoadmapSection";
import Footer from "./components/Footer";
import Division from "./components/Division";
import Closing from "./components/Closing";
import Navbar from "./components/Navbar";
import RecruitmentPopup from "./components/RecruitmentPopup";
import { useState } from "react";

export default function Home() {
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="w-full pt-32 pb-24 relative inline-flex flex-col justify-center items-center gap-20 overflow-hidden bg-[#101010]">
      {/* NAVBAR */}
      <Navbar />
      {/* NAVBAR END */}
      {/* CONTENT START */}
      {/* HERO SECTION START */}
      <main id="tentang" className="px-4 sm:px-8 md:px-16 lg:px-24 inline-flex flex-col justify-center items-center gap-4 cursor-default relative">
        <div className="absolute -top-38 inset-x-0 w-full h-[640px] overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-30"
            src="/assets/output.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
        {/* <div className="w-full h-full px-8 sm:px-16 lg:px-24 top-0 absolute -z-20">
          <div className="w-full h-full flex justify-between saturate-0 opacity-15">
            <div className="flex gap-4">
              <img className="w-32 sm:w-36 lg:w-44 h-[546px] mt-10 rounded-2xl object-cover" src="/assets/sarang.jpg" />
              <img className="w-32 sm:w-36 lg:w-44 h-[600px] mt-5 rounded-2xl object-cover" src="/assets/rp_2.jpg" />
            </div>
            <div className="flex gap-4">
              <img className="w-32 sm:w-36 lg:w-44 h-[600px] mt-5 rounded-2xl object-cover" src="/assets/vtol.jpg" />
              <img className="w-32 sm:w-36 lg:w-44 h-[546px] mt-10 rounded-2xl object-cover" src="/assets/td.jpg" />
            </div>
          </div>
        </div> */}
        {/* Hero Tittle Wrapper */}
        <div className="px-4 sm:px-4 md:px-8 lg:px-24 flex flex-col justify-center items-center gap-3 relative z-10">
          <h1 className="text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-bold text-center opacity-40 text-white">
            AERIAL VEHICLE ROBO TEAM
          </h1>
          <p className="text-center small-font text-sm sm:text-base text-white">
            Polinema Aeromodelling Robotics Community
          </p>
          {/* Button */}
          <div className="h-24 self-stretch py-4 sm:px-6 md:px-14 lg:px-24 inline-flex flex-row justify-center items-center gap-4 sm:gap-8">
            <a
              onClick={() => scrollToSection('divisi')}
              className="w-auto px-6 py-4 rounded-[48px] shadow-[0px_0px_32px_0px_rgba(240,240,240,0.25)] outline-2 outline-offset-[-2px] transition-all duration-300 outline-zinc-100 text-center hero-button hover:text-[#101010] cursor-pointer text-white"
            >
              About Us
            </a>
            <a
              onClick={() => setIsRecruitmentOpen(true)}
              className="w-auto px-6 py-4 rounded-[48px] shadow-[0px_0px_32px_0px_rgba(240,240,240,0.25)] outline-2 outline-offset-[-2px] transition-all duration-300 outline-zinc-100 text-center hero-button hover:text-[#101010] cursor-pointer text-white"
            >
              Open Recruitment
            </a>
          </div>
        </div>
        <p className="px-4 sm:px-8 md:px-11 small-font text-sm sm:text-base text-white">
          AVRO merupakan singkatan dari Aerial Vehicle Robo Team, yaitu tim yang
          bertujuan melakukan riset seputar wahana terbang tanpa awak di
          Politeknik Negeri Malang. Tujuan kami adalah menciptakan generasi yang
          memahami wahana terbang tanpa awak dan mengikuti KRTI (Kontes Robot
          Terbang Indonesia) setiap tahun.
        </p>
      </main>
      {/* HERO SECTION END */}
      {/* DIVISION SECTION START */}
      <div id="divisi">
        <Division />
      </div>
      {/* DIVISION SECTION END */}
      {/* ROADMAP SECTION START */}
      <div id="roadmap">
        <RoadmapSection />
      </div>
      {/* ROADMAP SECTION END */}
      {/* CLOSING SECTION START */}
      <Closing />
      {/* CLOSING SECTION END */}
      {/* FOOTER SECTION START */}
      <Footer />
      {/* FOOTER SECTION END */}
      {/* CONTENT END */}
      <RecruitmentPopup 
        isOpen={isRecruitmentOpen} 
        onClose={() => setIsRecruitmentOpen(false)} 
      />
    </div>
  );
}

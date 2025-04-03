'use client';
import {useState, useEffect} from 'react';
import Card from "./Card";

interface DivisionCardProps {
  title: string;
  name: string;
  description: string;
  pdfPath: string;
}

const DivisionCard = ({ title, name, description, pdfPath }: DivisionCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${name.toLowerCase().replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="relative"
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
    >
      {/* Card Content */}
      <Card title={title} />

      {/* Overlay Description */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/80 rounded-3xl transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
        <p className="text-sm text-center mb-4 text-white">{description}</p>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleDownload();
          }}
          className="px-4 py-2 bg-[#f0f0f0] hover:bg-[#1d1d1d] text-[#1d1d1d] hover:text-[#f0f0f0] hover:border-2 hover:border-[#f0f0f0] text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default function Division() {
  const divisions = [
    {
      title: "RP",
      name: "Racing Plane", 
      description: "Pengembangan pesawat terbang yang fokus pada kecepatan dan akurasi manuver di jalur F.A.T",
      pdfPath: "/pdfs/Materi AVRO (RP).pdf"
    },
    {
      title: "VTOL",
      name: "Vertical Take Off Landing",
      description: "Pengembangan drone misi terbang autonomus dalam maupun luar ruangan",
      pdfPath: "/pdfs/Materi AVRO (VTOL).pdf"
    },
    {
      title: "TD",
      name: "Technology Development", 
      description: "Fokus pada inovasi, ide, penelitian, pengembangan terbaru  aeromodelling",
      pdfPath: "/pdfs/Materi AVRO (TD).pdf"
    }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-24 inline-flex flex-col justify-center items-center gap-8 bg-transparent cursor-default">
      <h2 className="H2-font text-2xl sm:text-3xl md:text-4xl text-white">OUR DIVISION</h2>
      <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
        <p className="px-4 sm:px-8 md:px-11 small-font text-xs sm:text-sm md:text-base lg:text-lg text-white">
          AVRO memiliki tiga divisi dengan pengabdian dan tujuan yang
          berbeda-beda terhadap pengembangan aeromodelling di lingkungan
          politeknik negeri malang. Hingga saat ini divisi yang dimiliki
          komunitas AVRO Polinema antara lain Divisi Racing Plane, Divisi
          Vertical Take Off Landing, dan Divisi Technology Development.
        </p>
      </div>
      {/* CARD WRAPPER START*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
        {divisions.map((division) => (
          <DivisionCard
            key={division.title}
            title={division.title}
            name={division.name}
            description={division.description}
            pdfPath={division.pdfPath}
          />
        ))}
      </div>
      {/* CARD WRAPPER END */}
    </div>
  );
}
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
      className="relative group w-full sm:w-[360px]"
      onClick={() => setIsActive(!isActive)}
      onTouchStart={(e) => {
        e.preventDefault();
        setIsActive(!isActive);
      }}
    >
      <Card title={title} />
      <div className={`absolute inset-0 w-full sm:w-[360px] rounded-[40px] bg-black/80 transition-opacity duration-300 flex flex-col justify-center items-center p-8 ${
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}>
        <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
        <p className="text-white text-center mb-6">{description}</p>
        <div className="h-24 flex flex-col items-center">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="px-6 py-4 my-4 rounded-[48px] shadow-[0px_0px_32px_0px_rgba(240,240,240,0.25)] outline-2 outline-offset-[-2px] transition-all duration-300 outline-zinc-100 text-center hero-button hover:text-[#101010] cursor-pointer text-white"
          >
            Lihat Detail
          </button>
        </div>
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
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-24 inline-flex flex-col justify-center items-center gap-8 bg-transparent cursor-default">
      <h2 className="H2-font text-2xl sm:text-3xl md:text-4xl text-white text-center">OUR DIVISION</h2>
      <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
        <p className="px-4 sm:px-8 md:px-11 small-font text-xs sm:text-sm md:text-base lg:text-lg text-white text-center">
          AVRO memiliki tiga divisi dengan pengabdian dan tujuan yang
          berbeda-beda terhadap pengembangan aeromodelling di lingkungan
          politeknik negeri malang. Hingga saat ini divisi yang dimiliki
          komunitas AVRO Polinema antara lain Divisi Racing Plane, Divisi
          Vertical Take Off Landing, dan Divisi Technology Development.
        </p>
      </div>
      {/* CARD WRAPPER START*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
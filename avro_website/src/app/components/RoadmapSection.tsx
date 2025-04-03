import Image from 'next/image';

export default function RoadmapSection() {
  return (
    <section className="w-full px-8 sm:px-16 lg:px-24 pt-56 pb-80 bg-gradient-to-b from-dark via-[#f0f0f0] to-dark text-white flex flex-col items-center gap-8 relative">
      <Image
        className="absolute left-1/2 -translate-x-1/2 h-full w-full object-contain opacity-20 mix-blend-color-burn"
        src="/assets/Dewoitine_D.551.png"
        alt="Dewoitine D.551"
        width={1000}
        height={1000}
      />
      <h2 className="H2-font relative text-center text-[#242424]">
        OUR ROADMAP CYCLE
      </h2>
      <p className="px-11 small-font text-left text-[#242424]">
        Agenda utama AVRO adalah mengikuti lomba KRTI (Kontes Robot Terbang
        Indonesia) yang diadakan setiap tahun oleh Balai Pengembangan Talenta
        Indonesia (BPTI), Pusat Prestasi Nasional, Sekretariat Jenderal
        Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.
      </p>

      <div className="flex flex-col text-[#242424] items-start gap-8">
        <div className="text-start">
          <h2 className="H1-font">RISET</h2>
          <p className="text-font">Tahap awal dalam pengembangan wahana terbang dimulai dengan riset mendalam dari berbagai aspek.
              Proses ini menjadi dasar utama dalam pengambilan keputusan serta perancangan wahana yang optimal.</p>
        </div>
        <div className="text-start">
          <h2 className="H1-font">CRAFTING</h2>
          <p className="text-font">Setelah riset selesai, tim mulai merancang dan membangun wahana terbang dengan mempertimbangkan material,
              desain, serta aspek teknis lainnya guna memastikan performa yang maksimal.</p>
        </div>
        <div className="text-start">
          <h2 className="H1-font">TEST FLIGHT</h2>
          <p className="text-font">Tahap uji terbang menjadi bagian penting dalam menguji hasil riset dan pengembangan.
              Proses ini bertujuan untuk mengevaluasi performa wahana serta melakukan penyempurnaan sebelum kompetisi.</p>
        </div>
        <div className="text-start">
          <h2 className="H1-font">KOMPETISI</h2>
          <p className="text-font">Setelah melalui serangkaian evaluasi dan penyempurnaan, tim berpartisipasi dalam Kontes Robot Terbang Indonesia
              (KRTI) yang diselenggarakan oleh Pusat Prestasi Nasional (Puspresnas) di bawah naungan Kemendikbudristek, dengan tujuan meraih hasil terbaik.</p>
        </div>
      </div>
    </section>
  );
}

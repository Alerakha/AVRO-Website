import Image from 'next/image';

export default function Closing() {
  return (
    <div className="self-stretch px-10 py-24 relative inline-flex justify-center items-center gap-3 cursor-default">
      <p className="absolute text-[40px] sm:text-[64px] md:text-[72px] lg:text-[80px] justify-center font-bold italic opacity-40">AVRO ELJOSTO</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <Image 
          className="w-[542px] h-96 object-cover"
          src="/assets/lanud.jpg"
          alt="Lanud Soekarno Hatta Malang"
          width={542}
          height={384}
          priority
        />
        <p className="justify-center small-font">Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</p>
      </div>
    </div>
  );
}   
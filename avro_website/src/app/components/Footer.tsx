export default function Footer() {
  return (
    <div className="w-full px-2 sm:px-8 md:px-10 py-2 bottom-0 absolute flex flex-col justify-center items-center gap-2.5 cursor-default">
      <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-2.5">
        <div className="w-full sm:flex-1 text-center justify-start text-[10px] sm:text-xs">
          avropolinema@gmail.com
        </div>
        <div className="w-full sm:flex-1 text-center justify-start text-[10px] sm:text-xs">
          AVRO POLINEMA All Right Reserved
        </div>
        <div className="w-full sm:flex-1 flex justify-center items-center gap-2">
          <img
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-md"
            src="/assets/instagram.png"
          />
          <a 
            href="https://www.instagram.com/avro_polinema"
            className="text-center justify-start text-[10px] sm:text-xs"
          >
            Instagram AVRO
          </a>
        </div>
      </div>
      <div className="w-full px-2 sm:px-6 bg-zinc-100 rounded-xl flex justify-center items-center gap-2.5 overflow-hidden">
        <p className="py-2 text-center text-indigo-900 text-[10px] sm:text-xs font-normal font-['Montserrat']">
          Website ini masih dalam pengembangan tim AVRO, mohon maklum jika menemukan bug atau error. Versi mobile juga masih dikembangkan.
        </p>
      </div>
    </div>
  );
}

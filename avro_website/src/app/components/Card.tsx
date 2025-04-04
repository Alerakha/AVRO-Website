const Card = ({ title }: { title: string }) => {
  return (
    <div className="w-full sm:w-[360px] h-[300px] sm:h-[436px] relative rounded-[40px] overflow-hidden border border-zinc-100 flex flex-col justify-center items-center bg-transparent">
      {/* Background Text Besar */}
      <div className="absolute huge-font font-bold text-[#1d1d1d] break-all text-center px-4">{title}</div>

      {/* Foreground Text */}
      <div className="relative big-font text-center px-4">{title}</div>
    </div>
  );
};

export default Card;

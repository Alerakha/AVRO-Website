const Card = ({ title }: { title: string }) => {
  return (
    <div className="w-[360px] h-[436px] relative rounded-[40px] overflow-hidden border border-zinc-100 flex flex-col justify-center items-center bg-transparent">
      {/* Background Text Besar */}
      <div className="absolute huge-font font-bold text-[#1d1d1d] break-all text-center px-4 w-full h-full flex items-center justify-center">
        <span className="max-w-full">{title}</span>
      </div>

      {/* Foreground Text */}
      <div className="relative big-font text-center px-4 w-full">
        <span className="max-w-full">{title}</span>
      </div>
    </div>
  );
};

export default Card;

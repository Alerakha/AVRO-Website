const Card = ({ title }: { title: string }) => {
  return (
    <div className="w-[360] h-[436] relative rounded-[40px] overflow-hidden border border-zinc-100 flex flex-col justify-center items-center">
      {/* Background Text Besar */}
      <div className="absolute huge-font font-bold text-[#1d1d1d] break-all">{title}</div>

      {/* Foreground Text */}
      <div className="relative big-font">{title}</div>
    </div>
  );
};

export default Card;

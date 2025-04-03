'use client';

interface RecruitmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecruitmentPopup({ isOpen, onClose }: RecruitmentPopupProps) {
  return (
    <div 
      className={`fixed inset-0 bg-zinc-100/40 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`bg-[#f0f0f0] rounded-3xl p-8 max-w-md w-full mx-4 relative transform transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#101010] hover:text-gray-600 transition-colors duration-200 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-[#101010] text-2xl font-bold mb-4">Open Recruitment</h2>
        <p className="text-[#101010]">
          Maaf, pendaftaran Open Recruitment belum dibuka. Cek nanti ya lur.
        </p>
      </div>
    </div>
  );
} 
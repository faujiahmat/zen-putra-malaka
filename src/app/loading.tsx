import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Logo bouncing */}
        <Image
          src="/load.svg" // ganti dengan logo kamu
          alt="loading"
          className=" animate-bounce"
          width={100}
          height={100}
        />
        <p className="text-[#2d527c] text-sm font-medium animate-pulse">
          Memuat halaman...
        </p>
      </div>
    </div>
  );
}

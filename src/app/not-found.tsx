import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100dvh-56px)] md:min-h-[calc(100vh-68px)]  items-center justify-center bg-white px-4">
      <div className="text-center max-w-md space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold text-blue-primary">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Maaf, halaman yang kamu cari tidak tersedia atau mungkin sudah
          dipindahkan.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-primary hover:bg-blue-700 transition-colors text-white text-sm md:text-base font-medium px-6 py-3 rounded-lg shadow-md"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}

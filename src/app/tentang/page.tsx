export const metadata = {
  title: 'Tentang - Zen Putra Malaka',
  description:
    'Pelajari lebih lanjut tentang Zen Putra Malaka, tim ahli kami, dan pengalaman kami di bidang instalasi listrik dan galian.',
};

export default function TentangPage() {
  return (
    <div className="max-w-screen-2xl mx-auto py-12 space-y-16">
      <div className="px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-tight md:mb-12 text-center">
          Tentang Kami
        </h1>
        <section className={`w-full   flex justify-center items-center`}>
          <div
            className={`w-full md:px-4  py-8 md:py-0 gap-8 md:gap-0 max-w-screen-xl flex flex-col md:flex-row  `}
          >
            <div className="w-full h-full flex flex-col gap-4 md:gap-2 lg:gap-8 md:pr-8">
              <h3 className="text-blue-primary text-xs lg:text-sm max-w-full">
                SIAPA KAMI
              </h3>
              <h2 className="font-bold text-2xl lg:text-3xl">
                Mitra Terpercaya untuk Pekerjaan Listrik dan Konstruksi Kabel
                Galian
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
                PT. Zen Putra Malaka adalah perusahaan yang bergerak di bidang
                konstruksi kelistrikan, khususnya dalam pemasangan kabel galian
                bawah tanah. Berdiri sejak satu tahun lalu, kami telah
                berkomitmen untuk menyediakan layanan profesional dan
                berkualitas tinggi dalam infrastruktur energi. <br /> <br />{' '}
                Berbasis di Provinsi Aceh, perusahaan kami secara aktif
                beroperasi di wilayah Aceh untuk mendukung pengembangan sistem
                kelistrikan regional. Dengan memahami kebutuhan lokal dan medan
                yang menantang, kami menghadirkan solusi konstruksi yang andal
                dan sesuai standar keselamatan.
              </p>
            </div>
            <div className="w-full h-60 md:h-auto">
              <div className="w-full h-full rounded-xs bg-[url('/bg-second.webp')] bg-no-repeat bg-cover bg-center   "></div>
            </div>
          </div>
        </section>
      </div>

      <div className=" py-10 lg:py-16 px-4 lg:px-8 bg-bg-pattern text-slate-200">
        <h3 className="text-background text-center text-xs lg:text-sm max-w-full tracking-widest ">
          VISI MISI
        </h3>

        <h2 className="text-3xl xl:text-4xl font-bold text-center my-6">
          Visi dan Misi Kami
        </h2>

        <p className="max-w-3xl mx-auto text-center text-slate-300 text-xs md:text-lg px-4 mb-10">
          Kami adalah perusahaan konstruksi yang berfokus pada solusi
          kelistrikan bawah tanah yang inovatif, aman, dan efisien. Dengan
          pengalaman yang mumpuni, kami telah menjadi mitra terpercaya dalam
          mendukung infrastruktur listrik regional.
        </p>
        <section className="grid gap-6 xl:gap-0 md:grid-cols-2 justify-items-center">
          <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-md p-8 hover:scale-[1.02] transition-transform max-w-xl">
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
              Visi
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Menjadi perusahaan terdepan dalam bidang konstruksi kelistrikan
              bawah tanah yang inovatif, andal, dan ramah lingkungan di
              Indonesia.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-md p-8 hover:scale-[1.02] transition-transform max-w-xl">
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
              Misi
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-3 text-sm">
              <li>Mengutamakan keselamatan dan standar kerja tertinggi.</li>
              <li>
                Memberikan solusi efisien dan tepat waktu untuk setiap proyek.
              </li>
              <li>
                Berinovasi dalam teknologi dan metode konstruksi bawah tanah.
              </li>
              <li>
                Meningkatkan kompetensi tim melalui pelatihan berkelanjutan.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="px-4 md:px-6 lg:px-8">
        <section>
          <h3 className=" text-blue-primary text-center text-xs lg:text-sm max-w-full tracking-widest ">
            NILAI
          </h3>
          <h2 className="text-3xl xl:text-4xl font-semibold text-center text-gray-800 my-6">
            Nilai-Nilai Kami
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Integritas',
                desc: 'Kami menjunjung tinggi kejujuran dan tanggung jawab dalam setiap aspek pekerjaan.',
              },
              {
                title: 'Profesionalisme',
                desc: 'Menyediakan layanan dengan standar tinggi dan dedikasi penuh.',
              },
              {
                title: 'Keselamatan',
                desc: 'Keselamatan kerja adalah prioritas utama kami dalam setiap proyek.',
              },
              {
                title: 'Inovasi',
                desc: 'Terus mencari solusi baru untuk meningkatkan efisiensi dan kualitas.',
              },
              {
                title: 'Kolaborasi',
                desc: 'Membangun hubungan yang kuat dengan klien dan mitra kerja.',
              },
              {
                title: 'Keberlanjutan',
                desc: 'Berkomitmen pada praktik kerja yang berkelanjutan dan ramah lingkungan.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-lg p-5 h-full"
                style={{
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="px-4 md:px-6 lg:px-8">
        <section className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ingin bekerja sama dengan kami?
          </h2>
          <p className="text-gray-600 mb-4">
            Hubungi kami sekarang untuk konsultasi atau informasi lebih lanjut
            terkait proyek Anda.
          </p>
          <a
            href="/kontak"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Hubungi Kami
          </a>
        </section>
      </div>
    </div>
  );
}

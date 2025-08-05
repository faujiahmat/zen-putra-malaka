import ContactFormWrapper from '@/components/organisms/ContactFormWrapper';

export const metadata = {
  title: 'Kontak - Zen Putra Malaka',
  description:
    'Hubungi Zen Putra Malaka untuk konsultasi atau kerja sama terkait instalasi listrik dan proyek galian.',
};

export default function KontakPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 mt-10 md:mt-0 ">
      <section className="text-center mb-10 px-4 sm:px-6 lg:px- ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
          Ada yang ingin disampaikan?
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Kami senang mendengar dari Anda. Baik pertanyaan, saran, atau sekadar
          menyapa — kirim pesan Anda melalui formulir di bawah ini, dan kami
          akan segera merespons.
        </p>
      </section>

      <section
        className="flex flex-col md:flex-row  gap-4 mb-8 rounded-lg overflow-hidden shadow-lg md:h-auto "
        style={{
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="bg-[url(/tiang-listrik.webp)] bg-cover bg-center w-full h-40 md:h-auto md:w-1/2 xl:w-7/12 md:aspect-auto"></div>
        <ContactFormWrapper />
      </section>
    </div>
  );
}

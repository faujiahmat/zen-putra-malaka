import Image from 'next/image';

export function Footer() {
  return (
    <div className="bg-bg-pattern text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Lokasi Kantor 1 */}
        <section>
          <h5 className="text-lg font-semibold mb-4">Kantor Pusat</h5>
          <div className="flex items-center py-1 mb-4">
            <Image
              src="/icon-location.svg"
              alt="Lokasi"
              width={25}
              height={25}
              priority={false}
              className="shrink-0"
            />

            <p className="ml-2 text-sm ">
              Jl. Mesjid Al Iftah Lor.3, Kota. Langsa, Aceh
            </p>
          </div>
          <div className="w-full h-[200px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.60799470865845!2d97.96696460786532!3d4.461606112015069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1753991213772!5m2!1sid!2sid" // Ganti dengan embed link kantor pusat
              width="100%"
              height="100%"
              className="border-0 block  w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Lokasi Kantor 2 */}
        <section>
          <h5 className="text-lg font-semibold mb-4">Kantor Cabang</h5>
          <div className="flex items-center py-1 mb-4">
            <Image
              src="/icon-location.svg"
              alt="Lokasi"
              width={25}
              height={25}
              priority={false}
              className="shrink-0"
            />

            <p className="ml-2 text-sm ">
              Jl. Tgk. H. Bakabar, Kota. Banda Aceh, Aceh
            </p>
          </div>
          <div className="w-full h-[200px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.8050884604398!2d95.30058406953212!3d5.534299334506647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403a063e1e0699%3A0x9bb2d795d0b53e8b!2sJl.%20H.%20Abu%20Bakar%2C%20Lamtemen%20Tim.%2C%20Kec.%20Jaya%20Baru%2C%20Kota%20Banda%20Aceh%2C%20Aceh%2023232!5e0!3m2!1sid!2sid!4v1753991459151!5m2!1sid!2sid" // Ganti dengan embed link kantor pusat
              width="100%"
              height="100%"
              className="border-0 block  w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Kontak dan Info */}
        <section className="flex flex-col justify-start">
          <h5 className="text-lg font-semibold mb-4">Kontak Kami</h5>

          <p className="mb-2 text-sm ">☎️ +62 812-3456-7890</p>
          <p className="mb-2 text-sm">📧 info@perusahaan.com</p>
          <p className="mt-6 text-sm text-gray-300">
            Kami siap membantu Anda dengan solusi terbaik di bidang listrik dan
            kabel galian.
          </p>
        </section>
      </div>

      <section className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        Copyright &copy; {new Date().getFullYear()} PT. Zen Putra Malaka. All
        rights reserved.
      </section>
    </div>
  );
}

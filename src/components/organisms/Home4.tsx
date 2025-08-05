import Image from 'next/image';

export function Home4() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto  py-10 md:py-20  bg-bg-pattern text-slate-200">
      <div className="w-full max-w-screen-xl px-4 md:px-12 mx-auto">
        <section className="flex flex-col justify-center items-center text-center gap-7">
          <h3 className="text-xs md:text-sm xl:text-base">
            MENGAPA MEMILIH KAMI
          </h3>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold max-w-2xl">
            Profesional. Terpercaya. Dapat Diandalkan
          </h2>
          <p className="text-xs md:text-sm xl:text-lg">
            Komitmen kami adalah memberikan hasil terbaik melalui tenaga ahli,
            peralatan yang memadai, dan standar keselamatan yang tinggi dalam
            setiap proyek instalasi kabel dan kelistrikan.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-4 lg:gap-10 mt-10 xl:mt-20">
          <section className="flex md:flex-col items-center gap-4 xl:gap-6 md:text-center text-pretty">
            <div className="relative w-20 h-20 sm:w-12 sm:h-12 md:w-18 md:h-18 xl:w-24 xl:h-24 aspect-square">
              <Image
                src="/worker-white.png"
                alt="search"
                fill
                className="object-fill"
              />
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg xl:text-xl mb-1 md:mb-2 ">
                Tenaga Kerja
              </h4>
              <p className="text-xs xl:text-sm">
                Tim kami terdiri dari teknisi berpengalaman yang terlatih untuk
                menangani berbagai tantangan di lapangan dengan efisien dan
                aman.
              </p>
            </div>
          </section>
          <section className="flex md:flex-col items-center gap-4 xl:gap-6 md:text-center text-pretty">
            <div className="relative w-20 h-20 sm:w-12 sm:h-12 md:w-18 md:h-18 xl:w-24 xl:h-24 aspect-square">
              <Image
                src="/heavy-equipment.png"
                alt="heavy equipment"
                fill
                className="object-fill"
              />
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg xl:text-xl mb-1 md:mb-2 ">
                Alat Operational
              </h4>
              <p className="text-xs xl:text-sm">
                Kami menggunakan peralatan modern dan lengkap untuk memastikan
                setiap pekerjaan berlangsung cepat, akurat, dan sesuai prosedur.
              </p>
            </div>
          </section>
          <section className="flex md:flex-col items-center gap-4 xl:gap-6 md:text-center text-pretty">
            <div className="relative w-20 h-20 sm:w-12 sm:h-12 md:w-18 md:h-18 xl:w-24 xl:h-24 aspect-square">
              <Image src="/safe.png" alt="safe" fill className="object-fill" />
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg xl:text-xl mb-1 md:mb-2">
                Keselamatan Kerja
              </h4>
              <p className="text-xs xl:text-sms">
                Protokol keselamatan selalu menjadi prioritas utama kami untuk
                melindungi seluruh tim dan lingkungan sekitar proyek.
              </p>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

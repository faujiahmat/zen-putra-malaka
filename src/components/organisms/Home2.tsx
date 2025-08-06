import Image from 'next/image';

export function Home2() {
  return (
    <section className="w-full flex justify-center ">
      <div className="w-full -mt-10 md:-mt-12 lg:-mt-14 px-4 lg:px-12 max-w-screen-xl relative z-30">
        <div className="bg-background w-full rounded-xs overflow-hidden flex flex-col md:flex-row shadow-md gap-4 md:gap-0 lg:gap-6">
          {[
            {
              src: '/best.png',
              alt: 'Hasil Terbaik',
              title: 'Hasil Terbaik',
              desc: 'Kami selalu mengutamakan hasil kerja presisi dan standar tinggi dalam setiap proyek.',
            },
            {
              src: '/worker.png',
              alt: 'Kinerja Tinggi',
              title: 'Kinerja Tinggi',
              desc: 'Tim kami bekerja efisien dan tepat waktu tanpa mengorbankan kualitas.',
            },
            {
              src: '/experience.png',
              alt: 'Berpengalaman',
              title: 'Berpengalaman',
              desc: 'Berpengalaman dalam instalasi kabel galian dan listrik, kami memahami kebutuhan proyek Anda.',
              highlight: true,
            },
          ].map(({ src, alt, title, desc, highlight }, index) => (
            <div
              key={index}
              className={`${
                highlight ? 'bg-blue-primary text-background' : ''
              } flex flex-1  md:flex-col xl:flex-row items-center p-4 lg:px-8 gap-2`}
            >
              <div className="relative w-20 md:w-16 xl:w-26 aspect-square">
                <Image src={src} alt={alt} fill />
              </div>
              <div className="md:text-center xl:text-left min-w-0">
                <h2 className="font-semibold text-sm md:text-base lg:text-xl mt-2 xl:mt-0">
                  {title}
                </h2>
                <p className="text-[10px] md:text-xs overflow-hidden text-ellipsis ">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export const metadata = {
  title: 'Dokumentasi - Zen Putra Malaka',
  description:
    'Dokumentasi proyek Zen Putra Malaka termasuk foto, laporan, dan detail teknis dari pekerjaan yang telah diselesaikan.',
};

const images = [
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361550/WhatsApp_Image_2025-07-17_at_23.55.59_81f5a790_lx1hhd.jpg',
    alt: 'Proyek 1',
    width: 800,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361438/WhatsApp_Image_2025-07-17_at_23.55.58_604ad765_kmzilo.jpg',
    alt: 'Proyek 2',
    width: 600,
    height: 900,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361391/WhatsApp_Image_2025-07-17_at_23.55.51_4b7fafa6_dfztqo.jpg',
    alt: 'Proyek 3',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361337/WhatsApp_Image_2025-07-17_at_23.56.09_7daaff3a_kzgi0o.jpg',
    alt: 'Proyek 4',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361321/WhatsApp_Image_2025-07-17_at_23.56.07_b15bdea6_uguxnh.jpg',
    alt: 'Proyek 5',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361251/WhatsApp_Image_2025-07-17_at_23.56.17_8fe76711_xyrvmn.jpg',
    alt: 'Proyek 6',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361192/WhatsApp_Image_2025-07-17_at_23.56.24_20e34c15_quzbiq.jpg',
    alt: 'Proyek 7',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754361158/WhatsApp_Image_2025-07-17_at_23.56.25_99b581f1_pjzhw5.jpg',
    alt: 'Proyek 8',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360918/WhatsApp_Image_2025-07-17_at_23.56.23_a0fd5c6f_gplbue.jpg',
    alt: 'Proyek 9',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360837/WhatsApp_Image_2025-07-17_at_23.56.13_07f154e5_iikj0r.jpg',
    alt: 'Proyek 10',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360730/WhatsApp_Image_2025-07-17_at_23.56.00_d9752507_mfysug.jpg',
    alt: 'Proyek 11',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360700/WhatsApp_Image_2025-07-17_at_23.56.00_aba59864_etv1ar.jpg',
    alt: 'Proyek 12',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360620/WhatsApp_Image_2025-07-17_at_23.55.49_9c6718a3_r1myp0.jpg',
    alt: 'Proyek 13',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360555/WhatsApp_Image_2025-07-17_at_23.55.41_f332924f_joxg4p.jpg',
    alt: 'Proyek 14',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360502/WhatsApp_Image_2025-07-17_at_23.55.39_ff0fe193_brwbnm.jpg',
    alt: 'Proyek 15',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360444/WhatsApp_Image_2025-07-17_at_23.39.40_b984f7cb_zghdza.jpg',
    alt: 'Proyek 16',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360406/WhatsApp_Image_2025-07-17_at_23.36.45_7c10b3e3_oehy1x.jpg',
    alt: 'Proyek 17',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360365/WhatsApp_Image_2025-07-17_at_23.33.47_d7a84ee4_hp6w9z.jpg',
    alt: 'Proyek 18',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360322/WhatsApp_Image_2025-07-17_at_23.26.43_f325ba16_aa2qnz.jpg',
    alt: 'Proyek 19',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754360182/WhatsApp_Image_2025-07-17_at_23.25.34_4645ae32_wsxeky.jpg',
    alt: 'Proyek 20',
    width: 1200,
    height: 800,
  },
];

export default function DokumentasiPage() {
  return (
    <section className="min-h-screen px-4 lg:px-12 py-10 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-tight text-center">
        Dokumentasi
      </h1>
      <p className="text-center text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto mb-8 text-pretty">
        Dokumentasi ini menampilkan berbagai proyek instalasi kelistrikan,
        khususnya pekerjaan kabel galian bawah tanah, yang telah berhasil kami
        selesaikan. Setiap gambar merupakan bukti nyata dari dedikasi kami dalam
        menghadirkan hasil kerja berkualitas tinggi, menjaga standar keselamatan
        yang ketat, serta menjalankan setiap proyek dengan profesionalisme
        terbaik.
      </p>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

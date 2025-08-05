import Image from 'next/image';
import * as React from 'react';

export const metadata = {
  title: 'Proyek - Zen Putra Malaka',
  description:
    'Lihat portofolio proyek kami di berbagai sektor, dari industri hingga komersial.',
};

type Project = {
  image: string;
  title: string;
  dateRange: string;
  description: string;
};

const projects: Project[] = [
  {
    image: '/image1.jpg',
    title: 'Proyek Instalasi Kabel Bawah Tanah',
    dateRange: 'Januari 2024 - Maret 2024',
    description:
      'Instalasi jaringan kabel bawah tanah di kawasan industri untuk mendukung kestabilan distribusi listrik.',
  },
  {
    image: '/image2.jpg',
    title: 'Penggalian dan Penanaman Kabel Tegangan Tinggi',
    dateRange: 'April 2024 - Juni 2024',
    description:
      'Penggalian jalur dan penanaman kabel tegangan tinggi di sepanjang jalan utama kota.',
  },
  {
    image: '/image3.jpg',
    title: 'Proyek Pembangunan Gardu Distribusi',
    dateRange: 'Juli 2024 - Agustus 2024',
    description:
      'Pembangunan gardu distribusi untuk meningkatkan efisiensi dan jangkauan daya listrik ke daerah pinggiran.',
  },
  {
    image: '/image4.jpg',
    title: 'Rehabilitasi Jaringan Kabel Eksisting',
    dateRange: 'September 2024 - Oktober 2024',
    description:
      'Peremajaan dan penataan ulang kabel bawah tanah eksisting untuk meningkatkan keandalan sistem distribusi listrik di area pemukiman padat.',
  },
  {
    image: '/image5.jpg',
    title: 'Ekspansi Jaringan Listrik untuk Kawasan Komersial',
    dateRange: 'November 2024 - Desember 2024',
    description:
      'Pengembangan jalur distribusi listrik bawah tanah baru untuk mendukung pertumbuhan kawasan komersial dan perkantoran.',
  },
];

export default function ProjectsPage() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 md:px-12 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold  leading-tight text-center mb-8">
        Proyek Kami
      </h1>
      <p className="text-center text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Berpengalaman dalam menangani proyek-proyek kelistrikan, khususnya
        instalasi kabel galian bawah tanah, kami berkomitmen menghadirkan solusi
        infrastruktur yang andal dan aman. Di bawah ini adalah beberapa proyek
        unggulan yang mencerminkan dedikasi dan profesionalisme tim kami.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <span className="text-sm text-gray-500 mb-2">
                {project.dateRange}
              </span>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

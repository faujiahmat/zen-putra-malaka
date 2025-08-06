'use client';

'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Home1() {
  const images = ['/bg-main1.webp', '/bg-main2.webp', '/bg-main3.webp'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 5000; // waktu tampil tiap gambar (ms)
  const fadeMs = 1000; // durasi fade (ms) - harus <= duration

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, duration);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className=" w-full ">
      <div className="relative w-full h-[500px] md:h-96 lg:h-[731px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {images.map((src, i) => (
            <div
              key={src}
              // setiap gambar absolute memenuhi area
              className={`
                absolute inset-0 transition-opacity duration-[${fadeMs}ms] ease-in-out
                ${i === currentIndex ? 'opacity-100' : 'opacity-0'}
              `}
              aria-hidden={i === currentIndex ? 'false' : 'true'}
            >
              <Image
                src={src}
                alt={`Background ${i + 1}`}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                // untuk performa: hanya gambar pertama prioritas
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute  z-10 bg-linear-to-r from-black/75 from-10% to-black/0 to-50% lg:to-60% w-full h-full flex justify-center items-center py-12 md:py-0">
          <div className="max-w-screen-xl w-full px-4 md:px-12 py-8 md:py-0 flex flex-col items-center md:items-start gap-7 md:gap-2 lg:gap-4 text-center md:text-left text-background">
            <h3 className="text-xs lg:text-sm ">
              WELCOME TO PT. ZEN PUTRA MALAKA
            </h3>
            <h1 className="md:max-w-md lg:max-w-2xl text-3xl md:text-4xl lg:text-6xl font-semibold leading-none">
              Profesional, Terpercaya, dan Andal
            </h1>
            <p className="text-xs lg:text-sm md:max-w-sm lg:max-w-lg text-pretty">
              Kami melayani kebutuhan berbagai sektor, termasuk infrastruktur
              perkotaan, kawasan industri, dan proyek kelistrikan skala khusus
              dengan solusi instalasi kabel bawah tanah yang andal dan aman.
            </p>
            <Link href="#tentang">
              <Button className="bg-blue-primary hover:bg-blue-900 cursor-pointer px-3 lg:px-4 py-2  lg:py-2 w-fit text-xs lg:text-sm rounded-xs">
                Selengkapnya
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

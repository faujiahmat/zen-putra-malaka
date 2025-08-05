'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function MitraSection() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`w-full  md:h-96 lg:h-[calc(100vh-68px)] max-h-[731px] flex justify-center items-center`}
      id="tentang"
    >
      <div
        ref={divRef}
        className={`w-full  md:h-60 lg:h-80 px-4 md:px-12 py-8 md:py-0 gap-8 md:gap-0 max-w-screen-xl flex flex-col md:flex-row  transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <div className="w-full h-full flex flex-col gap-4 md:gap-2 lg:gap-4 md:pr-8">
          <h3 className="text-blue-primary text-xs lg:text-sm max-w-full">
            SIAPA KAMI
          </h3>
          <h2 className="font-bold text-xl lg:text-2xl">
            Mitra Terpercaya untuk Pekerjaan Listrik dan Konstruksi Kabel Galian
          </h2>
          <p className="text-xs lg:text-sm  md:line-clamp-5 lg:line-clamp-none">
            PT. Zen Putra Malaka adalah perusahaan yang bergerak di bidang
            konstruksi kelistrikan, khususnya dalam pemasangan kabel galian
            bawah tanah. Berdiri sejak satu tahun lalu, kami telah berkomitmen
            untuk menyediakan layanan profesional dan berkualitas tinggi dalam
            infrastruktur energi.
          </p>
          <Link href="/tentang">
            <Button className="bg-blue-primary hover:bg-blue-900 cursor-pointer text-background px-3 lg:px-4 py-2 lg:py-2 w-fit text-xs lg:text-sm rounded-xs">
              Selengkapnya
            </Button>
          </Link>
        </div>
        <div className="w-full h-60 md:h-full">
          <div className="w-full h-full rounded-xs bg-[url('/bg-second.webp')] bg-no-repeat bg-cover bg-center bg-origin-content relative "></div>
        </div>
      </div>
    </section>
  );
}

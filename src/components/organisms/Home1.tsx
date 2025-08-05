import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';

export function Home1() {
  return (
    <section className=" w-full ">
      <div className="relative w-full h-96 md:h-96 lg:h-[731px]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/bg-main.webp"
            alt="Hero background"
            priority
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className=" pointer-events-none"
          />
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

import Image from 'next/image';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Home5() {
  const data = {
    image: [
      '/image1.jpg',
      '/image2.jpg',
      '/image3.jpg',
      '/image4.jpg',
      '/image5.jpg',
    ],
    description: [
      'Proyek Instalasi Kabel Bawah Tanah',
      'Penggalian dan Penanaman Kabel Tegangan Tinggi',
      'Proyek Pembangunan Gardu Distribusi',
      'Rehabilitasi Jaringan Kabel Eksisting',
      'Ekspansi Jaringan Listrik untuk Kawasan Komersial',
    ],
  };

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-12 py-10 md:py-20 flex flex-col gap-4 lg:gap-8 text-left md:text-center">
      <h3 className="text-blue-primary text-xs lg:text-lg ">PROYEK</h3>
      <h2 className="font-bold text-xl lg:text-3xl max-w-3xl mx-auto">
        Kumpulan Proyek yang Mencerminkan Pengalaman dan Dedikasi Kami
      </h2>
      <div className="flex items-center justify-center ">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full md:w-11/12"
        >
          <CarouselContent>
            {Array.from({ length: data.image.length }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card className="overflow-hidden p-2 md:p-4 h-full">
                    <CardContent>
                      <div className="h-40 md:h-48  rounded-t-lg overflow-hidden">
                        <Image
                          src={data.image[index]}
                          alt="Proyek 1"
                          className="w-full h-full object-cover"
                          width={400}
                          height={200}
                        />
                      </div>
                      <p className="text-lg font-semibold mt-2">
                        {data.description[index]}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Link href="/proyek">
        <Button className="bg-blue-primary hover:bg-blue-900 cursor-pointer px-3 lg:px-4 py-2  lg:py-2 w-fit text-xs lg:text-sm rounded text-background md:mx-auto">
          Selengkapnya
        </Button>
      </Link>
    </section>
  );
}

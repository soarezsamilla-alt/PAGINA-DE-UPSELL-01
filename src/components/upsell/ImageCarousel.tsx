'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const carouselImages = PlaceHolderImages.filter(img => img.id.startsWith('carousel-'));

export function ImageCarousel() {
  if (carouselImages.length === 0) {
    return null;
  }
    
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
        {carouselImages.map((image) => (
          <CarouselItem key={image.id}>
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg relative">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={297}
                  height={420}
                  className="object-cover aspect-[210/297]"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/50 text-white text-lg font-semibold py-2 px-8 rounded-lg backdrop-blur-sm">
                    Amostras
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="default" className="-left-4 transition-all hover:scale-110 hover:shadow-xl animate-pulse-arrow" />
      <CarouselNext variant="default" className="-right-4 transition-all hover:scale-110 hover:shadow-xl animate-pulse-arrow" />
    </Carousel>
  );
}

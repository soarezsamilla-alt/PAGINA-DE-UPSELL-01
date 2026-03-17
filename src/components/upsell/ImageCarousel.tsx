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
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={297}
                  height={420}
                  className="object-cover aspect-[210/297]"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="default" className="transition-transform hover:scale-105" />
      <CarouselNext variant="default" className="transition-transform hover:scale-105" />
    </Carousel>
  );
}

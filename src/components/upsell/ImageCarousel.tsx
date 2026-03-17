'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
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
    <div className="w-full flex justify-center">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <Card className="overflow-hidden rounded-lg">
                  <CardContent className="flex items-center justify-center p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={270}
                      height={480}
                      className="object-cover aspect-[9/16]"
                    />
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
  );
}

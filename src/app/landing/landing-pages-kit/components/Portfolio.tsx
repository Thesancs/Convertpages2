"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay";

const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith('portfolio-'));

export function Portfolio() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const updateCurrent = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateCurrent();
    api.on('select', updateCurrent);
    return () => {
      api.off('select', updateCurrent);
    };
  }, [api, updateCurrent]);

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll
          animationClassName="animate-in fade-in slide-in-from-bottom-5 duration-500"
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Veja Alguns dos Modelos Incríveis
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Designs prontos para diversos nichos, focados em performance e conversão.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll
          animationClassName="animate-in fade-in zoom-in-95 duration-700"
          delay={200}
        >
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {portfolioImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                         <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={800}
                            className="w-full h-full object-cover"
                            data-ai-hint={image.imageHint}
                          />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
             Slide {current} de {portfolioImages.length}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

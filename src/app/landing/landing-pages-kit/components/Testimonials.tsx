"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BlurFade } from './BlurFade';

const testimonialImages = [
  { imageUrl: '/Depoiments/dp 2.webp', description: 'Depoimento 1' },
  { imageUrl: '/Depoiments/dp 4.webp', description: 'Depoimento 2' },
  { imageUrl: '/Depoiments/dp 6.webp', description: 'Depoimento 3' },
  { imageUrl: '/Depoiments/dp 7.webp', description: 'Depoimento 4' },
  { imageUrl: '/Depoiments/dp5.webp', description: 'Depoimento 5' },
];


export function Testimonials() {

  return (
    <section className="py-8 md:py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.2} yOffset={20} className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">
            O que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Veja como o Convert Pages 2k está transformando negócios.
          </p>
        </BlurFade>
      </div>
      
      <BlurFade
        delay={0.4}
        yOffset={20}
        className="w-full"
      >
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-6xl mx-auto"
                >
                <CarouselContent className="-ml-4">
                    {testimonialImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-4 basis-1/2">
                        <div className="flex-shrink-0 w-full">
                            <Card className="overflow-hidden shadow-lg cursor-pointer rounded-lg bg-transparent border-none">
                                <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                                    <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    width={360}
                                    height={640}
                                    className="w-full h-full object-contain"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary/50 border-accent/30 text-accent shadow-accent/50 shadow-lg hover:bg-accent/20 hover:shadow-accent/80 transition-all" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary/50 border-accent/30 text-accent shadow-accent/50 shadow-lg hover:bg-accent/20 hover:shadow-accent/80 transition-all" />
            </Carousel>
        </div>
      </BlurFade>
    </section>
  );
}

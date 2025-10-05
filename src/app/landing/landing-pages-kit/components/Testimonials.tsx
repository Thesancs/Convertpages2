"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BlurFade } from './BlurFade';

const testimonialImages = [
  { imageUrl: '/Depoiments/dp 2.webp', description: 'Depoimento 1' },
  { imageUrl: '/Depoiments/dp 4.webp', description: 'Depoimento 2' },
  { imageUrl: '/Depoiments/dp 6.webp', description: 'Depoimento 3' },
  { imageUrl: '/Depoiments/dp-3-1 (1).webp', description: 'Depoimento 4' },
  { imageUrl: '/Depoiments/dp-3-1.webp', description: 'Depoimento 5' },
  { imageUrl: '/Depoiments/dp5.webp', description: 'Depoimento 6' },
];


export function Testimonials() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
             <Dialog>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                    >
                    <CarouselContent className="-ml-4">
                        {testimonialImages.map((image, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="flex-shrink-0 w-full">
                                <DialogTrigger asChild onClick={() => setSelectedImage(image.imageUrl)}>
                                    <Card className="overflow-hidden shadow-lg cursor-pointer rounded-lg">
                                        <CardContent className="flex aspect-[9/16] items-center justify-center p-0">
                                            <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            width={360}
                                            height={640}
                                            className="w-full h-full object-cover"
                                            />
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>

                {selectedImage && (
                    <DialogContent className="max-w-none w-auto h-auto bg-transparent border-none p-0">
                        <Image
                            src={selectedImage}
                            alt="Preview"
                            width={720}
                            height={1280}
                            className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                        />
                    </DialogContent>
                )}
            </Dialog>
        </div>
      </BlurFade>
    </section>
  );
}

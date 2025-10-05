"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BlurFade } from './BlurFade';

const localPortfolioImages = [
  { imageUrl: '/LandingPages/lp1.webp', description: 'Modelo de Landing Page 1' },
  { imageUrl: '/LandingPages/lp2.webp', description: 'Modelo de Landing Page 2' },
  { imageUrl: '/LandingPages/lp3.webp', description: 'Modelo de Landing Page 3' },
  { imageUrl: '/LandingPages/lp4.webp', description: 'Modelo de Landing Page 4' },
  { imageUrl: '/LandingPages/lp5.webp', description: 'Modelo de Landing Page 5' },
  { imageUrl: '/LandingPages/lp6.webp', description: 'Modelo de Landing Page 6' },
  { imageUrl: '/LandingPages/lp7.webp', description: 'Modelo de Landing Page 7' },
  { imageUrl: '/LandingPages/lp8.webp', description: 'Modelo de Landing Page 8' },
];


export function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-8 md:py-12 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.2} yOffset={20} className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">
            Veja Alguns dos Modelos Incríveis
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Designs prontos para diversos nichos, focados em performance e conversão.
          </p>
        </BlurFade>
      </div>
      
      <BlurFade
        delay={0.4}
        yOffset={20}
        className="w-full"
      >
        <div className="relative">
             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-secondary/50 to-transparent z-10"></div>
             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-secondary/50 to-transparent z-10"></div>
            <Dialog>
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {[...localPortfolioImages, ...localPortfolioImages].map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-64 md:w-80 mx-2">
                        <DialogTrigger asChild onClick={() => setSelectedImage(image.imageUrl)}>
                            <Card className="overflow-hidden shadow-lg cursor-pointer rounded-lg">
                                <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                                    <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    width={600}
                                    height={800}
                                    className="w-full h-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                    </div>
                    ))}
                </div>
                {selectedImage && (
                    <DialogContent className="max-w-none w-auto h-auto bg-transparent border-none p-0">
                        <Image
                            src={selectedImage}
                            alt="Preview"
                            width={1200}
                            height={1600}
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

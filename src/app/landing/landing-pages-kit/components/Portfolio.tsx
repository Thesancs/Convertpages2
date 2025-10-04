"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BlurFade } from './BlurFade';

const localPortfolioImages = [
  { imageUrl: '/LandingPages/1.webp', description: 'Modelo de Landing Page 1' },
  { imageUrl: '/LandingPages/2.webp', description: 'Modelo de Landing Page 2' },
  { imageUrl: '/LandingPages/3.webp', description: 'Modelo de Landing Page 3' },
  { imageUrl: '/LandingPages/4.webp', description: 'Modelo de Landing Page 4' },
  { imageUrl: '/LandingPages/5.webp', description: 'Modelo de Landing Page 5' },
  { imageUrl: '/LandingPages/6.webp', description: 'Modelo de Landing Page 6' },
  { imageUrl: '/LandingPages/7.webp', description: 'Modelo de Landing Page 7' },
  { imageUrl: '/LandingPages/8.webp', description: 'Modelo de Landing Page 8' },
  { imageUrl: '/LandingPages/9.webp', description: 'Modelo de Landing Page 9' },
  { imageUrl: '/LandingPages/10.webp', description: 'Modelo de Landing Page 10' },
  { imageUrl: '/LandingPages/11.webp', description: 'Modelo de Landing Page 11' },
  { imageUrl: '/LandingPages/12.webp', description: 'Modelo de Landing Page 12' },
  { imageUrl: '/LandingPages/13.webp', description: 'Modelo de Landing Page 13' },
  { imageUrl: '/LandingPages/14.webp', description: 'Modelo de Landing Page 14' },
  { imageUrl: '/LandingPages/15.webp', description: 'Modelo de Landing Page 15' },
  { imageUrl: '/LandingPages/16.webp', description: 'Modelo de Landing Page 16' },
  { imageUrl: '/LandingPages/17.webp', description: 'Modelo de Landing Page 17' },
];


export function Portfolio() {
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
        className="relative w-full"
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...localPortfolioImages, ...localPortfolioImages].map((image, index) => (
              <div key={index} className="flex-shrink-0 w-64 md:w-80 px-4">
                  <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
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
              </div>
            ))}
        </div>
      </BlurFade>
    </section>
  );
}

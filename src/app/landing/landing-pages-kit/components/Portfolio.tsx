"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith('portfolio-'));

export function Portfolio() {
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
      </div>
      
      <AnimateOnScroll
        animationClassName="animate-in fade-in"
        delay={200}
        className="relative w-full overflow-hidden"
      >
        <div className="flex animate-marquee-slow hover:[animation-play-state:paused]">
            {[...portfolioImages, ...portfolioImages].map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 px-4">
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
            ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
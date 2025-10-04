"use client";

import * as React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith("portfolio-"));

export function Portfolio() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scales, setScales] = React.useState<number[]>([]);
  const [rotations, setRotations] = React.useState<number[]>([]);

  const scaleFactor = 0.2;
  const rotationFactor = -25;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const applyStyles = () => {
        const engine = api.internalEngine();
        if (!engine || !engine.slides) return;

        const scrollProgress = api.scrollProgress();

        const newScales = engine.slides.map((_, index) => {
            const diff = Math.abs(index - scrollProgress);
            const scale = 1 - diff * scaleFactor;
            return Math.max(0, scale);
        });

        const newRotations = engine.slides.map((_, index) => {
            const diff = index - scrollProgress;
            return diff * rotationFactor;
        });

        setScales(newScales);
        setRotations(newRotations);
    };

    api.on("select", onSelect);
    api.on("scroll", applyStyles);
    api.on("reInit", applyStyles);

    // Initial setup
    onSelect();
    applyStyles();

    return () => {
      api.off("select", onSelect);
      api.off("scroll", applyStyles);
      api.off("reInit", applyStyles);
    };
  }, [api]);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-bottom-5 duration-500" className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Conheça Alguns de Nossos Modelos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Páginas prontas para os mais variados nichos de mercado.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animationClassName="animate-in fade-in zoom-in-95 duration-700">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 h-[400px]">
              {portfolioImages.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-8">
                  <div 
                    className="h-full w-full transition-transform duration-300 ease-out"
                    style={{
                      transform: `scale(${scales[index] || 0}) rotateY(${rotations[index] || 0}deg)`,
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className={cn(
                          "object-cover transition-opacity duration-300",
                           current === index ? 'opacity-100' : 'opacity-50'
                        )}
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

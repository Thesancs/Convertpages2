"use client";

import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function GlowingBadge({ children }: { children: React.ReactNode }) {
  const [isLit, setIsLit] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsLit(true);
          }, 1000);

          observer.unobserve(element);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} className="inline-block">
      <Badge
        className={cn(
          "text-base md:text-lg py-2 px-6 rounded-full transition-all duration-500",
          isLit
            ? "border-primary/50 text-primary font-medium bg-primary/5"
            : "border-muted-foreground/20 text-muted-foreground/50 bg-transparent font-normal"
        )}
        style={{
          boxShadow: isLit
            ? '0 0 8px hsl(var(--primary) / 0.3), 0 0 1px hsl(var(--primary) / 0.5) inset'
            : 'none',
          transition: 'color 0.5s ease-in-out, background-color 0.5s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out'
        }}
      >
        {children}
      </Badge>
    </div>
  );
}

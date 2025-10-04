"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowingIconProps {
  children: ReactNode;
}

export function GlowingIcon({ children }: GlowingIconProps) {
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
          }, 1000); // Delay to sync with badges

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
    <div
      ref={ref}
      className={cn(
        "inline-block p-3 rounded-full mb-4 transition-all duration-500",
        isLit
          ? "bg-accent/10 border border-accent/50 text-accent"
          : "bg-primary/10 text-primary border border-transparent"
      )}
      style={{
        boxShadow: isLit
          ? '0 0 8px hsl(var(--accent) / 0.4), 0 0 2px hsl(var(--accent) / 0.6) inset'
          : 'none',
        transition: 'color 0.5s ease-in-out, background-color 0.5s ease-in-out, border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out'
      }}
    >
      {children}
    </div>
  );
}

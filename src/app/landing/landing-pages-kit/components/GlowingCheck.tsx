"use client";

import { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GlowingCheck() {
  const [isLit, setIsLit] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay the "lighting up" effect by 1 second after it comes into view
          const timer = setTimeout(() => {
            setIsLit(true);
          }, 1000);

          // Disconnect the observer once lit to prevent re-triggering
          observer.unobserve(element);

          return () => clearTimeout(timer); // Cleanup timer
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the element is visible
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex-shrink-0 mr-3 mt-1">
      <CheckCircle2
        className={cn(
          "h-6 w-6 transition-all duration-500",
          isLit
            ? "text-green-500"
            : "text-muted-foreground/50"
        )}
        style={{
          filter: isLit
            ? 'drop-shadow(0 0 3px rgba(34, 197, 94, 0.8))'
            : 'none',
          transition: 'color 0.5s ease-in-out, filter 0.5s ease-in-out'
        }}
      />
    </div>
  );
}

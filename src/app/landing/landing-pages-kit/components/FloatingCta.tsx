"use client";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { CtaButton } from './CtaButton';

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // This effect should only run on the client
    if (typeof window === 'undefined') return;

    const toggleVisibility = () => {
      // Show after scrolling past 80% of the viewport height
      if (window.pageYOffset > (window.innerHeight * 0.8)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Initial check

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isMobile) {
    return null; // Fixed button is for mobile only as requested
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/80 backdrop-blur-lg border-t border-border/20 transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <CtaButton className="w-full" />
    </div>
  );
}

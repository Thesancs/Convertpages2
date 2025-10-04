"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  triggerOnce?: boolean;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.5,
  delay = 0,
  yOffset = 24,
  inView: inViewProp,
  inViewMargin = '-50px',
  triggerOnce = true,
}: BlurFadeProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const variants = variant || {
    hidden: { y: yOffset, opacity: 0, filter: 'blur(5px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  };

  useEffect(() => {
    if (inViewProp) {
      setInView(inViewProp);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if(!triggerOnce) {
            setInView(false);
        }
      },
      { rootMargin: inViewMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [inViewProp, inViewMargin, triggerOnce, yOffset]);

  const styles = {
    transform: inView ? `translateY(${variants.visible.y}px)` : `translateY(${variants.hidden.y}px)`,
    opacity: inView ? variants.visible.opacity : variants.hidden.opacity,
    filter: inView ? variants.visible.filter : variants.hidden.filter,
    transition: `transform ${duration}s ease-out ${delay}s, opacity ${duration}s ease-out ${delay}s, filter ${duration}s ease-out ${delay}s`,
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={styles}
    >
      {children}
    </div>
  );
}

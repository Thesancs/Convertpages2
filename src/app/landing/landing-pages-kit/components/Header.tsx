"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { CtaButton } from './CtaButton';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/20 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/landing/landing-pages-kit" className="flex items-center gap-2">
          <Image src="/logo.png" alt="LandingPro Kit Logo" width={196} height={56} className="h-14 w-auto" />
        </Link>
        <div className="hidden md:block">
          <CtaButton />
        </div>
      </div>
    </header>
  );
}

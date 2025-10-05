"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function CtaButton({ className, children, href = "#pricing" }: { className?: string, children?: React.ReactNode, href?: string }) {
  return (
    <Link href={href}>
      <Button
        size="lg"
        className={cn(
          'font-bold text-base transition-all duration-300 transform hover:scale-105',
          'btn-new-cta',
          className
        )}
      >
        {children || (
            <>
              Quero Acesso Imediato
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
        )}
      </Button>
    </Link>
  );
}

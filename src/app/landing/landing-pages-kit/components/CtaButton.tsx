"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast"
import { cn } from '@/lib/utils';

export function CtaButton({ className, children }: { className?: string, children?: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    console.log('[LandingPagesKit]', 'CTA button clicked');
    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      console.log('[LandingPagesKit]', 'Simulated purchase successful');
      toast({
        title: "Sucesso!",
        description: "Você será redirecionado para o checkout.",
      })
      
      // Simulate redirect to checkout
      setTimeout(() => {
        // In a real app, you would redirect:
        // window.location.href = '/checkout-url'; 
        console.log('[LandingPagesKit]', 'Redirecting to checkout (simulation)...');
        setIsSuccess(false); // Reset for demo purposes
      }, 1500);
    }, 2000);
  };

  return (
    <Button
      size="lg"
      className={cn(
        'bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base shadow-lg transition-all duration-300 transform hover:scale-105',
        'animate-glow-pulse btn-shine',
        className
      )}
      onClick={handleClick}
      disabled={isLoading || isSuccess}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Processando...
        </>
      ) : isSuccess ? (
        <>
          <Check className="mr-2 h-5 w-5" />
          Sucesso!
        </>
      ) : (
        children || (
            <>
              Quero Acesso Imediato
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
        )
      )}
    </Button>
  );
}

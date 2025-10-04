import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { WhatYouGet } from './components/WhatYouGet';
import { Differentiators } from './components/Differentiators';
import { TargetAudience } from './components/TargetAudience';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';
import { Portfolio } from './components/Portfolio';

export default function LandingPagesKitPage() {
  console.log('[LandingPagesKit]', 'Page rendered');
  return (
    <div className="bg-background text-foreground antialiased font-body">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Benefits />
        <WhatYouGet />
        <Differentiators />
        <TargetAudience />
        <Bonuses />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

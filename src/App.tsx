import { useEffect } from 'react';
import { Nav } from './components/nav/Nav';
import { Hero } from './components/sections/Hero';
import { BrandIntro } from './components/sections/BrandIntro';
import { Reasons } from './components/sections/Reasons';
import { Accommodations } from './components/sections/Accommodations';
import { GetInspired } from './components/sections/GetInspired';
import { CommunityImpact } from './components/sections/CommunityImpact';
import { Footer } from './components/sections/Footer';
import { GrainOverlay } from './components/ui/GrainOverlay';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { initSmoothScroll } from './lib/smoothScroll';

export default function App() {
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return () => cleanup();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandIntro />
        <Accommodations />
        <GetInspired />
        <Reasons />
        <CommunityImpact />
      </main>
      <Footer />
      <GrainOverlay />
      <ScrollProgress />
    </>
  );
}

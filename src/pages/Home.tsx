import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  const { hash } = useLocation();

  // Scroll to a section when arriving via a link like "/#contact".
  useEffect(() => {
    if (!hash || hash.startsWith('#/')) return;
    const element = document.getElementById(decodeURIComponent(hash.substring(1)));
    if (!element) return;
    const timer = setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

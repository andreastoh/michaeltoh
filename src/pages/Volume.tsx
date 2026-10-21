import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { volumes, calligraphyWorks } from '../data/portfolio';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NotFound } from './NotFound';

const SWIPE_THRESHOLD = 50; // pixels

export function Volume() {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const isCalligraphy = pathname.startsWith('/calligraphy/');
  const volume = (isCalligraphy ? calligraphyWorks : volumes).find((v) => v.id === id);
  const count = volume?.images.length ?? 0;

  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  // Start from the first image when switching to another volume.
  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);

  const nextImage = useCallback(() => {
    if (count) setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevImage = useCallback(() => {
    if (count) setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Left/right arrow keys move through the images.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextImage, prevImage]);

  // Load the neighbouring images in the background so they appear instantly.
  useEffect(() => {
    if (!volume || count < 2) return;
    for (const offset of [1, -1]) {
      const img = new Image();
      img.src = volume.images[(currentIndex + offset + count) % count].url;
    }
  }, [volume, currentIndex, count]);

  if (!volume || count === 0) {
    return <NotFound />;
  }

  const current = volume.images[currentIndex];

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-16 px-8 max-w-[1920px] mx-auto w-full flex flex-col">
        <Link
          to={`/#${isCalligraphy ? 'calligraphy' : 'photography'}`}
          className="inline-flex items-center gap-2 font-label text-xs tracking-widest uppercase text-outline hover:text-primary transition-colors mb-12 w-fit"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to {isCalligraphy ? 'Calligraphy' : 'Photography'}
        </Link>

        <header className="mb-16 max-w-3xl">
          <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">{volume.volumeNumber}</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">{volume.title}</h1>
          <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed">
            {volume.description}
          </p>
        </header>

        {/* Carousel */}
        <section
          aria-roledescription="carousel"
          aria-label={`${volume.title} images`}
          className="relative flex-grow flex flex-col items-center justify-center min-h-[60vh]"
        >
          <div
            className="relative w-full max-w-6xl h-[60vh] md:h-[75vh] overflow-hidden bg-transparent flex items-center justify-center touch-pan-y"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (dx <= -SWIPE_THRESHOLD) nextImage();
              if (dx >= SWIPE_THRESHOLD) prevImage();
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={current.id}
                src={current.url}
                alt={current.alt}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 md:p-8 pointer-events-none">
              <button
                type="button"
                onClick={prevImage}
                className="pointer-events-auto w-12 h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-background/40 transition-colors border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="pointer-events-auto w-12 h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-background/40 transition-colors border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-4 mt-8">
            {volume.images.map((image, idx) => (
              <button
                type="button"
                key={image.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'w-4 bg-outline-variant hover:bg-outline'
                }`}
                aria-label={`Go to image ${idx + 1}: ${image.alt}`}
                aria-current={idx === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <div className="mt-4 font-label text-xs tracking-widest uppercase text-outline" aria-live="polite">
            {String(currentIndex + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

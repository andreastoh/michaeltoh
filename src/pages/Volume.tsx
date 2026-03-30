import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { volumes, calligraphyWorks } from '../data/portfolio';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Volume() {
  const { id: paramId } = useParams<{ id: string }>();
  const location = useLocation();
  
  // Extract ID and type from hash if not in standard params
  let id = paramId;
  let isCalligraphy = location.pathname.includes('/calligraphy/');
  
  if (!id) {
    if (location.hash.startsWith('#/volume/')) {
      id = location.hash.replace('#/volume/', '');
      isCalligraphy = false;
    } else if (location.hash.startsWith('#/calligraphy/')) {
      id = location.hash.replace('#/calligraphy/', '');
      isCalligraphy = true;
    }
  }
  
  const volume = isCalligraphy 
    ? calligraphyWorks.find(v => v.id === id)
    : volumes.find(v => v.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when navigating to a new volume
  useEffect(() => {
    setCurrentIndex(0);
    // Extra safeguard to ensure we're at the top
    window.scrollTo(0, 0);
  }, [id]);

  if (!volume || !volume.images || volume.images.length === 0) {
    return (
      <div className="min-h-screen bg-background text-on-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-headline text-4xl text-primary mb-4">Work Not Found</h1>
          <Link to="/" className="font-label text-sm tracking-widest uppercase text-outline hover:text-primary transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % volume.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + volume.images.length) % volume.images.length);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-8 max-w-[1920px] mx-auto w-full flex flex-col">
        <Link 
          to={`/#${isCalligraphy ? 'calligraphy' : 'photography'}`} 
          className="inline-flex items-center gap-2 font-label text-xs tracking-widest uppercase text-outline hover:text-primary transition-colors mb-12 w-fit"
        >
          <ArrowLeft size={16} />
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
        <div className="relative flex-grow flex flex-col items-center justify-center min-h-[60vh]">
          <div className="relative w-full max-w-6xl h-[60vh] md:h-[75vh] overflow-hidden bg-transparent flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={volume.images[currentIndex].url}
                alt={volume.images[currentIndex].alt}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 md:p-8 pointer-events-none">
              <button 
                onClick={prevImage}
                className="pointer-events-auto w-12 h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-background/40 transition-colors border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="pointer-events-auto w-12 h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-background/40 transition-colors border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-4 mt-8">
            {volume.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'w-4 bg-outline-variant hover:bg-outline'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-4 font-label text-xs tracking-widest uppercase text-outline">
            {String(currentIndex + 1).padStart(2, '0')} / {String(volume.images.length).padStart(2, '0')}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

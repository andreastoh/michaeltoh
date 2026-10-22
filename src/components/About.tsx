import React, { useRef, useEffect } from 'react';
import mikeImg from '../img/mike.webp';

import brahm from '../clients/brahm.webp';
import ccologo from '../clients/ccologo.webp';
import dcs from '../clients/dcs.webp';
import diplomatic from '../clients/diplomatic.webp';
import laselle from '../clients/laselle.webp';
import luxury from '../clients/luxury.webp';
import mbms from '../clients/mbms.webp';
import nus from '../clients/nus.webp';
import nygh from '../clients/nygh.webp';
import philharmonic from '../clients/philharmonic.webp';
import qihua from '../clients/qihua.webp';
import sitfe from '../clients/sitfe.webp';

const clients = [
  { name: "Brahm", src: brahm },
  { name: "CCO", src: ccologo },
  { name: "DCS", src: dcs },
  { name: "Diplomatic", src: diplomatic },
  { name: "Laselle", src: laselle },
  { name: "Luxury", src: luxury },
  { name: "MBMS", src: mbms },
  { name: "NUS", src: nus },
  { name: "NYGH", src: nygh },
  { name: "Philharmonic", src: philharmonic },
  { name: "Qihua", src: qihua },
  { name: "SITFE", src: sitfe }
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const speed = useRef(0.5);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const logos = Array.from(scroller.querySelectorAll<HTMLElement>('img'));

    // Measure the layout once (and on resize) instead of on every frame.
    let containerLeft = 0;
    let halfWidth = 0;
    let logoCenters: number[] = [];
    const measure = () => {
      // The scroller is positioned, so logo offsets are measured from it.
      containerLeft = container.getBoundingClientRect().left + scroller.offsetLeft;
      halfWidth = scroller.scrollWidth / 2;
      logoCenters = logos.map((logo) => logo.offsetLeft + logo.offsetWidth / 2);
    };
    measure();
    window.addEventListener('resize', measure);
    // Logos may finish loading after the first measurement.
    logos.forEach((logo) => logo.addEventListener('load', measure));

    let animationId = 0;
    let running = false;

    const animate = () => {
      if (!isDragging.current) {
        const targetSpeed = isHovered.current || reduceMotion.matches ? 0 : 0.5;
        speed.current += (targetSpeed - speed.current) * 0.05;
      }

      position.current -= speed.current;
      if (halfWidth > 0) {
        if (position.current <= -halfWidth) position.current += halfWidth;
        else if (position.current > 0) position.current -= halfWidth;
      }
      scroller.style.transform = `translateX(${position.current}px)`;

      // Colorize logos near the middle of the screen.
      const centerX = window.innerWidth / 2;
      const threshold = window.innerWidth * 0.4;
      for (let i = 0; i < logos.length; i++) {
        const logo = logos[i];
        const distance = Math.abs(centerX - (containerLeft + logoCenters[i] + position.current));
        if (distance < threshold) {
          // Squared cosine gives a gradual fade in and out.
          const intensity = Math.pow(Math.cos((distance / threshold) * (Math.PI / 2)), 2);
          logo.style.filter = `grayscale(${100 - intensity * 100}%)`;
          logo.style.opacity = `${0.4 + intensity * 0.6}`;
          logo.style.transform = `scale(${1 + intensity * 0.1})`;
        } else {
          logo.style.filter = 'grayscale(100%)';
          logo.style.opacity = '0.4';
          logo.style.transform = 'scale(1)';
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Only animate while the strip is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        measure();
        animationId = requestAnimationFrame(animate);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(animationId);
      }
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', measure);
      logos.forEach((logo) => logo.removeEventListener('load', measure));
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    speed.current = 0;
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = 'grabbing';
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.pageX - startX.current;
    position.current += dx;
    speed.current = -dx * 0.5;
    startX.current = e.pageX;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    isDragging.current = false;
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = 'grab';
    }
  };

  return (
    <section id="about" className="px-8 max-w-[1920px] mx-auto pt-12 pb-32 scroll-mt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-start-2 md:col-span-5 flex flex-col justify-center">
          <span className="font-label text-primary uppercase tracking-[0.2em] mb-6 block text-xs">
            The Visionary
          </span>
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary leading-tight mb-8">
            The duality of <br/><span className="italic font-normal">light and ink.</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed mb-12">
            Michael Toh is a Singapore-based artist whose practice bridges two distinct yet harmonious disciplines: the precise setting of light exposure and composition in photography and the fluid, expressive strokes of traditional Chinese calligraphy.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-none font-label uppercase text-xs tracking-widest font-bold hover:bg-primary transition-all active:scale-95">
              Inquire
            </a>
            <a href="#photography" className="font-label uppercase text-xs tracking-[0.2em] text-on-surface hover:text-primary transition-colors">
              Selected Work
            </a>
          </div>
        </div>
        
        <div className="md:col-start-8 md:col-span-4 relative">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden relative group">
            <img 
              src={mikeImg} 
              alt="Portrait of Michael Toh"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
          </div>
          <div className="mt-4 text-right">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline-variant">
              Michael Toh, 2024. Captured on 35mm.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-48 bg-surface-container-low py-32 px-8 -mx-8 overflow-hidden">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
          <div className="md:col-start-3 md:col-span-8">
            <div className="max-w-4xl">
              <h3 className="font-headline text-3xl md:text-4xl text-on-surface mb-12 leading-relaxed">
                "Whether through the lens or the brush, art is the practice of revealing the profound stillness within the spaces between objects."
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-body text-on-surface-variant leading-relaxed">
                <p>
                  My journey began with film, where I learned to see with intention—embracing the discipline of waiting, observing, and choosing the right moment before pressing the shutter. The process instilled a lasting sensitivity to light, timing, and restraint. This sensibility naturally extended into my practice of Chinese calligraphy, where patience, breath, and the decisiveness of each stroke echo the act of capturing an image. Both mediums demand presence and clarity—there is no excess, only what is essential.
                </p>
                <p>
                  Today, I create visual work that values depth over volume. My photography moves between travel, nature, and the built environment, observing how spaces and landscapes shape human experience. Alongside this, my calligraphy explores the quiet rhythms of nature and the inner mind. Together, they form an ongoing dialogue between what is seen and what is felt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Marquee */}
        <div className="border-t border-outline-variant/20 pt-16">
          <div className="max-w-[1920px] mx-auto mb-12">
             <span className="font-label text-primary uppercase tracking-[0.2em] text-xs">Selected Clients & Exhibitions</span>
          </div>
          <div
            ref={containerRef}
            className="relative flex overflow-hidden w-full group cursor-grab touch-pan-y"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            {/* Gradient Masks for smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none"></div>
            
            <div ref={scrollerRef} className="relative flex whitespace-nowrap items-center w-max">
              <div className="flex items-center shrink-0">
                {clients.map((client, idx) => (
                  <img 
                    key={`first-${idx}`} 
                    src={client.src}
                    alt={client.name}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="mx-12 md:mx-16 h-14 md:h-20 w-auto shrink-0 object-contain transition-all duration-300 select-none"
                  />
                ))}
              </div>
              <div className="flex items-center shrink-0">
                {clients.map((client, idx) => (
                  <img 
                    key={`second-${idx}`}
                    src={client.src}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="mx-12 md:mx-16 h-14 md:h-20 w-auto shrink-0 object-contain transition-all duration-300 select-none"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

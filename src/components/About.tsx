import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import mikeImg from '../img/mike.png';

import brahm from '../clients/brahm.png';
import ccologo from '../clients/ccologo.png';
import dcs from '../clients/dcs.png';
import diplomatic from '../clients/diplomatic.png';
import laselle from '../clients/laselle.png';
import luxury from '../clients/luxury.png';
import mbms from '../clients/mbms.png';
import nus from '../clients/nus.png';
import nygh from '../clients/nygh.png';
import philharmonic from '../clients/philharmonic.png';
import qihua from '../clients/qihua.png';
import sitfe from '../clients/sitfe.png';

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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const speed = useRef(0.5);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId: number;
    
    const animate = () => {
      if (!isDragging.current) {
        const targetSpeed = isHovered.current ? 0 : 0.5;
        speed.current += (targetSpeed - speed.current) * 0.05;
      }
      
      position.current -= speed.current;

      const halfWidth = scroller.scrollWidth / 2;
      
      if (position.current <= -halfWidth) {
        position.current += halfWidth;
      } else if (position.current > 0) {
        position.current -= halfWidth;
      }

      scroller.style.transform = `translateX(${position.current}px)`;

      // Colorize logos in the center
      const centerX = window.innerWidth / 2;
      const threshold = window.innerWidth * 0.4; // Wider threshold for smoother fade

      const logoGroups = scroller.children;
      for (let i = 0; i < logoGroups.length; i++) {
        const group = logoGroups[i] as HTMLElement;
        const logos = group.children;
        for (let j = 0; j < logos.length; j++) {
          const logo = logos[j] as HTMLElement;
          const rect = logo.getBoundingClientRect();
          const logoCenter = rect.left + rect.width / 2;
          const distance = Math.abs(centerX - logoCenter);

          if (distance < threshold) {
            // Use a smoother curve (squared cosine) for a very gradual "fade in/out"
            const normalizedDistance = distance / threshold;
            const intensity = Math.pow(Math.cos(normalizedDistance * (Math.PI / 2)), 2);
            
            // Apply grayscale and opacity
            const grayscale = 100 - (intensity * 100);
            const opacity = 0.4 + (intensity * 0.6);
            
            logo.style.filter = `grayscale(${grayscale}%)`;
            logo.style.opacity = `${opacity}`;
            logo.style.transform = `scale(${1 + (intensity * 0.1)})`;
          } else {
            logo.style.filter = 'grayscale(100%)';
            logo.style.opacity = '0.4';
            logo.style.transform = 'scale(1)';
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
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
            Michael Toh is a Singapore-based artist whose practice bridges two distinct yet harmonious disciplines: the precise geometry of architectural photography and the fluid, expressive strokes of traditional Chinese calligraphy.
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
              alt="Michael Toh Portrait" 
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
                  My journey began in the darkrooms of Singapore, learning the patience of the chemical process. This discipline naturally evolved into a deep appreciation for Chinese calligraphy—a practice where patience, breath, and the decisive moment of the brush stroke mirror the capturing of light on film.
                </p>
                <p>
                  Today, I curate visual experiences that value depth over volume. My photography acts as an architectural annotation of the modern world, while my calligraphy explores the ancient rhythms of nature and mind. Together, they form a complete dialogue between the external environment and internal reflection.
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
            className="relative flex overflow-hidden w-full group cursor-grab touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            {/* Gradient Masks for smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none"></div>
            
            <div ref={scrollerRef} className="flex whitespace-nowrap items-center w-max">
              <div className="flex items-center shrink-0">
                {clients.map((client, idx) => (
                  <img 
                    key={`first-${idx}`} 
                    src={client.src}
                    alt={client.name}
                    draggable={false}
                    className="mx-12 md:mx-16 h-14 md:h-20 w-auto shrink-0 object-contain transition-all duration-300 select-none"
                  />
                ))}
              </div>
              <div className="flex items-center shrink-0">
                {clients.map((client, idx) => (
                  <img 
                    key={`second-${idx}`} 
                    src={client.src}
                    alt={client.name}
                    draggable={false}
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

import { Link } from 'react-router-dom';
import bgImg from '../img/bg.png';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background">
        <img 
          src={bgImg} 
          alt="Cinematic landscape photograph of mountain peaks at sunrise" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mt-20">
        <span className="font-label uppercase tracking-[0.3em] text-primary text-xs mb-6 block">
          Photographer & Calligraphy Artist
        </span>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface mb-8 leading-tight">
          Mastering <span className="italic text-primary">Light</span> & <span className="italic text-primary">Ink</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <a href="#photography" className="bg-primary-container text-on-primary-container px-10 py-4 font-label uppercase tracking-widest text-xs font-bold hover:bg-primary transition-colors duration-300 rounded-none">
            Photography
          </a>
          <a href="#calligraphy" className="ghost-border text-on-surface px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-surface-container-low transition-colors duration-300 rounded-none">
            Calligraphy
          </a>
        </div>
      </div>
    </section>
  );
}

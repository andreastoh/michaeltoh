import { Link } from 'react-router-dom';
import { volumes, calligraphyWorks } from '../data/portfolio';

export function Gallery() {
  const renderGrid = (items: any[], type: 'photography' | 'calligraphy') => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-8 lg:gap-x-16">
      {items.map((item, index) => {
        let colClasses = "";
        let aspectClass = "";
        
        if (index === 0) {
          colClasses = "md:col-start-1 md:col-span-6";
          aspectClass = "aspect-auto";
        } else if (index === 1) {
          colClasses = "md:col-start-7 md:col-span-6 md:mt-24 lg:mt-40";
          aspectClass = "aspect-auto";
        } else if (index === 2) {
          colClasses = "md:col-start-2 md:col-span-5";
          aspectClass = "aspect-auto";
        } else if (index === 3) {
          colClasses = "md:col-start-7 md:col-span-6 md:mt-24 lg:mt-40";
          aspectClass = "aspect-auto";
        } else {
          colClasses = "md:col-start-3 md:col-span-8";
          aspectClass = "aspect-auto";
        }

        const linkPath = type === 'photography' ? `/volume/${item.id}` : `/calligraphy/${item.id}`;
        const itemLabel = type === 'photography' ? 'Photographs' : 'Works';
        
        let imageFitClass = 'object-contain w-full h-auto';
        let transformClass = 'transition-transform duration-1000 group-hover:scale-105';
        
        const bgClass = 'bg-transparent';

        return (
          <Link 
            key={item.id}
            to={linkPath}
            className={`${colClasses} group cursor-pointer block`}
          >
            <div className={`relative ${aspectClass} overflow-hidden ${bgClass} mb-8 flex items-center justify-center`}>
              <img 
                src={item.coverImage} 
                alt={item.title} 
                className={`${imageFitClass} ${transformClass}`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary">{item.volumeNumber}</span>
              <h3 className="font-headline text-3xl text-on-surface tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="px-8 max-w-[1920px] mx-auto py-32 space-y-48">
      {/* Photography Section */}
      <section id="photography" className="scroll-mt-32">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">Exhibition</span>
            <h2 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">Lens.</h2>
            <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed max-w-xl">
              A curated selection of visual narratives, exploring the intersection of light, silence, and the human spirit across diverse landscapes.
            </p>
          </div>
        </header>
        {renderGrid(volumes, 'photography')}
      </section>

      {/* Calligraphy Section */}
      <section id="calligraphy" className="scroll-mt-32">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">Exhibition</span>
            <h2 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">Brush & Ink.</h2>
            <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed max-w-xl">
              Traditional Chinese calligraphy works that explore the rhythm of nature and the meditative practice of ink preparation.
            </p>
          </div>
        </header>
        {renderGrid(calligraphyWorks, 'calligraphy')}
      </section>
    </div>
  );
}

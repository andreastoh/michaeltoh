import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { products } from '../data/shop';

export function Shop() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-8 max-w-[1920px] mx-auto w-full">
        <header className="mb-24 max-w-3xl">
          <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">Acquire</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">Prints & <br/><span className="italic font-normal">Calligraphy.</span></h1>
          <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed">
            Selected works available as limited edition archival pigment prints and monographs.<br/>Contact Michael for more details.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="aspect-[4/5] bg-transparent overflow-hidden mb-6 relative flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors">{product.title}</h3>
                  <span className="font-label text-sm tracking-widest text-primary whitespace-nowrap">{product.price}</span>
                </div>
                <p className="font-label text-xs tracking-widest uppercase text-outline-variant mb-4">{product.type}</p>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
                <Link
                  to={`/?artwork=${encodeURIComponent(product.title)}#contact`}
                  className="mt-6 inline-flex items-center gap-2 w-fit font-label uppercase text-xs tracking-[0.2em] text-primary hover:text-on-surface transition-colors"
                >
                  Inquire <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

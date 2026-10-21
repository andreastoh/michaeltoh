import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { volumes, calligraphyWorks } from '../data/portfolio';

type Section = 'home' | 'about' | 'photography' | 'calligraphy' | 'events' | 'shop' | 'contact';

// Must match the order of sections on the home page.
const HOME_SECTIONS: Section[] = ['home', 'about', 'photography', 'calligraphy', 'contact'];

function sectionForPath(pathname: string): Section | null {
  if (pathname.startsWith('/volume/')) return 'photography';
  if (pathname.startsWith('/calligraphy/')) return 'calligraphy';
  if (pathname === '/events') return 'events';
  if (pathname === '/shop') return 'shop';
  return null;
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const pageSection = sectionForPath(pathname);
  const [scrollSection, setScrollSection] = useState<Section>('home');
  const activeSection = pageSection ?? scrollSection;

  // Close the mobile menu after navigating.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // On the home page, highlight whichever section is on screen.
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      let current: Section = 'home';
      for (const section of HOME_SECTIONS) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setScrollSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const getLinkClass = (section: Section) => {
    const base = "font-label uppercase tracking-[0.1em] text-sm transition-all duration-300 active:scale-95";
    const active = "text-primary border-b-2 border-primary pb-1";
    const inactive = "text-on-surface-variant hover:text-on-surface";
    return `${base} ${activeSection === section ? active : inactive}`;
  };

  const dropdown = (
    label: string,
    section: Section,
    basePath: string,
    items: { id: string; title: string }[]
  ) => (
    <div className="relative group py-2">
      <Link to={`/#${section}`} className={getLinkClass(section)} aria-haspopup="true">
        <span className="flex items-center gap-1">
          {label}
          <ChevronDown
            size={14}
            aria-hidden="true"
            className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
          />
        </span>
      </Link>

      {/* Opens on hover and when a link inside has keyboard focus */}
      <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
        <div className="bg-surface-container-low/95 backdrop-blur-xl border border-outline-variant/20 flex flex-col py-2 shadow-2xl">
          {items.map((item) => {
            const path = `${basePath}/${item.id}`;
            const isActive = pathname === path;
            return (
              <Link
                key={item.id}
                to={path}
                aria-current={isActive ? 'page' : undefined}
                className={`px-6 py-3 font-label text-xs tracking-widest uppercase transition-colors ${
                  isActive
                    ? 'text-primary bg-surface-container'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container focus:text-primary focus:bg-surface-container'
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );

  const mobileGroup = (
    label: string,
    section: Section,
    basePath: string,
    items: { id: string; title: string }[]
  ) => (
    <div className="flex flex-col gap-4">
      <Link to={`/#${section}`} className={getLinkClass(section)} onClick={() => setIsMobileMenuOpen(false)}>
        {label}
      </Link>
      <div className="flex flex-col gap-3 pl-4 border-l border-outline-variant/20 ml-2">
        {items.map((item) => {
          const path = `${basePath}/${item.id}`;
          const isActive = pathname === path;
          return (
            <Link
              key={item.id}
              to={path}
              aria-current={isActive ? 'page' : undefined}
              className={`font-label text-xs tracking-widest uppercase transition-colors ${
                isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <nav aria-label="Main" className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-outline-variant/10 transition-all">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
        <Link to="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-headline text-2xl tracking-[0.15em] uppercase text-on-surface group-hover:text-primary transition-colors">
            Michael Toh
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <Link to="/#about" className={getLinkClass('about')}>About</Link>
          {dropdown('Photography', 'photography', '/volume', volumes)}
          {dropdown('Calligraphy', 'calligraphy', '/calligraphy', calligraphyWorks)}
          <Link to="/events" className={getLinkClass('events')}>Events</Link>
          <Link to="/shop" className={getLinkClass('shop')}>Shop</Link>
          <Link to="/#contact" className={getLinkClass('contact')}>Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-primary-container hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-outline-variant/10 flex flex-col py-6 px-8 gap-6 shadow-2xl h-[80vh] overflow-y-auto"
        >
          <Link to="/#about" className={getLinkClass('about')} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          {mobileGroup('Photography', 'photography', '/volume', volumes)}
          {mobileGroup('Calligraphy', 'calligraphy', '/calligraphy', calligraphyWorks)}
          <Link to="/events" className={getLinkClass('events')} onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
          <Link to="/shop" className={getLinkClass('shop')} onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/#contact" className={getLinkClass('contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

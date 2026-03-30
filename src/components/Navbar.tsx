import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { volumes, calligraphyWorks } from '../data/portfolio';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/volume')) {
      setActiveSection('photography');
      return;
    }
    if (location.pathname.startsWith('/calligraphy')) {
      setActiveSection('calligraphy');
      return;
    }
    if (location.pathname === '/events') {
      setActiveSection('events');
      return;
    }
    if (location.pathname === '/shop') {
      setActiveSection('shop');
      return;
    }

    const handleScroll = () => {
      // The order must match the DOM order for the scroll logic to work correctly
      const sections = ['home', 'about', 'photography', 'calligraphy', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const getLinkClass = (section: string) => {
    const base = "font-label uppercase tracking-[0.1em] text-sm transition-all duration-300 active:scale-95";
    const active = "text-primary border-b-2 border-primary pb-1";
    const inactive = "text-on-surface-variant hover:text-on-surface";
    return `${base} ${activeSection === section ? active : inactive}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-outline-variant/10 transition-all">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
        <Link to="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-headline text-2xl tracking-[0.15em] uppercase text-on-surface group-hover:text-primary transition-colors">
            Michael Toh
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <Link to="/about" className={getLinkClass('about')}>About</Link>
          
          {/* Photography Dropdown */}
          <div className="relative group py-2">
            <Link to="/photography" className={getLinkClass('photography')}>
              <span className="flex items-center gap-1">
                Photography <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </span>
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-surface-container-low/95 backdrop-blur-xl border border-outline-variant/20 flex flex-col py-2 shadow-2xl">
                {volumes.map(v => {
                  const isActive = location.pathname === `/volume/${v.id}`;
                  return (
                    <Link 
                      key={v.id} 
                      to={`/volume/${v.id}`} 
                      className={`px-6 py-3 font-label text-xs tracking-widest uppercase transition-colors ${
                        isActive 
                          ? 'text-primary bg-surface-container' 
                          : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                      }`}
                    >
                      {v.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Calligraphy Dropdown */}
          <div className="relative group py-2">
            <Link to="/calligraphy" className={getLinkClass('calligraphy')}>
              <span className="flex items-center gap-1">
                Calligraphy <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </span>
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-surface-container-low/95 backdrop-blur-xl border border-outline-variant/20 flex flex-col py-2 shadow-2xl">
                {calligraphyWorks.map(v => {
                  const isActive = location.pathname === `/calligraphy/${v.id}`;
                  return (
                    <Link 
                      key={v.id} 
                      to={`/calligraphy/${v.id}`} 
                      className={`px-6 py-3 font-label text-xs tracking-widest uppercase transition-colors ${
                        isActive 
                          ? 'text-primary bg-surface-container' 
                          : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                      }`}
                    >
                      {v.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/events" className={getLinkClass('events')}>Events</Link>
          <Link to="/shop" className={getLinkClass('shop')}>Shop</Link>
          <Link to="/contact" className={getLinkClass('contact')}>Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary-container hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-outline-variant/10 flex flex-col py-6 px-8 gap-6 shadow-2xl h-[80vh] overflow-y-auto">
          <Link to="/about" className={getLinkClass('about')} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          
          <div className="flex flex-col gap-4">
            <Link to="/photography" className={getLinkClass('photography')} onClick={() => setIsMobileMenuOpen(false)}>
              Photography
            </Link>
            <div className="flex flex-col gap-3 pl-4 border-l border-outline-variant/20 ml-2">
              {volumes.map(v => {
                const isActive = location.pathname === `/volume/${v.id}`;
                return (
                  <Link 
                    key={v.id} 
                    to={`/volume/${v.id}`} 
                    className={`font-label text-xs tracking-widest uppercase transition-colors ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {v.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link to="/calligraphy" className={getLinkClass('calligraphy')} onClick={() => setIsMobileMenuOpen(false)}>
              Calligraphy
            </Link>
            <div className="flex flex-col gap-3 pl-4 border-l border-outline-variant/20 ml-2">
              {calligraphyWorks.map(v => {
                const isActive = location.pathname === `/calligraphy/${v.id}`;
                return (
                  <Link 
                    key={v.id} 
                    to={`/calligraphy/${v.id}`} 
                    className={`font-label text-xs tracking-widest uppercase transition-colors ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {v.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link to="/events" className={getLinkClass('events')} onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
          <Link to="/shop" className={getLinkClass('shop')} onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/contact" className={getLinkClass('contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

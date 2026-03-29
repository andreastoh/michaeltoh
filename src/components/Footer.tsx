export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 px-8 mt-24 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1920px] mx-auto">
        <div className="font-headline text-lg text-on-surface">
          MICHAEL TOH
        </div>
        
        <div className="font-label text-[10px] tracking-[0.2em] uppercase text-outline-variant text-center md:text-left">
          © {new Date().getFullYear()} MICHAEL TOH. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="font-label text-[10px] tracking-[0.2em] uppercase text-outline-variant hover:text-primary transition-colors duration-300">Instagram</a>
          <a href="#" className="font-label text-[10px] tracking-[0.2em] uppercase text-outline-variant hover:text-primary transition-colors duration-300">LinkedIn</a>
          <a href="#" className="font-label text-[10px] tracking-[0.2em] uppercase text-outline-variant hover:text-primary transition-colors duration-300">Terms</a>
        </div>
      </div>
    </footer>
  );
}

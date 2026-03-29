import { Facebook, Instagram, Linkedin, Camera, Image } from 'lucide-react';

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
        
        <div className="flex gap-6">
          <a href="https://www.facebook.com/MichaelTohPhotography/" target="_blank" rel="noreferrer" className="text-outline-variant hover:text-primary transition-colors duration-300" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/michael_jc_toh/" target="_blank" rel="noreferrer" className="text-outline-variant hover:text-primary transition-colors duration-300" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.flickr.com/photos/mikejctoh/" target="_blank" rel="noreferrer" className="text-outline-variant hover:text-primary transition-colors duration-300" aria-label="Flickr">
            <Camera className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/michaeltoh/" target="_blank" rel="noreferrer" className="text-outline-variant hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.shutterstock.com/g/michaeltohphotography" target="_blank" rel="noreferrer" className="text-outline-variant hover:text-primary transition-colors duration-300" aria-label="Shutterstock">
            <Image className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

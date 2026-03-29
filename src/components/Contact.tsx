import { ArrowUpRight, Facebook, Instagram, Linkedin, Camera, Image } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-8 overflow-hidden bg-surface scroll-mt-32">
      {/* Subtle Artistic Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
        {/* Left Column: Editorial Content */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary">Get In Touch</span>
            <h2 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight">
              Let's start a <br/><span className="italic text-primary">dialogue.</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
              Whether you're interested in a collaboration, a private commission, or simply want to share your thoughts on the collection, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-8 pt-8 border-t border-outline-variant/20">
            <div className="group">
              <p className="font-label uppercase tracking-[0.1em] text-[10px] text-outline-variant mb-4">Socials</p>
              <div className="flex flex-col gap-4">
                <a href="https://www.facebook.com/MichaelTohPhotography/" target="_blank" rel="noreferrer" className="font-headline text-2xl text-on-surface hover:text-primary transition-all duration-300 flex items-center gap-4 group/link">
                  <Facebook className="w-6 h-6" /> Facebook
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <a href="https://www.instagram.com/michael_jc_toh/" target="_blank" rel="noreferrer" className="font-headline text-2xl text-on-surface hover:text-primary transition-all duration-300 flex items-center gap-4 group/link">
                  <Instagram className="w-6 h-6" /> Instagram
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <a href="https://www.flickr.com/photos/mikejctoh/" target="_blank" rel="noreferrer" className="font-headline text-2xl text-on-surface hover:text-primary transition-all duration-300 flex items-center gap-4 group/link">
                  <Camera className="w-6 h-6" /> Flickr
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/in/michaeltoh/" target="_blank" rel="noreferrer" className="font-headline text-2xl text-on-surface hover:text-primary transition-all duration-300 flex items-center gap-4 group/link">
                  <Linkedin className="w-6 h-6" /> LinkedIn
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <a href="https://www.shutterstock.com/g/michaeltohphotography" target="_blank" rel="noreferrer" className="font-headline text-2xl text-on-surface hover:text-primary transition-all duration-300 flex items-center gap-4 group/link">
                  <Image className="w-6 h-6" /> Shutterstock
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="font-label uppercase tracking-[0.1em] text-[10px] text-outline-variant mb-2">Location</p>
              <p className="font-body text-on-surface-variant italic">Based in Singapore, SG.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Minimalist Form */}
        <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-16 relative">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary text-on-surface placeholder:text-surface-container-highest transition-all font-body outline-none"
                />
              </div>
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary text-on-surface placeholder:text-surface-container-highest transition-all font-body outline-none"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Subject</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary text-on-surface transition-all font-body outline-none appearance-none">
                <option className="bg-surface text-on-surface">General Inquiry</option>
                <option className="bg-surface text-on-surface">Commercial Booking</option>
                <option className="bg-surface text-on-surface">Print Acquisition</option>
                <option className="bg-surface text-on-surface">Collaborations</option>
              </select>
            </div>

            <div className="relative group">
              <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:border-primary text-on-surface placeholder:text-surface-container-highest transition-all font-body resize-none outline-none"
              ></textarea>
            </div>

            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="font-body text-xs text-outline-variant leading-relaxed max-w-xs">
                By sending this message, you acknowledge that I will use your information to respond to your inquiry.
              </p>
              <button 
                type="submit" 
                className="w-full md:w-auto px-12 py-5 bg-primary-container text-on-primary-container font-label uppercase tracking-[0.2em] text-xs font-bold rounded-none hover:bg-primary transition-all duration-500 active:scale-95 shadow-xl shadow-primary/5"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

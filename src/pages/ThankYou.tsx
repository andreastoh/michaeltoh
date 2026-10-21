import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function ThankYou() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-8 pt-32 pb-16">
        <div className="text-center max-w-xl">
          <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">Message Sent</span>
          <h1 className="font-headline text-4xl md:text-6xl text-primary mb-6">
            Thank <span className="italic font-normal">you.</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10">
            Your message has been received. I'll get back to you as soon as I can.
          </p>
          <Link
            to="/"
            className="font-label text-sm tracking-widest uppercase text-outline hover:text-primary transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

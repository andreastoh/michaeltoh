import { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { events, type ArtEvent } from '../data/events';

/** Today's date in Singapore, as YYYY-MM-DD. */
function singaporeToday() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Singapore' }).format(new Date());
}

export function Events() {
  // The page is pre-rendered at build time, so start from the build date and
  // switch to the visitor's real date once the page has loaded.
  const [today, setToday] = useState<string>(__BUILD_DATE__);
  useEffect(() => {
    setToday(singaporeToday());
  }, []);

  const upcoming = events
    .filter((e) => e.endDate >= today)
    .sort((a, b) => a.endDate.localeCompare(b.endDate));
  const past = events
    .filter((e) => e.endDate < today)
    .sort((a, b) => b.endDate.localeCompare(a.endDate));
  const [featured, ...otherUpcoming] = upcoming;

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-16 px-8 max-w-[1920px] mx-auto w-full">
        <header className="mb-24 max-w-3xl">
          <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">Exhibitions & Workshops</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">Current & <br/><span className="italic font-normal">Upcoming.</span></h1>
          <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed">
            Join me in exploring the spaces between objects. Discover upcoming exhibitions, gallery talks, and intensive masterclasses.
          </p>
        </header>

        {featured ? (
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {featured.image && (
                <div className="lg:col-span-5 relative overflow-hidden bg-surface-container-low lg:bg-transparent group shadow-2xl lg:shadow-none">
                  <img
                    src={featured.image}
                    alt={`${featured.title} exhibition poster`}
                    className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              )}
              <div className={`${featured.image ? 'lg:col-span-7' : 'lg:col-span-12'} flex flex-col justify-center`}>
                <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">Featured Event</span>
                <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6 leading-tight">{featured.title}</h2>
                <div className="mb-8 space-y-2">
                  <p className="font-label text-sm tracking-widest uppercase text-primary">{featured.date}</p>
                  <p className="font-body text-on-surface-variant text-sm">{featured.location}</p>
                </div>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </div>
            {otherUpcoming.length > 0 && (
              <div className="space-y-16 mt-24">
                {otherUpcoming.map((event) => (
                  <EventRow key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mb-32 border-t border-outline-variant/20 pt-8 max-w-3xl">
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
              There are no upcoming events at the moment. New exhibitions are announced on Instagram first.
            </p>
            <a
              href="https://www.instagram.com/michael_jc_toh/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-label uppercase text-xs tracking-[0.2em] text-primary hover:text-on-surface transition-colors"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" /> Follow on Instagram
            </a>
          </div>
        )}

        {past.length > 0 && (
          <div>
            <h2 className="font-headline text-4xl text-on-surface mb-16">Past <span className="italic text-primary font-normal">Events.</span></h2>
            <div className="space-y-16">
              {past.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function EventRow({ event }: { event: ArtEvent }) {
  return (
    <div className="group border-t border-outline-variant/20 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-3">
        <p className="font-label text-sm tracking-widest uppercase text-primary mb-2">{event.date}</p>
        <p className="font-body text-on-surface-variant text-sm">{event.location}</p>
      </div>
      <div className={event.image ? 'md:col-span-6' : 'md:col-span-9'}>
        <h3 className="font-headline text-3xl text-on-surface mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
        <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
          {event.description}
        </p>
      </div>
      {event.image && (
        <div className="md:col-span-3">
          <img
            src={event.image}
            alt={`${event.title} exhibition poster`}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-h-80 object-contain"
          />
        </div>
      )}
    </div>
  );
}

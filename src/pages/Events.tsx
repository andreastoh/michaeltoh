import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowUpRight } from 'lucide-react';
import ehtiopiaImg from '../img/ehtiopia.png';

const upcomingEvent = {
  id: "upcoming-1",
  title: "Ethiopia: In Between",
  date: "March 26 - March 31, 2026",
  location: "The Art Space SG, Singapore",
  description: "A Solo Photography Exhibition by Michael Toh. Over the course of 14 days, Michael traveled deep into the heart of Ethiopia, immersing himself in the daily lives and cultures of 8 distinct tribes. This exhibition captures the raw, unfiltered essence of his journey, documenting the profound connections and fleeting moments found in between.",
  image: ehtiopiaImg,
  link: "#"
};

const pastEvents = [
  {
    id: "past-1",
    title: "Spring Couplets Exhibition 2026",
    date: "January 29 - February 2, 2026",
    location: "Singapore Financial Centre, Singapore",
    description: "In celebration of Tung Ann Association's 95th Anniversary, over a hundred calligraphers and school students will showcase their spring couplets over 4 days.",
    link: "#"
  },
  {
    id: "past-2",
    title: "《如愿之缤纷华艺》2025年第二季",
    date: "December 20 - December 22, 2024",
    location: "The Art Space SG, Singapore",
    description: "本活动旨在提倡并推广新加坡民间文艺。活动每一季将邀请数位文艺达人展出高水平艺术作品，以及著名艺术家、作家、音乐家在展览期间呈献精彩节目，大家相互交流，相得益彰。活动也借此吸引各界人士前来欣赏作品、观赏表演，并鼓励素人艺术家继续创作、绽放才艺。",
    link: "#"
  },
  {
    id: "past-3",
    title: "Mid Autumn at 0211",
    date: "September 15, 2024",
    location: "Artualize, Singapore",
    description: "An intimate gathering and celebration of the Mid Autumn Festival. Join for Tea, mooncakes and art",
    link: "#"
  }
];

export function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        {/* Featured Upcoming Event */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative overflow-hidden bg-surface-container-low lg:bg-transparent group shadow-2xl lg:shadow-none">
              <img 
                src={upcomingEvent.image} 
                alt={upcomingEvent.title} 
                className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-label text-primary uppercase tracking-[0.2em] mb-4 block text-xs">Featured Event</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6 leading-tight">{upcomingEvent.title}</h2>
              <div className="mb-8 space-y-2">
                <p className="font-label text-sm tracking-widest uppercase text-primary">{upcomingEvent.date}</p>
                <p className="font-body text-on-surface-variant text-sm">{upcomingEvent.location}</p>
              </div>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                {upcomingEvent.description}
              </p>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="font-headline text-4xl text-on-surface mb-16">Past <span className="italic text-primary font-normal">Events.</span></h2>
          <div className="space-y-16">
            {pastEvents.map((event) => (
              <div key={event.id} className="group border-t border-outline-variant/20 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="font-label text-sm tracking-widest uppercase text-primary mb-2">{event.date}</p>
                  <p className="font-body text-on-surface-variant text-sm">{event.location}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-headline text-3xl text-on-surface mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

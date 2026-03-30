import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import moonImg from '../shop/moon.jpg';
import calli1Img from '../shop/calli1.png';
import calli2Img from '../shop/calli2.png';

const products = [
  {
    id: 1,
    title: "Lunar Veil: The Departing Shadow",
    type: "Print",
    price: "$300",
    image: moonImg,
    description: "Shot on the 2026 CNY Lantern Festival（元宵节）lunar eclipse. It was too cloudy during the full eclipse. When the sky was clearer, the shadow of the Earth was on its way out of the moon."
  },
  {
    id: 2,
    title: "风雅颂 (fēng yǎ sòng)",
    type: "Hanging Scroll",
    price: "$5000",
    image: calli1Img,
    description: "A classical phrase from the Book of Songs. Representing folk expression, refined court culture, and ceremonial hymns, the piece embodies the full spectrum of poetic tradition. Rendered in bold brushstrokes on a minimalist backdrop, it conveys a sense of cultural depth, balance, and timeless elegance—making it both an artistic statement and a reflection of literary heritage."
  },
  {
    id: 3,
    title: "Masterful Brush: A Celebration of New Year and Artistry",
    type: "Hanging Scroll",
    price: "$5000",
    image: calli2Img,
    description: "This traditional Chinese hanging scroll features a five-character couplet rendered in expressive, semi-cursive calligraphy. The black ink stands out against a vibrant red background adorned with subtle gold dragon-patterned \"Xuan\" paper medallions.\nOn the right, the text “笔走龙蛇资雅韵” (Bǐ zǒu lóng shé zī yǎ yùn) poetically describes the calligrapher’s fluid, powerful brushstrokes as moving like \"dragons and snakes.\" On the left, “诗题福寿贺新春” (Shī tí fú shòu hè xīn chūn) expresses heartfelt wishes for longevity and happiness while welcoming the arrival of Spring. Together, the scroll serves as both a sophisticated piece of art and an auspicious charm for a prosperous New Year."
  }
];

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
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-transparent overflow-hidden mb-6 relative flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors">{product.title}</h3>
                  <span className="font-label text-sm tracking-widest text-primary">{product.price}</span>
                </div>
                <p className="font-label text-xs tracking-widest uppercase text-outline-variant mb-4">{product.type}</p>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

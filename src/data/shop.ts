import moonImg from '../shop/moon.webp';
import calli1Img from '../shop/calli1.webp';
import calli2Img from '../shop/calli2.webp';

export interface Product {
  id: number;
  title: string;
  type: string;
  /** Shown on the page as written, e.g. "S$300". */
  price: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Lunar Veil: The Departing Shadow",
    type: "Print",
    price: "S$300",
    image: moonImg,
    description: "Shot on the 2026 CNY Lantern Festival（元宵节）lunar eclipse. It was too cloudy during the full eclipse. When the sky was clearer, the shadow of the Earth was on its way out of the moon."
  },
  {
    id: 2,
    title: "风雅颂 (fēng yǎ sòng)",
    type: "Hanging Scroll",
    price: "S$5,000",
    image: calli1Img,
    description: "A classical phrase from the Book of Songs. Representing folk expression, refined court culture, and ceremonial hymns, the piece embodies the full spectrum of poetic tradition. Rendered in bold brushstrokes on a minimalist backdrop, it conveys a sense of cultural depth, balance, and timeless elegance—making it both an artistic statement and a reflection of literary heritage."
  },
  {
    id: 3,
    title: "Masterful Brush: A Celebration of New Year and Artistry",
    type: "Hanging Scroll",
    price: "S$5,000",
    image: calli2Img,
    description: "This traditional Chinese hanging scroll features a five-character couplet rendered in expressive, semi-cursive calligraphy. The black ink stands out against a vibrant red background adorned with subtle gold dragon-patterned \"Xuan\" paper medallions.\nOn the right, the text “笔走龙蛇资雅韵” (Bǐ zǒu lóng shé zī yǎ yùn) poetically describes the calligrapher’s fluid, powerful brushstrokes as moving like \"dragons and snakes.\" On the left, “诗题福寿贺新春” (Sī tí fú shòu hè xīn chūn) expresses heartfelt wishes for longevity and happiness while welcoming the arrival of Spring. Together, the scroll serves as both a sophisticated piece of art and an auspicious charm for a prosperous New Year."
  }
];

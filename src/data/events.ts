import ehtiopiaImg from '../img/ehtiopia.webp';

export interface ArtEvent {
  id: string;
  title: string;
  /** Shown on the page as written. */
  date: string;
  /** First day of the event (YYYY-MM-DD). Used to tell Google about the event. */
  startDate: string;
  /** Last day of the event (YYYY-MM-DD). After this day it moves to "Past Events". */
  endDate: string;
  location: string;
  description: string;
  image?: string;
}

// Add new events here. They are sorted and split into upcoming/past automatically.
export const events: ArtEvent[] = [
  {
    id: "ethiopia-in-between",
    title: "Ethiopia: In Between",
    date: "March 26 - March 31, 2026",
    startDate: "2026-03-26",
    endDate: "2026-03-31",
    location: "The Art Space SG, Singapore",
    description: "A Solo Photography Exhibition by Michael Toh. Over the course of 14 days, Michael traveled deep into the heart of Ethiopia, immersing himself in the daily lives and cultures of 8 distinct tribes. This exhibition captures the raw, unfiltered essence of his journey, documenting the profound connections and fleeting moments found in between.",
    image: ehtiopiaImg,
  },
  {
    id: "spring-couplets-2026",
    title: "Spring Couplets Exhibition 2026",
    date: "January 29 - February 2, 2026",
    startDate: "2026-01-29",
    endDate: "2026-02-02",
    location: "Singapore Financial Centre, Singapore",
    description: "In celebration of Tung Ann Association's 95th Anniversary, over a hundred calligraphers and school students will showcase their spring couplets over 4 days.",
  },
  {
    id: "ruyuan-huayi-2025-s2",
    title: "《如愿之缤纷华艺》2025年第二季",
    date: "December 20 - December 22, 2024",
    startDate: "2024-12-20",
    endDate: "2024-12-22",
    location: "The Art Space SG, Singapore",
    description: "本活动旨在提倡并推广新加坡民间文艺。活动每一季将邀请数位文艺达人展出高水平艺术作品，以及著名艺术家、作家、音乐家在展览期间呈献精彩节目，大家相互交流，相得益彰。活动也借此吸引各界人士前来欣赏作品、观赏表演，并鼓励素人艺术家继续创作、绽放才艺。",
  },
  {
    id: "mid-autumn-0211",
    title: "Mid Autumn at 0211",
    date: "September 15, 2024",
    startDate: "2024-09-15",
    endDate: "2024-09-15",
    location: "Artualize, Singapore",
    description: "An intimate gathering and celebration of the Mid Autumn Festival. Join for Tea, mooncakes and art",
  },
];

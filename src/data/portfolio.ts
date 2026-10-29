import scrollwallImg from '../img/series1/scrollwall.webp';
import birdImg from '../img/series2/bird.webp';
import poemImg from '../img/series1/poem.webp';
import inkImg from '../img/series1/ink.webp';
import circleImg from '../img/series1/circle.webp';
import craneImg from '../img/series2/crane.webp';
import ladyImg from '../img/series2/lady.webp';
import camelImg from '../img/vol1/camel.webp';
import cheetahImg from '../img/vol2/cheetah.webp';
import leaderImg from '../img/vol3/leader.webp';
import orchestraImg from '../img/vol4/orchestra.webp';
import f1Img from '../img/vol5/f1.webp';
import airshowImg from '../img/vol5/airshow.webp';
import frisbeeImg from '../img/vol5/frisbee.webp';
import sprintImg from '../img/vol5/sprint.webp';

// Vol 1
import boatImg from '../img/vol1/boat.webp';
import bromoImg from '../img/vol1/bromo.webp';
import farmImg from '../img/vol1/farm.webp';
import goldengateImg from '../img/vol1/goldengate.webp';
import hkImg from '../img/vol1/hk.webp';
import japanImg from '../img/vol1/japan.webp';
import milkyImg from '../img/vol1/milky.webp';
import palmImg from '../img/vol1/palm.webp';
import seattleImg from '../img/vol1/seattle.webp';
import templeImg from '../img/vol1/temple.webp';

// Vol 2
import craneVol2Img from '../img/vol2/crane.webp';
import flycatcherImg from '../img/vol2/flycatcher.webp';
import hopperImg from '../img/vol2/hopper.webp';
import leopardImg from '../img/series2/leopard.webp';
import otterImg from '../img/vol2/otter.webp';
import rampageImg from '../img/vol2/rampage.webp';
import spiderImg from '../img/vol2/spider.webp';
import topiImg from '../img/vol2/topi.webp';
import vultureImg from '../img/vol2/vulture.webp';
import cheetah2Img from '../img/vol2/cheetah2.webp';

// Vol 3
import businessImg from '../img/vol3/business.webp';
import captainImg from '../img/vol3/captain.webp';
import fishermanImg from '../img/vol3/fisherman.webp';
import gradImg from '../img/vol3/grad.webp';
import grandpaImg from '../img/vol3/grandpa.webp';
import padongImg from '../img/vol3/padong.webp';
import studentImg from '../img/vol3/student.webp';
import suitImg from '../img/vol3/suit.webp';
import thaiImg from '../img/vol3/thai.webp';
import workerImg from '../img/vol3/worker.webp';

// Vol 4
import colorImg from '../img/vol4/color.webp';
import danceImg from '../img/vol4/dance.webp';
import indianImg from '../img/vol4/indian.webp';
import indianmanImg from '../img/vol4/indianman.webp';
import malayImg from '../img/vol4/malay.webp';
import sifaImg from '../img/vol4/sifa.webp';
import speechImg from '../img/vol4/speech.webp';
import violinImg from '../img/vol4/violin.webp';
import yogaImg from '../img/vol4/yoga.webp';

// Vol 5
import bikeImg from '../img/vol5/bike.webp';
import waterskiImg from '../img/vol5/waterski.webp';

export interface VolumeImage {
  id: string;
  url: string;
  alt: string;
}

export interface Volume {
  id: string;
  volumeNumber: string;
  title: string;
  description: string;
  /** The kind of work, in words people search for (used in Google titles). */
  genre: string;
  /** Short description of the cover image. */
  coverAlt: string;
  year: string;
  coverImage: string;
  images: VolumeImage[];
}

export const volumes: Volume[] = [
  {
    id: "landscapes",
    genre: "Landscape & Travel Photography",
    coverAlt: "Camel caravan silhouetted beneath snow-capped mountains",
    volumeNumber: "Volume I",
    title: "Landscapes",
    description: "A curated selection of visual narratives, exploring the intersection of light, silence, and the human spirit across diverse landscapes.",
    year: "2023",
    coverImage: camelImg,
    images: [
      { id: "l1", url: boatImg, alt: "Yachts in a marina reflected in still water at sunrise" },
      { id: "l2", url: bromoImg, alt: "Mount Bromo and Mount Semeru above the clouds before dawn, East Java, Indonesia" },
      { id: "l3", url: farmImg, alt: "Green rice fields beside a wooden farmhouse under a cloudy sky" },
      { id: "l4", url: goldengateImg, alt: "Golden Gate Bridge under a clear blue sky, San Francisco" },
      { id: "l5", url: hkImg, alt: "Hong Kong skyline and Victoria Harbour at night" },
      { id: "l6", url: japanImg, alt: "Snow-covered thatched farmhouses of Shirakawa-go lit up at dusk, Japan" },
      { id: "l7", url: milkyImg, alt: "The Milky Way over a lit cabin and pine trees at night" },
      { id: "l8", url: palmImg, alt: "Palm tree silhouetted against a golden sunset over the sea" },
      { id: "l9", url: seattleImg, alt: "Seattle skyline and the Space Needle at night" },
      { id: "l10", url: templeImg, alt: "Tiger's Nest Monastery (Paro Taktsang) on a cliffside, Bhutan" }
    ]
  },
  {
    id: "untamed-spirits",
    genre: "Wildlife Photography",
    coverAlt: "Close-up of a cheetah cub's face",
    volumeNumber: "Volume II",
    title: "Untamed Spirits",
    description: "Capturing the raw, unfiltered essence of wildlife in their natural habitats, revealing the delicate balance of the ecosystem.",
    year: "2024",
    coverImage: cheetahImg,
    images: [
      { id: "w1", url: craneVol2Img, alt: "Pair of grey crowned cranes facing each other in tall grass" },
      { id: "w2", url: flycatcherImg, alt: "Paradise flycatcher perched at its nest" },
      { id: "w3", url: hopperImg, alt: "Macro photo of a planthopper nymph with white waxy filaments on a green stem" },
      { id: "w4", url: leopardImg, alt: "Leopard walking through golden savanna grass" },
      { id: "w5", url: otterImg, alt: "Family of smooth-coated otters huddled together at the water's edge" },
      { id: "w6", url: rampageImg, alt: "Herd of wildebeest stampeding through a cloud of dust" },
      { id: "w7", url: spiderImg, alt: "Macro photo of a spider on a dew-covered green leaf" },
      { id: "w8", url: topiImg, alt: "Topi antelope silhouetted on the savanna at sunset" },
      { id: "w9", url: vultureImg, alt: "Vulture in flight with wings spread" },
      { id: "w10", url: cheetah2Img, alt: "Cheetah mother and cub resting on a termite mound" }
    ]
  },
  {
    id: "human-condition",
    genre: "Portrait Photography",
    coverAlt: "Black-and-white portrait of a tribal elder",
    volumeNumber: "Volume III",
    title: "The Human Condition",
    description: "Intimate portraits capturing the raw emotion and vulnerability of the human experience.",
    year: "2024",
    coverImage: leaderImg,
    images: [
      { id: "h1", url: businessImg, alt: "Corporate group photo of a business team in suits" },
      { id: "h2", url: captainImg, alt: "Portrait of a smiling train conductor in his cap" },
      { id: "h3", url: fishermanImg, alt: "Portrait of a fisherman in a turban holding a spear outside a hut" },
      { id: "h4", url: gradImg, alt: "Graduation portrait of a smiling couple in caps and gowns" },
      { id: "h5", url: grandpaImg, alt: "Portrait of an elderly man in a traditional robe and hat" },
      { id: "h6", url: padongImg, alt: "Portrait of a Kayan (Padaung) woman wearing brass neck rings" },
      { id: "h7", url: studentImg, alt: "Close-up portrait of a young student" },
      { id: "h8", url: suitImg, alt: "Executive portrait of a man in a suit seated in a leather armchair" },
      { id: "h9", url: thaiImg, alt: "Hill tribe mother in a pink headscarf carrying her baby, Thailand" },
      { id: "h10", url: workerImg, alt: "Portrait of a weathered worker in a cap" }
    ]
  },
  {
    id: "collective-memory",
    genre: "Event & Performance Photography",
    coverAlt: "Orchestra and choir performing in a concert hall",
    volumeNumber: "Volume IV",
    title: "Collective Memory",
    description: "Documenting the shared experiences, celebrations, and pivotal moments that weave the fabric of our communities.",
    year: "2025",
    coverImage: orchestraImg,
    images: [
      { id: "e1", url: colorImg, alt: "Dancers in colourful costumes performing on stage under coloured lights" },
      { id: "e2", url: danceImg, alt: "Thousand-Hand Guanyin dance performance in gold costume" },
      { id: "e3", url: indianImg, alt: "Actors in traditional Indian dress performing a stage play" },
      { id: "e4", url: indianmanImg, alt: "Male dancer performing classical Indian hand gestures against a black background" },
      { id: "e5", url: malayImg, alt: "Malay mothers with a young girl in traditional costume at a community celebration" },
      { id: "e6", url: sifaImg, alt: "Aerial acrobats on a giant wheel at the Singapore International Festival of Arts" },
      { id: "e7", url: speechImg, alt: "Storyteller performing to a seated audience in a black box theatre" },
      { id: "e8", url: violinImg, alt: "Young violinist performing in an orchestra" },
      { id: "e9", url: yogaImg, alt: "Mass outdoor yoga session on a lawn near Marina Bay Sands, Singapore" }
    ]
  },
  {
    id: "kinetic-energy",
    genre: "Sports & Action Photography",
    coverAlt: "Formula 1 car racing at speed",
    volumeNumber: "Volume V",
    title: "Kinetic Energy",
    description: "Freezing the peak of motion and the intensity of action, where time stands still but the energy continues to flow.",
    year: "2025",
    coverImage: f1Img,
    images: [
      { id: "a1", url: airshowImg, alt: "Aerobatic jets trailing red, white and blue smoke at an airshow" },
      { id: "a2", url: frisbeeImg, alt: "Mud-covered ultimate frisbee player throwing a disc" },
      { id: "a3", url: sprintImg, alt: "Sprinters racing on the track at the Singapore Sports Hub" },
      { id: "a4", url: bikeImg, alt: "Road cyclist racing past with a motion-blurred background" },
      { id: "a5", url: waterskiImg, alt: "Water skier carving through a wall of spray" }
    ]
  }
];

export const calligraphyWorks: Volume[] = [
  {
    id: "zen-mind",
    genre: "Chinese Calligraphy",
    coverAlt: "Hanging scroll of the calligraphy 道法自然 in a wooden room",
    title: "The Written Spirit",
    volumeNumber: "Series I",
    year: "2024",
    coverImage: scrollwallImg,
    description: "A series of minimalist CaoShu (Cursive Script) pieces exploring the concept of emptiness and presence. Ink on vintage Xuan paper.",
    images: [
      { id: "s1-1", url: poemImg, alt: "Classical Chinese poem written in regular script calligraphy on gold-flecked paper" },
      { id: "s1-2", url: inkImg, alt: "Chinese calligraphy of the characters 戏墨 (playing with ink) in cursive script" },
      { id: "s1-3", url: circleImg, alt: "The Heart Sutra written in small Chinese calligraphy within a circle" }
    ]
  },
  {
    id: "rhythm-of-nature",
    genre: "Chinese Ink Painting & Calligraphy",
    coverAlt: "Chinese ink painting of a kingfisher on a lotus flower",
    title: "Visions in Ink",
    volumeNumber: "Series II",
    year: "2025",
    coverImage: birdImg,
    description: "Expressive interpretations of classical Chinese poetry focusing on natural elements. Utilizing dynamic brushwork to emulate the flow of water and wind.",
    images: [
      { id: "s2-1", url: craneImg, alt: "Chinese ink painting of a red-crowned crane with the calligraphy 吉祥安康" },
      { id: "s2-2", url: ladyImg, alt: "Chinese ink painting of a lady beneath the moon with the verse 但愿人长久 千里共婵娟" }
    ]
  }
];

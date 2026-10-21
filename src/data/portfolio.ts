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
  year: string;
  coverImage: string;
  images: VolumeImage[];
}

export const volumes: Volume[] = [
  {
    id: "landscapes",
    volumeNumber: "Volume I",
    title: "Landscapes",
    description: "A curated selection of visual narratives, exploring the intersection of light, silence, and the human spirit across diverse landscapes.",
    year: "2023",
    coverImage: camelImg,
    images: [
      { id: "l1", url: boatImg, alt: "Boat" },
      { id: "l2", url: bromoImg, alt: "Bromo" },
      { id: "l3", url: farmImg, alt: "Farm" },
      { id: "l4", url: goldengateImg, alt: "Golden Gate" },
      { id: "l5", url: hkImg, alt: "Hong Kong" },
      { id: "l6", url: japanImg, alt: "Japan" },
      { id: "l7", url: milkyImg, alt: "Milky Way" },
      { id: "l8", url: palmImg, alt: "Palm" },
      { id: "l9", url: seattleImg, alt: "Seattle" },
      { id: "l10", url: templeImg, alt: "Temple" }
    ]
  },
  {
    id: "untamed-spirits",
    volumeNumber: "Volume II",
    title: "Untamed Spirits",
    description: "Capturing the raw, unfiltered essence of wildlife in their natural habitats, revealing the delicate balance of the ecosystem.",
    year: "2024",
    coverImage: cheetahImg,
    images: [
      { id: "w1", url: craneVol2Img, alt: "Crane" },
      { id: "w2", url: flycatcherImg, alt: "Flycatcher" },
      { id: "w3", url: hopperImg, alt: "Hopper" },
      { id: "w4", url: leopardImg, alt: "Leopard" },
      { id: "w5", url: otterImg, alt: "Otter" },
      { id: "w6", url: rampageImg, alt: "Rampage" },
      { id: "w7", url: spiderImg, alt: "Spider" },
      { id: "w8", url: topiImg, alt: "Topi" },
      { id: "w9", url: vultureImg, alt: "Vulture" },
      { id: "w10", url: cheetah2Img, alt: "Cheetah" }
    ]
  },
  {
    id: "human-condition",
    volumeNumber: "Volume III",
    title: "The Human Condition",
    description: "Intimate portraits capturing the raw emotion and vulnerability of the human experience.",
    year: "2024",
    coverImage: leaderImg,
    images: [
      { id: "h1", url: businessImg, alt: "Business" },
      { id: "h2", url: captainImg, alt: "Captain" },
      { id: "h3", url: fishermanImg, alt: "Fisherman" },
      { id: "h4", url: gradImg, alt: "Graduation" },
      { id: "h5", url: grandpaImg, alt: "Grandpa" },
      { id: "h6", url: padongImg, alt: "Padong" },
      { id: "h7", url: studentImg, alt: "Student" },
      { id: "h8", url: suitImg, alt: "Suit" },
      { id: "h9", url: thaiImg, alt: "Thai" },
      { id: "h10", url: workerImg, alt: "Worker" }
    ]
  },
  {
    id: "collective-memory",
    volumeNumber: "Volume IV",
    title: "Collective Memory",
    description: "Documenting the shared experiences, celebrations, and pivotal moments that weave the fabric of our communities.",
    year: "2025",
    coverImage: orchestraImg,
    images: [
      { id: "e1", url: colorImg, alt: "Color" },
      { id: "e2", url: danceImg, alt: "Dance" },
      { id: "e3", url: indianImg, alt: "Indian" },
      { id: "e4", url: indianmanImg, alt: "Indian Man" },
      { id: "e5", url: malayImg, alt: "Malay" },
      { id: "e6", url: sifaImg, alt: "SIFA" },
      { id: "e7", url: speechImg, alt: "Speech" },
      { id: "e8", url: violinImg, alt: "Violin" },
      { id: "e9", url: yogaImg, alt: "Yoga" }
    ]
  },
  {
    id: "kinetic-energy",
    volumeNumber: "Volume V",
    title: "Kinetic Energy",
    description: "Freezing the peak of motion and the intensity of action, where time stands still but the energy continues to flow.",
    year: "2025",
    coverImage: f1Img,
    images: [
      { id: "a1", url: airshowImg, alt: "Airshow in motion" },
      { id: "a2", url: frisbeeImg, alt: "Frisbee action" },
      { id: "a3", url: sprintImg, alt: "Sprint action" },
      { id: "a4", url: bikeImg, alt: "Bike action" },
      { id: "a5", url: waterskiImg, alt: "Waterski action" }
    ]
  }
];

export const calligraphyWorks: Volume[] = [
  {
    id: "zen-mind",
    title: "The Written Spirit",
    volumeNumber: "Series I",
    year: "2024",
    coverImage: scrollwallImg,
    description: "A series of minimalist CaoShu (Cursive Script) pieces exploring the concept of emptiness and presence. Ink on vintage Xuan paper.",
    images: [
      { id: "s1-1", url: poemImg, alt: "Poem Calligraphy" },
      { id: "s1-2", url: inkImg, alt: "Ink Calligraphy" },
      { id: "s1-3", url: circleImg, alt: "Circle Calligraphy" }
    ]
  },
  {
    id: "rhythm-of-nature",
    title: "Visions in Ink",
    volumeNumber: "Series II",
    year: "2025",
    coverImage: birdImg,
    description: "Expressive interpretations of classical Chinese poetry focusing on natural elements. Utilizing dynamic brushwork to emulate the flow of water and wind.",
    images: [
      { id: "s2-1", url: craneImg, alt: "Crane Calligraphy" },
      { id: "s2-2", url: ladyImg, alt: "Lady Calligraphy" }
    ]
  }
];

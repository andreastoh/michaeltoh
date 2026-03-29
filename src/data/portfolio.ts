import scrollwallImg from '../img/series1/scrollwall.png';
import birdImg from '../img/series2/bird.png';
import poemImg from '../img/series1/poem.png';
import inkImg from '../img/series1/ink.png';
import circleImg from '../img/series1/circle.png';
import craneImg from '../img/series2/crane.png';
import ladyImg from '../img/series2/lady.png';
import camelImg from '../img/vol1/camel.png';
import cheetahImg from '../img/vol2/cheetah.png';
import leaderImg from '../img/vol3/leader.png';
import orchestraImg from '../img/vol4/orchestra.png';
import f1Img from '../img/vol5/f1.png';
import airshowImg from '../img/vol5/airshow.jpg';
import frisbeeImg from '../img/vol5/frisbee.jpg';
import sprintImg from '../img/vol5/sprint.jpg';

// Vol 1
import boatImg from '../img/vol1/boat.jpg';
import bromoImg from '../img/vol1/bromo.jpg';
import farmImg from '../img/vol1/farm.jpg';
import goldengateImg from '../img/vol1/goldengate.jpg';
import hkImg from '../img/vol1/hk.jpg';
import japanImg from '../img/vol1/japan.jpg';
import milkyImg from '../img/vol1/milky.jpg';
import palmImg from '../img/vol1/palm.jpg';
import seattleImg from '../img/vol1/seattle.jpg';
import templeImg from '../img/vol1/temple.jpg';

// Vol 2
import craneVol2Img from '../img/vol2/crane.jpg';
import flycatcherImg from '../img/vol2/flycatcher.jpg';
import hopperImg from '../img/vol2/hopper.jpg';
import leopardImg from '../img/series2/leopard.jpg';
import otterImg from '../img/vol2/otter.jpg';
import rampageImg from '../img/vol2/rampage.jpg';
import spiderImg from '../img/vol2/spider.jpg';
import topiImg from '../img/vol2/topi.jpg';
import vultureImg from '../img/vol2/vulture.jpg';
import cheetah2Img from '../img/vol2/cheetah2.jpg';

// Vol 3
import businessImg from '../img/vol3/business.jpg';
import captainImg from '../img/vol3/captain.jpg';
import fishermanImg from '../img/vol3/fisherman.jpg';
import gradImg from '../img/vol3/grad.jpg';
import grandpaImg from '../img/vol3/grandpa.jpg';
import padongImg from '../img/vol3/padong.jpg';
import studentImg from '../img/vol3/student.jpg';
import suitImg from '../img/vol3/suit.jpg';
import thaiImg from '../img/vol3/thai.jpg';
import workerImg from '../img/vol3/worker.jpg';

// Vol 4
import colorImg from '../img/vol4/color.jpg';
import danceImg from '../img/vol4/dance.jpg';
import indianImg from '../img/vol4/indian.jpg';
import indianmanImg from '../img/vol4/indianman.jpg';
import malayImg from '../img/vol4/malay.jpg';
import sifaImg from '../img/vol4/sifa.jpg';
import speechImg from '../img/vol4/speech.jpg';
import violinImg from '../img/vol4/violin.jpg';
import yogaImg from '../img/vol4/yoga.jpg';

// Vol 5
import bikeImg from '../img/vol5/bike.jpg';
import waterskiImg from '../img/vol5/waterski.jpg';

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

export const calligraphyWorks = [
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

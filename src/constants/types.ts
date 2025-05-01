interface NavLink {
  name: string;
  link: string;
}

interface WordItem {
  text: string;
  imgPath: string;
}

interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

interface LogoIcon {
  imgPath: string;
}

interface Ability {
  imgPath: string;
  title: string;
  desc: string;
}

interface TechStackImg {
  name: string;
  imgPath: string;
}

interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
  position: [number, number, number];
}

interface ExpCard {
  review: string;
  imgPath: string;
  url?: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

interface ExpLogo {
  name: string;
  imgPath: string;
}

interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

interface SocialImg {
  name: string;
  imgPath: string;
}

export type {
  NavLink,
  WordItem,
  CounterItem,
  LogoIcon,
  Ability,
  TechStackImg,
  TechStackIcon,
  ExpCard,
  ExpLogo,
  Testimonial,
  SocialImg,
};
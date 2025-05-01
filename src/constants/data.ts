import {
  Ability,
  CounterItem,
  ExpCard,
  ExpLogo,
  LogoIcon,
  NavLink,
  SocialImg,
  TechStackIcon,
  TechStackImg,
  Testimonial,
  WordItem,
} from "./types";

const navLinks: NavLink[] = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

// const words: WordItem[] = [
//   { text: "Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Concepts", imgPath: "/images/concepts.svg" },
//   { text: "Designs", imgPath: "/images/designs.svg" },
//   { text: "Code", imgPath: "/images/code.svg" },
//   { text: "Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Concepts", imgPath: "/images/concepts.svg" },
//   { text: "Designs", imgPath: "/images/designs.svg" },
//   { text: "Code", imgPath: "/images/code.svg" },
// ];

const words: WordItem[] = [
  { text: "Spaces", imgPath: "/images/concepts.svg" },
  { text: "Moodboards", imgPath: "/images/designs.svg" },
  { text: "Layouts", imgPath: "/images/concepts.svg" },
  { text: "Textures", imgPath: "/images/textures.svg" },
  { text: "Lighting", imgPath: "/images/ideas.svg" },
  { text: "Furniture", imgPath: "/images/furniture.svg" },
  { text: "Color Palettes", imgPath: "/images/designs.svg" },
  { text: "Ambience", imgPath: "/images/ideas.svg" },
];

const counterItems: CounterItem[] = [
  { value: 10, suffix: "+", label: "Years of Design Excellence" },
  { value: 150, suffix: "+", label: "Satisfied Clients" },
  { value: 200, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Satisfaction Rate" },
];

const logoIconsList: LogoIcon[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities: Ability[] = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs: TechStackImg[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons: TechStackIcon[] = [
  {
    name: "Space Planning",
    modelPath: "/models/blueprint.glb",
    scale: 0.6,
    rotation: [20, 20, 0],
    position: [0, 0, 0],
  },
  {
    name: "3D Visualization",
    modelPath: "/models/3d-cube.glb",
    scale: 1.75,
    rotation: [10, 10, 0],
    position: [0, 0, 0],
  },
  {
    name: "Sustainable Design",
    modelPath: "/models/leaf.glb",
    scale: 4,
    rotation: [0.3, -Math.PI / 2, 0],
    position: [0, -2, 0],
  },
  {
    name: "Color & Texture Expertise",
    modelPath: "/models/color-palette.glb",
    scale: 0.3,
    rotation: [20, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Custom Furniture Design",
    modelPath: "/models/chair.glb",
    scale: 2.5,
    rotation: [0.2, 0.5, 0],
    position: [0, -1.5, 0],
  },
];

const expCards: ExpCard[] = [
  {
    review:
      "The team captured our vision perfectly. Our home now feels like a peaceful retreat.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Serenity in Simplicity: A Japanese-Inspired Living Room",
    date: "June 2023",
    responsibilities: [
      "Transformed a cluttered space into a tranquil oasis by blending Japanese aesthetics with modern minimalism.",
      "Selected custom furniture and sustainable materials to ensure a harmonious balance of form and function.",
      "Implemented smart storage solutions and ambient lighting to enhance the room’s serene atmosphere.",
    ],
  },
  {
    review:
      "The new office design has significantly improved our team's morale and efficiency.",
    imgPath: "/images/logo2.png",
    logoPath: "/images/logo2.png",
    title: "Elevating Workspaces: A Luxury Office Transformation",
    date: "September 2022",
    responsibilities: [
      "Designed a high-end office environment that fosters productivity and creativity for employees.",
      "Integrated smart lighting, ergonomic furniture, and bespoke art pieces to create an inspiring workspace.",
      "Collaborated with the client to align the design with their brand identity and employee needs.",
    ],
  },
  {
    review:
      "The cafe’s atmosphere is warm and welcoming, and we love the eco-friendly touches!",
    imgPath: "/images/logo3.png",
    url: "https://www.flaticon.com/free-icon/coffee-cup_6549411",
    logoPath: "/images/logo3.png",
    title: "Green Beans: A Sustainable Cafe Design",
    date: "January 2024",
    responsibilities: [
      "Created an inviting cafe space using recycled materials and energy-efficient lighting to promote sustainability.",
      "Designed a layout that maximizes natural light and encourages community engagement among patrons.",
      "Sourced eco-friendly furniture and decor to reflect the cafe’s commitment to environmental responsibility.",
    ],
  },
];

const expLogos: ExpLogo[] = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Harmony Designs revamped our dining area into an elegant space perfect for entertaining. Their expertise in color coordination and lighting design truly impressed us. We love hosting now!",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Harmony Designs exceeded our expectations with their creativity and professionalism. Our office space now inspires productivity and looks stunning, thanks to their ability to blend functionality with beautiful aesthetics. We’re thrilled!",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "The virtual consultation with Harmony Designs was a game-changer for us. They guided us through every step, making the process seamless and enjoyable. Our newly designed home office now feels both functional and stylish, thanks to their innovative ideas and expertise.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Working with Harmony Designs was a delight. They understood our vision perfectly and created a cozy bedroom retreat that feels like a dream.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "We hired Harmony Designs for our nursery, and they delivered a dreamy, calming space for our baby. Their thoughtful touches and safety-focused design gave us complete peace of mind.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "We were amazed by Harmony Designs’ commitment to sustainability. They redesigned our home using eco-friendly materials, and the result is both stunning and environmentally conscious. We couldn’t be happier with their work!",
    imgPath: "/images/client6.png",
  },
];

const socialImgs: SocialImg[] = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

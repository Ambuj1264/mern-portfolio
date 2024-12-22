import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from "lucide-react";

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: "Meeting Room Booking Management System",
    techStack:
      "Next JS, MongoDB, Redux, Typescript, Tailwind CSS, Express JS, Mongoose",
    imageUrl: "meetingroom.png",
    href: "https://meetingroombooking.vercel.app/",
  },
  {
    id: 2,
    title: "Plutos One BBPS System",
    techStack:
      "Nest JS, MongoDB, React JS, Redux, Typescript, Tailwind CSS, Microservice, Docker, nginx, Kubernetes ",
    imageUrl: "What_is_Bharat_Bill_Payment_System_BBPS_3c9015f280.webp",
    // href: "https://github.com/nwaliaez/eCommerce",
  },
  {
    id: 2,
    title: "Zipaworld logistics",
    techStack:
      "NodeJs, Express, Mongoose, React JS, Redux, Typescript, Tailwind CSS, Microservice, Docker, nginx ",
    imageUrl: "zipa.webp",
    href: "https://github.com/nwaliaez/eCommerce",
  },

  {
    id: 3,
    title: "E-Commerce Site",
    techStack: " React Js, Bootstrap, Redux, Node JS, Express Js, Mongo DB",
    imageUrl: "ecomm.webp",
    href: "https://ambujmern.netlify.app/",
  },
  {
    id: 4,
    title: "Ivr Pavillio ( Tele visit )",
    techStack:
      " React Js, Material UI, Docker , Node JS, Express Js, Postgresql, Microservice, Nginx, Redux",
    imageUrl: "ivr.webp",
    href: "https://ivr.pavillio.com/",
  },
  {
    id: 5,
    title: "Social Motion",
    techStack:
      "Next.js 14, Tailwind Css, Next UI , Asternity UI, Typescript, Stripe",
    imageUrl: "socialmotion.webp",
    href: "https://socialmotion.vercel.app/",
  },
];

export const moreProjects = [
  {
    id: 1,
    title: "Netflix clone",
    techStack:
      "React Js, Material UI, Reduxm, Axios, TMDB API, Styped components ",
    icon: "lottery",
    href: "https://github.com/Ambuj1264/netflix",
  },
  {
    id: 2,
    title: "Amazon Clone",
    techStack: "React Js, Material UI, Reduxm, Axios, Styped components ",
    icon: "lottery",
    href: "https://github.com/nwaliaez/amazon",
  },
  {
    id: 3,
    title: "Full Ecommerce Site",
    techStack: "Node js, Express, Mongodb, React Js, Redux, Bootstrap",
    icon: "lottery",
    href: "https://github.com/Ambuj1264/Full-Mern-Project-with-ecommerce-and-full-login",
  },

  {
    id: 4,
    title: "HeadlinesNow - News App",
    techStack: "React JS, Bootstrap, Axios, News API",
    icon: "lottery",
    href: "https://github.com/Ambuj1264/HeadlinesNow/",
  },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "HTML, CSS",
    src: "/tech/frontend/htmlcss.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "Tailwind",
    src: "/tech/frontend/tailwind.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: "Javascript, Typescript",
    src: "/tech/frontend/jsts.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: "Reactjs",
    src: "/tech/frontend/reactjs.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: "Nextjs 13",
    src: "/tech/frontend/nextjs13.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "NodeJs",
    src: "/tech/backend/nodejs.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "ExpressJs",
    src: "/tech/backend/express.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: "DenoJs",
    src: "/tech/backend/denojs.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: "Next Auth",
    src: "/tech/backend/nextauth.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: "PHP",
    src: "/tech/backend/php.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: "MySQL",
    src: "/tech/database/mysql.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "MongoDB",
    src: "/tech/database/mongo.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "Redis",
    src: "/tech/database/redis.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: "PostgreSQL",
    src: "/tech/database/postgres.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: "Elastic Search",
    src: "/tech/database/elasticSearch.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Docker",
    src: "/tech/devops/docker.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "Kubernetes",
    src: "/tech/devops/k8s.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "GIT",
    src: "/tech/devops/git.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: "Jenkins",
    src: "/tech/devops/jenkins.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: "Terraform",
    src: "/tech/devops/terraform.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 60,
  },
];

export const web3Cards: ISectionCardData[] = [];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Rest API",
    src: "/tech/others/rest.png",
    exp: "1.5 years",
    snippetCount: 1128,
    progress: 90,
  },

  {
    id: 2,
    title: "GraphQl",
    src: "/tech/others/graphql.png",
    exp: "1 year",
    snippetCount: 1128,
    progress: 70,
  },
];

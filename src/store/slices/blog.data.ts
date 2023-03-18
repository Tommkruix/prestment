import { Img1, Img2, Img3 } from "@assets/images/index";
import {
  AboutNumberType,
  BlogType,
  NavMenuType,
  ProfileType,
} from "@utils/types";

const BLOGS: BlogType[] = [
  {
    title: "We are ",
    titleHighlight: "commited.",
    description:
      "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
  },
  {
    title: "We are ",
    titleHighlight: "responsible.",
    description:
      "Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain. ",
  },
  {
    title: "We aim for ",
    titleHighlight: "progress",
    description:
      "Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. ",
  },
];

const ABOUT_NUMBERS: AboutNumberType[] = [
  {
    title: "Cool feature title",
    count: "120m",
  },
  {
    title: "Cool feature title",
    count: "10.000",
  },
  {
    title: "Cool feature title",
    count: "240",
  },
];

const PROFILE: ProfileType[] = [
  {
    image: Img1,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: Img1,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: Img1,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: Img2,
    name: "Dwight Schrute",
    position: "General Manager",
  },
  {
    image: Img3,
    name: "Pam Beetsley",
    position: "General Manager",
  },
  {
    image: Img3,
    name: "Pam Beetsley",
    position: "General Manager",
  },
  {
    image: Img3,
    name: "Pam Beetsley",
    position: "General Manager",
  },
];

export const LIST_MENUS = {
  landings: [
    {
      title: "Home",
    },
    {
      title: "Products",
    },
    {
      title: "Services",
    },
  ],
  company: [
    {
      title: "Home",
    },
    {
      title: "Careers",
      rightLabel: "Hiring!",
    },
    {
      title: "Services",
    },
  ],
  resources: [
    {
      title: "Blog",
    },
    {
      title: "Products",
    },
    {
      title: "Services",
    },
  ],
};

const MENUS: NavMenuType[] = ["Product", "Services", "About"];

const BlogData = {
  blogs: BLOGS,
  aboutNumbers: ABOUT_NUMBERS,
  menus: MENUS,
  profile: PROFILE,
};

export default BlogData;

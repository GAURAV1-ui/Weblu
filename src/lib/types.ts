import { links } from "./data";

export type SectionName = "#home" | "#about" | "#projects" | "#contact";

// export type ProjectInfo = {
//   title: string;
//   description: string;
//   tags: string[];
//   imageUrl: string;
//   link: string;
// };

export type Services = {
  
}

export type Link = {
  nameEng: string;
  hash: SectionName;
};



type About = {
  title: string;
  im: string;
  job: string;
  description: string;
  stacks: string;
  otherStacks: string;
  otherPassion: string;
  conclusion: string;
};
export type Texts = {
  about: About;
};

export type FAQ = {
  question: string;
  answer: string[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  services: {
    title: string;
    description: string;
  }[];
};

export type Project = {
  title: string;
  category: string;
  year: string;
  imageUrl: string;
};


import { Link, FAQ, Project, Category } from "./types";

export const links: Link[] = [
  {
    nameEng: "HOME",
    hash: "#home",
  },
  {
    nameEng: "ABOUT",
    hash: "#about",
  },
  {
    nameEng: "PROJECTS",
    hash: "#projects",
  },
  {
    nameEng: "CONTACT",
    hash: "#contact",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: [
      "We offer a comprehensive range of services including web development, design, and digital marketing.",
      "Our team specializes in creating custom solutions tailored to your business needs."
    ]
  },
  {
    question: "How long does a typical project take?",
    answer: [
      "Project timelines vary depending on scope and complexity.",
      "We provide detailed project plans with clear milestones and deadlines."
    ]
  },
  {
    question: "What is your pricing structure?",
    answer: [
      "We offer flexible pricing options based on project requirements.",
      "Contact us for a detailed quote tailored to your specific needs."
    ]
  },
  {
    question: "Do you provide ongoing support?",
    answer: [
      "Yes, we offer maintenance and support packages for all our services.",
      "Our team is available to help you with any post-launch needs."
    ]
  },
  {
    question: "How do you measure success?",
    answer: [
      "We track key performance indicators specific to your goals.",
      "Regular reporting and analytics help us ensure your success."
    ]
  }
];

export const categories: Category[] = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Custom web solutions for your business needs",
    imageUrl: "/1.jpeg",
    services: [
      {
        title: "Custom Website Development",
        description: "Tailored websites built with modern technologies and best practices"
      },
      {
        title: "E-commerce Solutions",
        description: "Online stores with secure payment gateways and inventory management"
      },
      {
        title: "Web Applications",
        description: "Interactive web applications with responsive design and modern UI/UX"
      }
    ]
  },
  {
    id: "design",
    name: "Design",
    description: "Creative design solutions for your brand",
    imageUrl: "/2.jpeg",
    services: [
      {
        title: "UI/UX Design",
        description: "User-centered design for optimal user experience"
      },
      {
        title: "Brand Identity",
        description: "Complete brand identity design including logo and guidelines"
      },
      {
        title: "Graphic Design",
        description: "Print and digital design for marketing materials"
      }
    ]
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Digital marketing strategies for growth",
    imageUrl: "/4.jpeg",
    services: [
      {
        title: "Social Media Marketing",
        description: "Strategic social media campaigns and content creation"
      },
      {
        title: "SEO Optimization",
        description: "Search engine optimization for better visibility"
      },
      {
        title: "Content Marketing",
        description: "Engaging content strategy and creation"
      }
    ]
  },
  {
    id: "ui-ux",
    name: "UI/UX",
    description: "Creative design solutions for your brand",
    imageUrl: "/5.jpeg",
    services: [
      {
        title: "UI/UX Design",
        description: "User-centered design for optimal user experience"
      },
      {
        title: "Brand Identity",
        description: "Complete brand identity design including logo and guidelines"
      },
      {
        title: "Graphic Design",
        description: "Print and digital design for marketing materials"
      }
    ]
  },
];

export const projects: Project[] = [
  {
    title: "LIGHTRIC MOTORS",
    category: "Web Development",
    year: "2023",
    imageUrl: "/5.jpeg"
  },
  {
    title: "POSITIVE ENERGY",
    category: "Design",
    year: "2023",
    imageUrl: "/2.jpeg"
  },
  {
    title: "XIONG WALL",
    category: "Marketing",
    year: "2023",
    imageUrl: "/3.jpeg"
  },
  {
    title: "HIDEAWAY",
    category: "Web Development",
    year: "2023",
    imageUrl: "/4.jpeg"
  }
];



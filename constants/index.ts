import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";

export const SKILL_DATA = [
  {
    skill_name: "Java",
    image: "js.png", // will fallback gracefully or use icon
    width: 65,
    height: 65,
  },
  {
    skill_name: "Spring Boot",
    image: "node.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML 5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS 3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/shakyasagar166",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shivam-shakya/",
  },
  {
    name: "Email",
    icon: RxEnvelopeClosed,
    link: "mailto:shakyasagar166@gmail.com",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI Resume Builder & ATS Checker",
    badge: "React · Spring Boot · MySQL · Groq AI",
    description:
      "Engineered an AI-powered resume builder and optimizer using React, Spring Boot, and Groq (Llama 3). Features automated 14-point ATS scoring, bullet-point polishing, and dynamic PDF generation; deployed on Render & Vercel using Docker.",
    image: "/projects/resume.png",
    link: "https://github.com/shakyasagar166",
    liveDemo: "https://ai-resume-builder-pi-coral.vercel.app/",
  },
  {
    title: "Food Delivery Application",
    badge: "Java · Spring Boot · Hibernate · MySQL",
    description:
      "Architected a comprehensive RESTful food delivery backend modeling customers, restaurants, menus, and order fulfillment workflows. Integrated an intelligent AI chatbot for customer inquiries and tested with Postman.",
    image: "/projects/food.png",
    link: "https://github.com/shakyasagar166",
  },
  {
    title: "Library Management System",
    badge: "Java · Spring Boot · Hibernate · MySQL",
    description:
      "Built an enterprise-grade library management backend with relational entity mappings for books, users, authors, and genres. Provides high-performance CRUD endpoints and transactional inventory management.",
    image: "/projects/library.png",
    link: "https://github.com/shakyasagar166",
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Development Intern",
    company: "Uncodemy",
    period: "Sep 2026 – Present",
    location: "Noida / Remote",
    points: [
      "Developed an AI-powered Resume Builder using React and Spring Boot, integrating frontend UI components with backend REST APIs.",
      "Built and enhanced company web pages using React as part of a collaborative engineering team.",
      "Designed and implemented backend application functionality and RESTful API integration using Spring Boot.",
      "Contributed to full-stack development tasks, connecting responsive frontend components with microservices.",
    ],
  },
] as const;

export const EDUCATION_DATA = [
  {
    institution: "NITRA Technical Campus, Ghaziabad",
    degree: "B.Tech. in Computer Science and Engineering",
    period: "2023 – 2027 (Pursuing)",
    grade: "CGPA: 6.6",
  },
  {
    institution: "S.S. Memorial Senior Public School",
    degree: "Senior Secondary (CBSE · Class 10th & 12th)",
    period: "Completed",
    grade: "CBSE Board",
  },
] as const;

export const ACHIEVEMENTS_DATA = [
  {
    title: "250–300 DSA Problems Solved",
    platform: "LeetCode",
    description: "Consistent problem solver in Data Structures & Algorithms (Arrays, LinkedLists, Trees, Graphs, DP).",
  },
  {
    title: "Full Stack Development Internship",
    platform: "Uncodemy",
    description: "Hands-on enterprise application development in React and Spring Boot.",
  },
  {
    title: "C & Python Programming Certifications",
    platform: "Udemy",
    description: "Certified proficiency in algorithmic problem solving and scripting.",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Contact Info",
    data: [
      {
        name: "shakyasagar166@gmail.com",
        icon: RxEnvelopeClosed,
        link: "mailto:shakyasagar166@gmail.com",
      },
      {
        name: "+91 9058605348",
        icon: FaPhone,
        link: "tel:+919058605348",
      },
      {
        name: "Ghaziabad, India",
        icon: null,
        link: "#",
      },
    ],
  },
  {
    title: "Social Profiles",
    data: [
      {
        name: "GitHub Profile",
        icon: RxGithubLogo,
        link: "https://github.com/shakyasagar166",
      },
      {
        name: "LinkedIn Profile",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shivam-shakya/",
      },
      {
        name: "LeetCode (250+ Solved)",
        icon: SiLeetcode,
        link: "https://leetcode.com",
      },
    ],
  },
  {
    title: "Technical Stack",
    data: [
      {
        name: "Java & Spring Boot",
        icon: null,
        link: "#skills",
      },
      {
        name: "React & Next.js",
        icon: null,
        link: "#skills",
      },
      {
        name: "Generative AI & LLMs",
        icon: null,
        link: "#skills",
      },
      {
        name: "MySQL & MongoDB",
        icon: null,
        link: "#skills",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/shakyasagar166",
};

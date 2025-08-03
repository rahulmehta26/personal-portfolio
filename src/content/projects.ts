import type { Project } from "../types";

import Zentry from "../assets/zentry.jpg";
import Car_Rental from "../assets/car_rental.jpg";
import Dating from "../assets/dating.jpg";
import Swiggy from "../assets/swiggy.jpg";
import Gifify from "../assets/gifify.jpg";
import Quick_Note from "../assets/note.png";

export const projects: Project[] = [
  {
    title: "Swiggy Clone",
    description:
      "High-performance food delivery app using React.js, Redux Toolkit, and Firebase Authentication with real-time restaurant data retrieval.",
    image: Swiggy,
    technologies: [
      "React.js",
      "Tailwindcss",
      "Redux Toolkit",
      "Firebase",
      "Swiggy API",
    ],
    github: "https://github.com/rahulmehta26/Swiggy-Clone",
    live: "https://swiggy-clone-liard.vercel.app/",
  },

  {
    title: "QuickNote SAAS Landing Page",
    description:
      "QuickNote is a modern, AI-powered note-taking web application built with React, TypeScript, and TailwindCSS. It helps users capture and organize notes efficiently with a clean, responsive UI. The project emphasizes productivity through intuitive design and minimalistic interactions.",
    image: Quick_Note,
    technologies: ["TypeScript", "React", "Tailwind css", "Framer Motion"],
    github: "https://github.com/rahulmehta26/QuickNote",
    live: "https://quick-note-m7v4.vercel.app/",
  },

  {
    title: "Gifify",
    description:
      "Gifify is a web app for exploring and sharing GIFs and stickers, offering a fun and interactive experience.",
    image: Gifify,
    technologies: ["React", "Tailwind css"],
    github: "https://github.com/rahulmehta26/Gifify",
    live: "",
  },

  {
    title: "Zentry",
    description:
      "A recreation of the Zentry website with interactive animations using Framer Motion, delivering a seamless user experience.",
    image: Zentry,
    technologies: ["React", "Tailwind css", "Framer Motion"],
    github: "https://github.com/rahulmehta26/Zentry",
    live: "https://zentry-beta-steel.vercel.app/",
  },

  {
    title: "Dating Professional App",
    description:
      "React Native professional networking app with matching system based on hobbies, industry, and skills, increasing connection quality by 60%.",
    image: Dating,
    technologies: ["React Native", "Redux Toolkit", "Authentication"],
    github: "",
    live: "",
  },
  {
    title: "Car Rental App",
    description:
      "Vehicle rental platform using React Native with geolocation to help users find local rental stations and browse cars on a map.",
    image: Car_Rental,
    technologies: ["React Native", "Redux Toolkit", "Geolocation", "Maps API"],
    github: "",
    live: "",
  },
];

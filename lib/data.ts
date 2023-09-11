import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import workonprogress from "@/public/working_progress.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Java and React Camp",
    location: "In Youtube",
    description:
      "In the 2021, I finished nearly 30 hours Java & React camp in Youtube. It given by Engin Demiroğ. I have learned about Java Back-End development and React-Redux Front-End development",
    icon: React.createElement(HiOutlineLightBulb),
    date: "2021",
  },
  {
    title: "Intern Engineer",
    location: "Adana, Turkey",
    description:
      "I worked as a intern engineer for 1 months. I learned how to make PLC setup and how to use PLC.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Intern Engineer",
    location: "Antalya, Turkey",
    description:
      "I worked as a intern engineer for 1 months. I learned MatPlotLib and Pandas libraries in Python.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Highschool Student",
    location: "Antalya, Turkey",
    description:
      "I graduated after 5(4+1 Preparatory Class) years of studying and I become second in Formal Education with 3.41 GPA. I studied Electrical-Electronics Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2023",
  },


] as const;

export const projectsData = [
  {
    title: "Emotions Classification",
    description:
      "In this project, i use Keras for classification of three face emonitions",
    tags: ["Python", "Keras", "Classification"],
    imageUrl:workonprogress,
    repo: "https://github.com/HakanOZDABAK/Emotions_Classification",
  },
  {
    title: "E-Commerce App",
    description:
      "Making E-Commerce Website at React with Redux and UI Libraries",
    tags: ["React", "Redux", "Semantic-UI"],
    imageUrl:workonprogress,
    repo: "https://github.com/HakanOZDABAK/E-Commerce",
  },
  {
    title: "Users and Items API Service",
    description:
      "I designed a Back-End service for Users registration and Items add.",
    tags: ["Python", "FastAPI", "API","Authorization","Routing"],
    imageUrl:workonprogress,
    repo: "https://github.com/HakanOZDABAK/Users_Items_API",
  },
  {
    title: "Patient Registration System",
    description:
      "I created Patient Registration System as hospital's using",
    tags: ["Java", "Java Swing","GUI"],
    live: "https://react-multi-step-form-psi.vercel.app/",
    imageUrl:workonprogress,
    repo: "https://github.com/HakanOZDABAK/Patient-Registration-System",
  },
  {
    title: "Java Springboot User Candidate Database",
    description:
      "Like my last project, I created user candidate system but at this time I developed it at Back-end side",
    tags: [
      "Java",
      "SpringBoot",
      "Back-End"
    ],
    imageUrl:workonprogress,
    repo: "https://github.com/HakanOZDABAK/Java-Springboot-User-Candidate-Database",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "Java",
  "Java Swing",
  "SpringBoot",
  "Redux",
] as const;

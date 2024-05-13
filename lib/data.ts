import React from "react";
import { LuAppWindow, LuGraduationCap, LuUsers } from "react-icons/lu";
import stravaImg from "@/public/stravaImg.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Goals",
    hash: "#goals",
  },
  {
    name: "Strava",
    hash: "#strava",
  },
  {
    name: "Skills & Experience",
    hash: "#skills-experience",
  },
  {
    name: "Expectations",
    hash: "#expectations",
  },
] as const;

export const experiencesData = [
  {
    title: "Mentorship and Learning Opportunities",
    description:
      "I am eager to secure an internship at a company that provides direct mentorship from experienced IT professionals. This mentorship is vital as it facilitates hands-on learning, which is crucial for refining my skills and deepening my understanding of UX principles and technology in real-world scenarios. Such guidance is important in bridging the gap between academic knowledge and practical application, which would help me transition from the theoretical knowledge gained at my university to the demands of professional environments.",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Meaningful Projects",
    description:
      "I am drawn to opportunities that involve innovative projects pushing the boundaries of technology and design. Moreover, I also like to find opportunities that foster my growth and challenge my current skill set while allowing me to contribute meaningfully. Working on these types of projects are paramount in continuously improving my skills while also igniting my passion for tech.",
    icon: React.createElement(LuAppWindow),
  },
  {
    title: "Collaborative Environment",
    description:
      "I value internships that emphasize a collaborative work environment where I get to freely exchange ideas and feedback among team members across different disciplines. This environment helps foster growth where diverse perspectives are valued and integrated into my work. This type of environment would also enhance my communication skills and my ability to work effectively in team settings, preparing me for future roles in any technology-driven industry.",
    icon: React.createElement(LuUsers),
  },
] as const;

export const projectsData = [
  {
    title: "Strava",
    description:
      "Strava is an American internet service for tracking physical exercise which incorporates social network features. It started out tracking mostly outdoor cycling and running activities using Global Positioning System data, but now incorporates several dozen other exercise types, including indoor activities.",
    imageUrl: stravaImg,
  },
] as const;

export const skillsData = [
  "Figma",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "Accessibility Standards",
  "Google Analytics",
  "Persona Creation",
  "Journey Mapping",
] as const;

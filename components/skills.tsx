"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills & Experience");

  return (
    <section id="skills-experience" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>Skills & experience in UX</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-20">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <p>
        My experience in UX, design and reearch, is built upon a combination of hands-on project work, competitions,
        and a deep personal interest in creating user-centric digital solutions. I am proficient in <span className="font-medium">Frontend Development</span>
        {" "}(HTML, CSS, Javascript, TypeScript, and their corresponding frameworks) as well as <span className="font-medium">Backend Development</span>. 
      </p>
      <br></br>
      <p>
        In all my past projects, I have exclusively used Figma to design prototypes and wireframes. My experience also extends to conducting 
        comprehensive user research, crafting detailed user personas, creating system architecture, and developing journey maps that guide the design process. 
        Additionally, I have also utilized analytics tools to gather and interpret user data, ensuring that design decisions are informed and aligned with 
        user needs and behaviors.
      </p>
    </section>
  );
}

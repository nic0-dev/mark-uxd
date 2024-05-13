"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Goals() {
  const { ref } = useSectionInView("Goals");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="goals"
    >
      <SectionHeading>Career Goals</SectionHeading>
      <p className="mb-3 text-justify">
        As a Computer Engineering student with a strong foundation in both software 
        and hardware aspects of computing, my career goals are centered around developing 
        and enhancing technological solutions that are{" "}
        <span className="font-medium">impactful, user-friendly, and accessible</span>. 
        My ambition is driven by a passion to utilize my technical expertise to craft systems 
        that significantly improve everyday life and streamline business operations.
      </p>

      <p className="mb-3 text-justify">
        <span className="font-medium underline">User experience (UX) design</span>
        {" "}is crucial for accomplishing such goals. Effective UX design guarantees 
        that everything I develop is intuitive and accomplishes the users' needs. This 
        is critical because, ultimately, the success of a technological solution is largely 
        determined by its usability and user interface, regardless of the sophistication 
        of its underlying technology. By integrating solid UX practices into my work, I am 
        committed to ensuring that technology not only meets its intended goals but does so 
        in a way that enhances user satisfaction and engagement. Looking forward, I aim to 
        gain enough experience that would enable me to design solutions that people will 
        find{" "}<span className="font-medium">necessary</span>{" "}as well as{" "}
        <span className="font-medium">enjoyable</span>.
      </p>
    </motion.section>
  );
}

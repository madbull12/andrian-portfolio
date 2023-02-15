import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Sentence = ({ text }: { text: string }) => {
  return <motion.div variants={sentence}>{text}</motion.div>;
};

const About = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // duration: 0.3,
        // ease: "easeInOut",
        // type: "spring",
        // stiffness: 90,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className="space-y-6  py-6 text-base  font-semibold dark:text-gray-100 text-gray-900"
    >
      <motion.h1
    
        variants={sentence}
        className="font-bold text-2xl"
      >
        Get to know me
      </motion.h1>

      <Sentence
        text=" Hi there 👋, my name is Andrian Lysander, and I'm a full stack developer
        based in Indonesia."
      />
      <Sentence
        text="Since 2021, I've been building applications and websites that help
        businesses and individuals achieve their goals. From simple landing
        pages to complex web applications, I've worked on a variety of projects
        that have allowed me to hone my skills in programming, design, and
        project management."
      />
      <Sentence
        text=" As a full stack developer, I'm comfortable working with both front-end
        and back-end technologies. Some of my favorite tools include React, Typescript, 
        Nextjs, Prisma, Tailwind and Postgresql . I also enjoy learning about
        new technologies and experimenting with different programming languages
        to stay up-to-date with the latest trends."
      />
      <Sentence
        text="When I'm not coding, you can usually find me exploring the outdoors,
        playing video games, or spending time with my family and friends."
      />
      <Sentence
        text="If you're interested in working together or just want to say hi, feel
        free to reach out to me. I'm always looking for new and exciting
        projects to work on, and I'd love to hear from you!"
      />
    </motion.div>
  );
};

export default About;

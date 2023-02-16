// import ProjectComponent from "./ProjectComponent.astro";
import { RiTwitchFill } from "react-icons/ri";
import ProjectGradient from "./ProjectGradient/ProjectGradient";
import React from "react";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const container = {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div id="projects" className="py-6 min-h-screen ">
      <h1 className="font-bold text-2xl mb-32">Here are some of my projects</h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        className="grid grid-cols-3 gap-16"
      >
        <ProjectGradient
          website="https://t3-twitter-clone-nine.vercel.app/"
          title="Twitter clone"
          desc="a full stack Twitter-like app built using t3 stack, which is now fully operational and includes nearly all necessary features. The primary goal behind creating this imitation is to discover the capabilities of the t3 stack and its potential."
          technologies={["Next js", "React js", "Tailwind css", "tRPC", "Prisma", "Typescript"]}
        />
      </motion.div>
    </div>
  );
};

export default ProjectSection;

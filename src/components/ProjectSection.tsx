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
          slug="twitter"
          website="https://t3-twitter-clone-nine.vercel.app/"
          title="Twitter clone"
          desc="a full stack Twitter-like app built using t3 stack, which is now fully operational and includes nearly all necessary features. The primary goal behind creating this imitation is to discover the capabilities of the t3 stack and its potential."
          technologies={["Next js", "React js", "Tailwind css", "tRPC", "Prisma", "Typescript"]}
        />
        <ProjectGradient
          slug="pinterest"
          website="https://pinterest-clone-prisma-graphql-phi.vercel.app/"
          title="Pinterest clone"
          desc="a full stack Pinterest-like app built with Graphql and Typescript."
          technologies={["Next js", "React js", "Tailwind css", "Graphql", "Prisma", "Typescript", "Nexus"]}
        />
        <ProjectGradient
          slug="youtube"
          website="https://youtube-clone-next-js-inky.vercel.app/"
          title="Youtube clone"
          desc="a full stack Youtube-like app built with Next js and Typescript, the purpose of this project is to hone my skills in Next js."
          technologies={["Next js", "React js", "Tailwind css", , "Prisma", "Typescript"]}
        />
      </motion.div>
    </div>
  );
};

export default ProjectSection;

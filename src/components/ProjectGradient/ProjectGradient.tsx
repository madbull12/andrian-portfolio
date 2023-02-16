import React from "react";
import styles from "./ProjectGradient.module.css";
import { motion } from "framer-motion";
interface IProps {
  title: string;
  website: string;
  desc: string;
  technologies: string[];
}

const ProjectGradient = ({ title, website, desc, technologies }: IProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
      x: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={`shadow-neumorphism space-y-4 flex-col dark:shadow-darkNeumorphism rounded-2xl bg-gray-200 p-8   relative dark:bg-[#191923] `}
    >
      <h1 className="font-bold text-gray-900 dark:text-white text-4xl">
        {title}
      </h1>
      <div className="flex items-center gap-2 flex-wrap">
        {technologies.map((item) => (
          <span className="p-1 font-semibold rounded-lg bg-gray-600 dark:bg-gray-500 text-white text-[10px] uppercase">
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500">{desc}</p>
      <div className="space-y-6 text-gray-500">
      <a href={website} target="_blank" className={`${styles.neumorphismBtn} dark:bg-[#191923] bg-[#e5e7eb] dark:shadow-btnDark shadow-btnLight`}>
        VISIT WEBSITE
      </a>
      <a href={website} target="_blank" className={`${styles.neumorphismBtn} dark:bg-[#191923] bg-[#e5e7eb] dark:shadow-btnDark shadow-btnLight`}>
        READ MORE
      </a>
      </div>

    </motion.div>
  );
};

export default ProjectGradient;

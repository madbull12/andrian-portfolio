import React from "react";
import { motion } from "framer-motion";
import { AiFillBackward } from "react-icons/ai";
interface IProps {
  title: string;
  video: string;
}
const ProjectDetails = ({ title,video }: IProps) => {
  return (
    <motion.div
      className="py-24"
      initial={{ opacity: 0, x: -100 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { type: "spring", damping: 10, mass: 0.75, stiffness: 100 },
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <AiFillBackward className="text-2xl" />
          <a href="/" className="text-2xl font-semibold">
            Home
          </a>
        </div>
        <h1 className="font-bold text-4xl">{title}</h1>
      </div>
      <video controls width="250">
        <source src={video} type="video/webm" />
      </video>
    </motion.div>
  );
};

export default ProjectDetails;

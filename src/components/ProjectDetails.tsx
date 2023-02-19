import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillBackward } from "react-icons/ai";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
interface IProps {
  title: string;
  video: string;
}
const ProjectDetails = ({ title, video }: IProps) => {
  console.log(video);
  return (
    <AnimatePresence>
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
        <a href="/"className="flex items-center gap-x-2">
          <AiFillBackward className="text-2xl" />
          <span  className="text-2xl font-semibold">
            Home
          </span>
        </a>
        <h1 className="font-black text-5xl">{title}</h1>
      </div>
      <div className="mt-4 flex gap-8 w-full ">
        <VideoPlayer video={video} />
        <div className="p-4 shadow-neumorphism dark:shadow-darkNeumorphism w-1/4">
          <h3 className="font-bold text-2xl">About</h3>
        </div>
      </div>
    </motion.div>

    </AnimatePresence>
    
  );
};

export default ProjectDetails;

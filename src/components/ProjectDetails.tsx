import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillBackward, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { BsArrowsExpand } from "react-icons/bs";
interface IProps {
  title: string;
  video: string;
  about: string;
  stacks: string[];
}
const ProjectDetails = ({ title, video, about, stacks }: IProps) => {
  const [expandStacks, setExpandStacks] = useState(false);
  console.log(video);
  const stacksVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
  };
  return (
    <AnimatePresence initial={true} mode="wait" onExitComplete={() => null}>
      <motion.div
        key="details"
        className="py-24 max-w-7xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          },
        }}
        exit={{
          opacity: 0,
          x: 100,
        }}
      >
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-x-2">
            <AiFillBackward className="text-2xl" />
            <span className="text-2xl font-semibold">Home</span>
          </a>
          <h1 className="font-black text-5xl">{title}</h1>
        </div>
        <div className="mt-4 flex gap-8 w-full ">
          <VideoPlayer video={video} />
          <div className="w-1/3 h-3/4">
            <div className="p-4 shadow-neumorphism rounded-t-2xl dark:shadow-darkNeumorphism">
              <h3 className="font-bold text-2xl mb-4">About</h3>
              <p className="text-sm">{about}</p>
            </div>
            <div className="bg-gray-400 cursor-pointer p-4 dark:bg-[#03001b] rounded-b-2xl overflow-hidden">
              <button
                onClick={() => setExpandStacks((prev) => !prev)}
                className="flex items-center gap-x-2 w-full text-right ml-auto"
              >
                <span className="font-semibold">Stacks</span>
                <motion.div animate={{ rotate:expandStacks ? 360 : 0 }}>
                  {!expandStacks ? <AiOutlineDown className="animate-bounce" /> : <AiOutlineUp className="animate-bounce" />}
                  
                  
                </motion.div>
              </button>
              <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
              >
                {expandStacks ? (
                  <motion.ul
                    variants={stacksVariants}
                    initial="hidden"
                    animate={expandStacks ? "visible" : "hidden"}
                    exit="hidden"
                    className="font-semibold"
                  >
                    {stacks.map((stack, i) => (
                      <li key={i}>
                        {i + 1}. {stack}
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;

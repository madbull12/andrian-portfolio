import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import VideoPlayer from "./VideoPlayer/VideoPlayer";

import { Icon } from "@iconify/react";
interface IProps {
  title: string;
  video: string;
  about: string;
  stacks: string[];
  features: string[];
  webLink: string;
  githubLink: string;
  attention: string;
}
const ProjectDetails = ({
  attention,
  title,
  video,
  about,
  stacks,
  features,
  webLink,
  githubLink,
}: IProps) => {
  const [expandStacks, setExpandStacks] = useState(false);
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
        staggerChildren: 0.1,
      },
    },
  };
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

  const featuresVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
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
        <a href="/" className="flex items-center gap-x-2">
          <Icon icon="material-symbols:arrow-back-ios-new" className="text-xl" />
          <span className="text-xl font-semibold">Home</span>
        </a>
        <div className="flex justify-between items-center mt-4">
          <h1 className="font-black text-lg md:text-xl lg:text-2xl">Video overview</h1>
          <h1 className="font-black text-xl md:text-3xl lg:text-5xl">{title}</h1>
        </div>
        <div className="mt-4 flex gap-8 w-full flex-col lg:flex-row ">
          <VideoPlayer video={video} />
          <div className="w-full lg:w-1/3 h-3/4">
            <div className="p-4 space-y-4 flex flex-col shadow-neumorphism rounded-t-2xl dark:shadow-darkNeumorphism">
              <h3 className="font-bold text-2xl">About</h3>
              <p className="xs:text-sm text-xs">{about}</p>
              <div className="flex gap-x-12 items-center mx-4">
                <motion.a
                  whileHover={{ y: -10 }}
                  className="w-0 flex flex-col items-center gap-y-2"
                  target="_blank"
                  href={githubLink}
                >
                  <Icon icon="mdi:github" className="text-3xl" />
                  <span className="text-[10px] font-semibold text-center">
                    Github
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ y: -10 }}
                  className="w-0 flex flex-col items-center gap-y-2"
                  target="_blank"
                  href={webLink}
                >
                  <Icon icon="ph:browser-fill" className="text-3xl" />
                  <span className="text-[10px] font-semibold text-center">
                    App
                  </span>
                </motion.a>
              </div>
            </div>
            <div className="bg-gray-400 flex flex-col-reverse cursor-pointer p-4 dark:bg-[#03001b] rounded-b-2xl overflow-hidden">
              <button
                onClick={() => setExpandStacks((prev) => !prev)}
                className="flex items-center gap-x-2 w-full text-right ml-auto "
              >
                <span className="font-semibold text-xl">Tech Stacks</span>
                <motion.div animate={{ rotate: expandStacks ? 360 : 0 }}>
                  {!expandStacks ? (
                    <Icon icon="material-symbols:keyboard-arrow-down-sharp" className="animate-bounce" />

                  ) : (
                    <Icon icon="material-symbols:keyboard-arrow-up-sharp" className="animate-bounce" />

                  )}
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
        <div className="my-4">
          <h1 className="text-2xl font-bold">Features</h1>
          <motion.ul
            viewport={{ once: true }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className="space-y-2 mt-4 xs:text-sm sm:text-base text-xs"
          >
            {features.map((feature, i) => (
              <motion.li variants={featuresVariants} key={i}>
                {i + 1}. {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-bold">Attention</h1>
          <p className="xs:text-sm sm:text-base text-xs">{attention}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;

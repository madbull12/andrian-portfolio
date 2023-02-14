import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSlideInMenu from "../zustand/useSlideInMenu";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from "react-icons/ai";
import VerticalText from "./VerticalText";
const MenuSlide = () => {
  const { isOpen } = useSlideInMenu();

  const variants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.9,
        delay: 1,
      },
    },
  };

  const iconsAnimation = {
    hidden: { opacity:0 },
    visible: {
      opacity: 1,
      
      transition: {
        delay: 1.3,
        ease: "easeInOut",

        duration:.5,
      },
    },
    exit: { opacity: 0, transition: { delay: 0.5,duration:.5 },x:"100vw" },
  };

  const linkAnimation = {
    hover: {
      color: "#a78bfa",
      scale: 1.1,
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen ? (
        <motion.aside
          className="bg-black  min-w-full min-h-screen justify-center flex items-center top-0 fixed left-0"
          variants={variants}
          initial="hidden"
          exit="exit"
          animate={isOpen ? "visible" : "hidden"}
        >
            <VerticalText position="top-16 right-16" text="井の中の蛙大海を知らず" />
            <VerticalText position="bottom-16 left-16" text="あきらめないで" />
          <div className=" gap-y-4 flex flex-col items-center">
            <motion.p
              exit={{ opacity: 0, x: "-100vw",transition:{ duration:0.5 } }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
              className="text-center font-bold uppercase tracking-widest"
            >
              Reach me out on
            </motion.p>
            <motion.div
              variants={iconsAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-x-2 text-4xl"
            >
              <motion.a
                variants={linkAnimation}
                whileHover="hover"
                href="https://github.com/madbull12"
                target="_blank"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                variants={linkAnimation}
                whileHover="hover"
                href="https://www.linkedin.com/in/andrian-lysander-6b0a05176/"
                target="_blank"
              >
                <AiFillLinkedin />
              </motion.a>
              <motion.a
                variants={linkAnimation}
                whileHover="hover"
                href="https://twitter.com/andrian12011"
                target="_blank"
              >
                <AiFillTwitterCircle />
              </motion.a>
              <motion.a
                variants={linkAnimation}
                whileHover="hover"
                href="mailto:huangandrian02@gmail.com"
                target="_blank"
              >
                <AiFillGoogleCircle />
              </motion.a>
            </motion.div>
          </div>
        </motion.aside>
      ) : null}
      {/* <motion.aside
        className="bg-black min-w-full min-h-screen top-0 fixed left-0"
        variants={variants}
        initial="hidden"
        exit="exit"
        animate={isOpen ? "visible" : "hidden"}
      >
        <h1>fdsfsdf</h1>
      </motion.aside> */}
    </AnimatePresence>
  );
};

export default MenuSlide;

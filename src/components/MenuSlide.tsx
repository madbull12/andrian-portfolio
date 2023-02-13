import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSlideInMenu from "../zustand/useSlideInMenu";
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
      },
    },
  };
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen ? (
        <motion.aside
          className="bg-black min-w-full min-h-screen flex items-center top-0 fixed left-0"
          variants={variants}
          initial="hidden"
          exit="exit"
          animate={isOpen ? "visible" : "hidden"}
        >
          <div className="px-8">
            <motion.p  className="text-center font-bold uppercase tracking-widest">Reach me out on</motion.p>
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

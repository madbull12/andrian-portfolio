import React, { useEffect, useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import useSlideInMenu from "../zustand/useSlideInMenu";
import DarkModeSwitch from "./DarkModeSwitch";
const Navigations = () => {
  //   const [isOpen, setOpen] = useState(false);
  const { isOpen, setOpen } = useSlideInMenu();
  const [nameVisible, setNameVisible] = useState(false);

  const nameVariants = {
    hidden: {
      x: -20,
      opacity: 0,
      transition:{
        ease:"easeInOut",
        duration:0.5
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition:{
        ease:"easeInOut",
        duration:0.5

      }
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNameVisible((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky backdrop-blur-md flex justify-between items-center bg-gray-500/30 dark:bg-gray-600/30 border-gray-300 border-opacity-10 border rounded-xl top-12 z-50 max-w-xl mx-auto px-4 py-2 md:px-8 md:py-4">
      <div className="flex gap-x-2 items-center">
        <span className="text-gray-900 dark:text-gray-300 font-bold text-base md:text-xl">黄</span>
        <motion.span
          variants={nameVariants}
          initial="hidden"
          animate={nameVisible ? "visible" : "hidden"}
          //   transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          className="tracking-widest text-gray-900 dark:text-gray-300 uppercase text-xs font-semibold"
        >
          Andrian
        </motion.span>
      </div>
      <div className="flex items-center gap-x-2">
        <DarkModeSwitch />
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />

      </div>
    </div>
  );
};

export default Navigations;

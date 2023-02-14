import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSlideInMenu from "../zustand/useSlideInMenu";
const VerticalText = ({ text,position }: { text: string,position:string }) => {
  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit:{
      opacity:0,
      y:50
    }
  };
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
        
      },
    },
    exit: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const { isOpen } = useSlideInMenu();

  return (
    <AnimatePresence initial={true} mode="wait" onExitComplete={() => null}>
      {isOpen ? (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          key="vertical"
          variants={sentence}
          className={`text-white absolute font-bold ${position} text-sm tracking-widest`}
          style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
        >
          {text.split("").map((letter,i) => (
            <motion.span key={i} variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default VerticalText;

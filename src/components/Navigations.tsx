import React, { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import useSlideInMenu from "../zustand/useSlideInMenu";
const Navigations = () => {
//   const [isOpen, setOpen] = useState(false);
    const { isOpen,setOpen } = useSlideInMenu();
  return (
    <div className="sticky backdrop-blur-md flex justify-between items-center bg-gray-600/30 border-gray-300 border-opacity-10 border rounded-xl top-12 z-50 max-w-xl mx-auto px-8 py-4">
      <div className="flex gap-x-2 items-center">
        <span className="text-gray-300 font-bold text-xl">愛</span>
        <motion.span
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        //   transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          className="tracking-widest text-gray-300 uppercase text-xs font-semibold"
        >
          Andrian
        </motion.span>
      </div>

      <Hamburger toggled={isOpen} toggle={setOpen} rounded />
    </div>
  );
};

export default Navigations;

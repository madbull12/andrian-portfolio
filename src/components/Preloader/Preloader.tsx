import React,{ useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Preloader.module.css";

const Welcome = ({ char }: { char: string }) => {
  return <h1 className="text-2xl font-black">{char}</h1>;
};

const Preloader = () => {
  useEffect(()=>{
    document.body.style.overflow = "hidden"
    setTimeout(()=>{
      document.body.style.overflow="visible"
    },3000)
  },[])
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: "-100vh",
        transition: { ease: "easeInOut", duration: 1, delay: 1.8 },
      }}
      className=" z-[999] top-0 bottom-0 right-0 left-0 text-gray-900 dark:text-gray-300 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 overflow-x-hidden dark:to-[#0f0013] fixed flex items-center justify-center overflow-hidden min-h-screen"
    >
      <div
        className={` flex flex-col  gap-y-4 items-start h-8 px-4 overflow-hidden `}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -60, transition: { ease: "linear", duration: 1.2 } }}
        >
          <Welcome char="Welcome" />
          <Welcome char="환영" />
          <Welcome char="Selamat datang" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;

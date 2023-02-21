import React, { useState } from "react";
// import TextSpan from "./TextSpan";
import styles from "./BannerText.module.css";
import { motion } from "framer-motion";
import TextSpan from "../TextSpan";
const BannerText = () => {
  // const sentence = "Hello I'm Andrian, I create web apps".split("");

  const line1 = "Hi I'm ";
  const line2 = "I build web apps";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration:2,
        staggerChildren: 0.1,
      },
    },
  };

  let original = "Andrian";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const [randomText, setRandomText] = useState("Andrian");
  const randomize = () => {
    console.log("shit")
    let splittedValue;
    let iterations = 0;
    const interval = setInterval(() => {
      splittedValue = randomText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return original[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      // letters[Math.floor(Math.random() * 26 )]
      if (iterations >= splittedValue.length) clearInterval(interval);

      setRandomText(splittedValue);
      iterations += 1 / 3;
    }, 30);
  };

  const letter = {
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
    <div>
      {/* {sentence.map((text:string,i)=>(
            <TextSpan key={i} text={text} />
        ))} */}
      <div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sentence}
      
          className="text-gray-900  dark:text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black cursor-default lg:text-7xl"
        >
          {line1.split("").map((char, index) => (
            <TextSpan key={index} char={char} />
          ))}
          <motion.span onMouseOver={randomize}>
            {randomText.split("").map((char, index) => (
              <motion.span key={index} variants={letter} className={styles.gradient}>
                {char}
              </motion.span>
            ))}
          </motion.span>

          <br />

          {line2.split("").map((char, index) => (
            <TextSpan key={index} char={char} />
          ))}
        </motion.h1>
        {/* <h1 className="text-white font-black cursor-default text-7xl">
          I create web apps
        </h1> */}
      </div>
    </div>
  );
};

export default BannerText;

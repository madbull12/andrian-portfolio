import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
const TextSpan = ({ char }: { char: string }) => {
  // const controls = useAnimationControls();
  // const [isPlaying, setIsPlaying] = useState(false);

  // const rubberBand = () => {
  //   controls.start({
  //     transform: [
  //       "scale3d(1, 1, 1)",
  //       "scale3d(1.4, .55, 1)",
  //       "scale3d(.75, 1.25, 1)",
  //       "scale3d(1.25, .85, 1)",
  //       "scale3d(0.9, 1.05, 1)",
  //       "scale3d(1, 1, 1)",
  //     ],
  //     transition: {
  //       times: [0, .4, .6, .7, .8, .9],
  //     },
  //   });
  //   setIsPlaying(true);
  // };
  
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
  return <motion.span variants={letter}>{char}</motion.span>;
};

export default TextSpan;

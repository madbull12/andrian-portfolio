import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
const TextSpan = ({ text }: { text: string }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, .4, .6, .7, .8, .9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
    //   whileHover={{ color:"red"}}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    //   className="text-gray-300 font-black pointer-events-none text-7xl"
    //   whileHover={{ scale: 1.2 }}
    >
      {text}
    </motion.span>
  );
};

export default TextSpan;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CirclePosition {
  x: number;
  y: number;
}

const Cursor = () => {
  const [largeCirclePosition, setLargeCirclePosition] = useState<
    Required<CirclePosition>
  >({
    x: 0,
    y: 0,
  });
  const [smallCirclePosition, setSmallCirclePosition] = useState<
    Required<CirclePosition>
  >({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setLargeCirclePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setSmallCirclePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <div className="lg:block hidden">
    <motion.div
      transition={{ type: "spring", mass: 3 }}
      animate={{ x: largeCirclePosition.x - 32 , y: largeCirclePosition.y - 32  }}
      className="w-16 h-16 rounded-full pointer-events-none fixed z-50 border border-black dark:border-white grid place-items-center"
    >
   
    </motion.div>
    <motion.div
        transition={{ type: "spring", mass: 2 }}
        animate={{ x: smallCirclePosition.x - 8 , y: smallCirclePosition.y - 8  }}
        className="dark:bg-white bg-black fixed pointer-events-none z-50 rounded-full w-4 h-4"
      ></motion.div>
    </div>

  );
};

export default Cursor;

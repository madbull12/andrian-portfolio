import React from "react";
import Tilt from "react-parallax-tilt";
const TiltedBanner = () => {
  return (
    <div className=" max-w-sm">
      <Tilt>
        <div className=" p-4 backdrop-blur-lg bg-white/10 w-full rounded-xl border-gray-500 border-b">
          <h1 className="text-white font-black text-6xl">
            Hi, I'm Andrian I build web apps
          </h1>
        </div>
      </Tilt>
    </div>
  );
};

export default TiltedBanner;

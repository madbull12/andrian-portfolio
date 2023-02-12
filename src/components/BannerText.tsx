import React, { useState } from "react";
import TextSpan from "./TextSpan";
import { motion } from "framer-motion";
const BannerText = () => {
  // const sentence = "Hello I'm Andrian, I create web apps".split("");
  let original = "Andrian"
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const [randomText, setRandomText] = useState("Andrian");
  const randomize = () => {
    let splittedValue;
    let iterations = 0;
    const interval = setInterval(() => {
      splittedValue = randomText
        .split("")
        .map((letter,index) =>  {
          if(index < iterations) {
            return original[index]
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      // letters[Math.floor(Math.random() * 26 )]
      if(iterations >= splittedValue.length) clearInterval(interval)

      setRandomText(splittedValue);
      iterations += 1 / 3
    }, 30);
  };
  return (
    <div >
      {/* {sentence.map((text:string,i)=>(
            <TextSpan key={i} text={text} />
        ))} */}
      <div>
        <h1 className="text-white font-black cursor-default text-7xl">
          Hello I'm  {""}
          <span  onMouseOver={randomize}>
            {randomText.charAt(0).toUpperCase() + randomText.slice(1)}
          </span>
          
        </h1>
        <h1 className="text-white font-black cursor-default text-7xl">
          I create web apps
          
        </h1>
      </div>
      {/* <h1 className="text-white font-black cursor-default text-7xl">
        Hello I'm{" "}
        <span onMouseOver={randomize}>
          {randomText.charAt(0).toUpperCase() + randomText.slice(1)}
        </span>
        , I create web apps
      </h1> */}
    </div>
  );
};

export default BannerText;

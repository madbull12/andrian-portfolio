import React from 'react'
import TextSpan from './TextSpan';

const BannerText = () => {

    const sentence = "Hello I'm Andrian, I create web apps".split("");
  return (
    <div >
        {sentence.map((text:string,i)=>(
            <TextSpan key={i} text={text} />
        ))}
    </div>
  )
}

export default BannerText
import React from 'react'
import styles from './ProjectGradient.module.css'
interface IProps {
    title:string;
    website:string;
    desc:string;
    technologies:string[];
}
const ProjectGradient = ({ title,website,desc,technologies }:IProps) => {
  return (
    <div className={`${styles.glow} p-8 rounded-3xl relative bg-gradient-to-b dark:from-[#4444446b] h-[400px] dark:to-[#100618]`}>
        <h1 className='font-bold text-gray-900 dark:text-white text-4xl'>{title}</h1>
    </div>
  )
}

export default ProjectGradient
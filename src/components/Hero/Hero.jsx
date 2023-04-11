import React from "react";
import {motion} from "framer-motion";

import photo from '../../assets/photo.png'
import classes from './Hero.module.scss'

import {textVariant} from "../../utils/motion.js";

import {SectionWrapper} from '../../hoc/index.js';

const Hero = () => {
  return (
    <motion.div
      className="justify-between items-center mt-[-30px] md:mt-[30px] md:flex"
    >
      <div className="md:mr-[50px]">
        <h2 className={classes.heroTitle}>
          Aesthetic Lover <span>&</span> <br/>
          Frontend Developer
        </h2>

        <p className={`${classes.heroDescription} mt-[30px] md:mt-[45px] max-w-[470px]`}>
          Welcome to my website! I am a frontend developer with 1.5+ years
          of experience. My passion for creating beautiful and functional
          websites drives me to constantly improve my skills and deliver
          high-quality results to my clients.
        </p>
      </div>
      <div className="mt-[30px] flex justify-center items-center md:block my-auto md:mt-0">
        <img className="my-auto" src={photo} alt="photo"/>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Hero, "about");
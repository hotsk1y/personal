import React, {useEffect, useRef} from "react";
import { motion } from "framer-motion";

import {SectionWrapper} from '../../hoc/index.js';
import classes from './About.module.scss'

import {fadeIn} from "../../utils/motion.js";

const About = () => {
  return (
    <motion.div
      className="w-full mt-[-30px] md:mt-0"
      variants={fadeIn("", "", 0.1, 1)}
    >
      <div className="w-full md:max-w-[80%]">
        <span className="md:mr-[50px] block md:inline md:mb-0 mb-[10px]">{`{ AboutMe.section }`}</span>
        <span className={`${classes.aboutMeText} max-w-[60%]`}>
            I'm Alex, a frontend developer
            who loves to create beautiful and
            aesthetic websites. When I'm not coding,
            you can find me hitting the gym.
          </span>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
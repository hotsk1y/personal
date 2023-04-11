import React from "react";
import { motion } from "framer-motion";

import {SectionWrapper} from '../../hoc/index.js';
import classes from './Skills.module.scss'

import skillsTitle from '../../assets/skills-title.svg';
import {skills} from '../../constants/index.js';
import {fadeIn} from "../../utils/motion.js";

const Skills = () => {
  return (
    <div className="md:mt-0">
      <motion.span
        className="text-center md:mr-[50px] block md:hidden mb-[10px]"
        variants={fadeIn("down", "spring", 0.3, 0.75)}
      >
        {`{ mySkills.section }`}
      </motion.span>

      <motion.div
        className="hidden md:block"
        variants={fadeIn("down", "spring", 0.3, 0.75)}
      >
        <img src={skillsTitle} alt="title"/>
      </motion.div>

      <motion.div
        className="mt-[20px] md:max-w-[550px] text-sm md:text-base opacity-[.7] md:opacity-[1] text-center mx-auto leading-relaxed"
        variants={fadeIn("up", "spring", 0.3, 0.75)}
      >
        Did you hear about the programmer who got stuck in the shower?
        He couldn't find the shampoo bottle instructions that said,
        "Lather, Rinse, Repeat." Don't worry, I won't let you get stuck
        in a loop like that. I'll make sure your website is the best it
        can be, with clean code and stunning design.
      </motion.div>

      <div className="mt-[30px] md:mt-[80px] flex flex-wrap md:flex-nowrap justify-center gap-5">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.id}
            className="max-w-[35px] md:max-w-none flex items-center"
            variants={fadeIn("right", "spring", idx * 0.15, 0.75)}
          >
            <img src={skill.image} alt={skill.id} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
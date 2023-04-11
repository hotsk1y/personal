import React from "react"
import { motion } from "framer-motion"

import {SectionWrapper} from '../../hoc/index.js'
import classes from './Socials.module.scss'

import curvedArrow from '../../assets/curved-arrow.svg'
import {socialLinks} from '../../constants/index.js'
import {fadeIn, slideIn, textVariant} from "../../utils/motion.js";

const Socials = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center text-beige">
      <motion.div
        className="mt-[50px] md:mt-0 grid grid-cols-2 gap-5 order-2 md:order-1"
        variants={fadeIn("right", "spring", 0.3, 0.75)}
      >
        {socialLinks.map((socialLink) => (
          <a key={socialLink.id} href={socialLink.url} target="_blank" className={classes.socialItem}>
            <img src={curvedArrow} alt="arrow"/>
            <span>
              {socialLink.title}
            </span>
          </a>
        ))}
      </motion.div>
      <motion.div
        className={`${classes.socialText} order-1 md:order-2`}
        variants={fadeIn("left", "spring", 0.3, 0.75)}
      >
        <h2>Looking for Frontend Developer?</h2>
        <p className="mt-[30px] md:mt-[50px]">
          Get in touch and let's build something amazing
          together. I promise I won't make any dad jokes
          during our conversation (okay, maybe just one).
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Socials, "socials");
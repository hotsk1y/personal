import React from "react";
import { motion } from "framer-motion";

import {SectionWrapper} from '../../hoc/index.js';
import classes from './Passions.module.scss'
import {passions} from '../../constants/index.js';

import {fadeIn} from "../../utils/motion.js";

const Passions = () => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-[50px] md:gap-[25px] justify-between">
      {passions.map((passion, idx) => (
        <motion.div
          key={passion.id}
          className="w-100 md:w-[25%]"
          variants={fadeIn("down", "spring", idx * 0.3, 0.75)}
        >
          <div className={classes.passionTitle}>
            {passion.title}
          </div>

          <div className={classes.passionSubtitle}>
            {passion.subtitle}
          </div>

          <div className={classes.passionDescription}>
            {passion.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Passions, "passions");
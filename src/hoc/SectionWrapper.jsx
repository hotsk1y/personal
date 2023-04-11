import { motion } from "framer-motion";

import { styles } from "../styles";
import {slideIn, staggerContainer} from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div>
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <Component />
        </motion.section>
      </div>
    );
  };

export default StarWrapper;
import React, { useMemo } from "react";
import { motion } from "framer-motion";

import "./FastestLapV2.scss";
import styleVars from "../../scss/variables.scss";

const INITIAL_WIDTH = 230;

const DEFAULT_SPRING = {
  type: "spring",
  damping: 10,
  stiffness: 30
};

const FastestLap = ({ firstName, lastName, lapTime, className }) => {
  const classNames = useMemo(() => ["fastest-lap-v2", className].join(" "), [className]);
  console.log(styleVars);
  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: 50, x: -100 }}
      transition={{
        ...DEFAULT_SPRING,
        x: {
          ...DEFAULT_SPRING,
          delay: 2
        }
      }}
      style={{ width: INITIAL_WIDTH }}
      className={classNames}
    >
      <motion.div
        className="fastest-lap-v2__container"
        initial={{ backgroundColor: styleVars.colorPurple, color: styleVars.colorWhite }}
        animate={{ backgroundColor: styleVars.colorPrimaryDark, color: styleVars.colorPink }}
        transition={DEFAULT_SPRING}
      >
        FASTEST LAP
      </motion.div>
      <motion.div
        className="fastest-lap-v2__details"
        initial={{ width: 0, backgroundColor: styleVars.colorPurple, opacity: 0 }}
        animate={{ x: INITIAL_WIDTH, width: 300, backgroundColor: styleVars.colorPrimaryDark, opacity: 1 }}
        transition={{
          ...DEFAULT_SPRING,
          delay: 2,
          backgroundColor: {
            ...DEFAULT_SPRING,
            delay: 2
          }
        }}
      >
        <div>
          <p>{firstName}</p>
          <p className="fastest-lap-v2__last-name">{lastName}</p>
        </div>

        <div className="fastest-lap-v2__time">{lapTime}</div>
      </motion.div>
    </motion.div>
  );
};

export default FastestLap;

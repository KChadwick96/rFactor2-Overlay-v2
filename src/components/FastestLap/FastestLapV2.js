import React from "react";
import { motion } from "framer-motion";

import "./FastestLapV2.scss";

const DEFAULT_SPRING = {
  type: "spring",
  damping: 10,
  stiffness: 30
};

const FastestLap = ({ firstName, lastName, lapTime, className }) => {
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
      className="fastest-lap-v2"
    >
      <motion.div
        className="fastest-lap-v2__container"
        initial={{ backgroundColor: "#6c0cb3", color: "#ffffff" }}
        animate={{ backgroundColor: "#000b1c", color: "#cd04db" }}
        transition={DEFAULT_SPRING}
      >
        FASTEST LAP
      </motion.div>
      <motion.div
        className="fastest-lap-v2__details"
        initial={{ width: 0, backgroundColor: "#6c0cb3", opacity: 0 }}
        animate={{ x: 230, width: "300px", backgroundColor: "#000b1c", opacity: 1 }}
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
          <p>Kieran</p>
          <p className="fastest-lap-v2__last-name">Chadwick</p>
        </div>

        <div className="fastest-lap-v2__time">1:20.467</div>
      </motion.div>
    </motion.div>
  );
};

export default FastestLap;

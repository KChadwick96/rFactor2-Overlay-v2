import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styleVars from "../../scss/variables.scss";

import "./FastestSector.scss";

const DEFAULT_SPRING = {
  type: "spring",
  damping: 10,
  stiffness: 30
};

const fadeIn = {
  initial: { opacity: 0, width: 200 },
  animate: { opacity: 1 }
};

const FastestSector = ({ sector, sectorTime, driverName, className }) => {
  const classNames = useMemo(() => ["fastest-sector", className].join(" "), [className]);

  return (
    <motion.div initial={{ y: -550, x: 1688 }} style={{ width: 200 }} className={classNames}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 216 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fastest-sector__header"
      >
        <motion.div className="fastest-sector__header-text" initial={{ width: 200 }}>
          <motion.span initial={{ x: 0, opacity: 0 }} animate={{ x: 50, opacity: 1 }} transition={{ duration: 0.5 }}>
            FASTEST
          </motion.span>
          <motion.span initial={{ x: 100, opacity: 0 }} animate={{ x: 54, opacity: 1 }} transition={{ duration: 0.5 }}>
            SECTOR
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -80, height: 0, backgroundColor: styleVars.colorPurple, opacity: 0 }}
        animate={{ height: 104, backgroundColor: styleVars.colorPrimaryDark, opacity: 1 }}
        transition={{
          ...DEFAULT_SPRING,
          delay: 1,
          backgroundColor: {
            ...DEFAULT_SPRING,
            delay: 1
          }
        }}
        className="fastest-sector__details"
      >
        <motion.div {...fadeIn} className="fastest-sector__number">
          Sector {sector}
        </motion.div>
        <motion.div {...fadeIn} className="fastest-sector__name">
          {driverName}
        </motion.div>
        <motion.div {...fadeIn} className="fastest-sector__time">
          {sectorTime}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FastestSector;

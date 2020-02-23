import React, { useMemo } from "react";
import { motion } from "framer-motion";

import Position from "./Position";
import "./StandingRow.scss";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100
};

export const VARIANTS = {
  INTERVAL_GAP: "interval-gap",
  LEADER_GAP: "leader-gap",
  POSITION: "position"
};

const TRANSITION_DURATION = 0.3;

const TyreGraphic = () => <div className="tyre-graphic">M</div>;

const Pit = ({ active }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: active ? 1 : 0 }}
    transition={{ duration: TRANSITION_DURATION }}
    className="standing-row__pit"
  >
    pit
  </motion.div>
);

const StandingRow = ({
  position,
  driverName,
  driverNameCode,
  teamColour,
  gapToLeader,
  interval,
  pit,
  out,
  variant = VARIANTS.INTERVAL_GAP
}) => {
  const name = variant === VARIANTS.POSITION ? driverName : driverNameCode;

  const gap = useMemo(() => {
    if (out) {
      return "OUT";
    }

    let value = 0;

    if (variant === VARIANTS.INTERVAL_GAP) {
      if (position === 1) return "Interval";
      value = interval;
    }

    if (variant === VARIANTS.LEADER_GAP) {
      if (position === 1) return "Leader";
      value = gapToLeader;
    }

    return `+${value.toFixed(3)}`;
  }, [position, variant, interval, gapToLeader, out]);

  return (
    <motion.li
      className="standing-row"
      layoutTransition={spring}
      initial={{ opacity: 1 }}
      animate={{ opacity: out ? 0.5 : 1 }}
    >
      <div className="standing-row__wrapper">
        <Position position={position} teamColour={teamColour} />
        <TyreGraphic />
        <div className="standing-row__name">{name}</div>
        {variant !== VARIANTS.POSITION && (
          <div className="standing-row__interval">{gap}</div>
        )}
      </div>
      <Pit active={pit} />
    </motion.li>
  );
};

export default StandingRow;

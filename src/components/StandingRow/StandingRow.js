import React, { useMemo, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

import usePrevious from "../../hooks/usePrevious";
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
const POSITION_CHANGE_DURATION = 4000;

const TyreGraphic = () => {
  return <div className="tyre-graphic">M</div>;
};

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

const getPositionChangeVariant = value => {
  const map = {
    0: "normal",
    1: "gain",
    [-1]: "loss"
  };

  return map[value];
};

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
  const [positionChange, setPositionChange] = useState(0);
  const previousPosition = usePrevious(position);
  const name = variant === VARIANTS.POSITION ? driverName : driverNameCode;
  const positionChangeTimeout = useRef();

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

  useEffect(() => {
    if (!previousPosition || previousPosition === position) {
      return;
    }

    clearTimeout(positionChangeTimeout.current);
    setPositionChange(position < previousPosition ? 1 : -1);

    positionChangeTimeout.current = setTimeout(
      () => setPositionChange(0),
      POSITION_CHANGE_DURATION
    );
  }, [position, previousPosition]);

  return (
    <motion.li
      className="standing-row"
      layoutTransition={spring}
      initial={{ opacity: 1 }}
      animate={{ opacity: out ? 0.5 : 1 }}
    >
      <div className="standing-row__wrapper">
        <motion.div
          className="standing-row__position"
          style={{ borderRightColor: teamColour }}
          variants={{
            gain: {
              backgroundColor: "#1cad10"
            },
            loss: {
              backgroundColor: "#bf0000"
            },
            normal: {
              backgroundColor: "#072047"
            }
          }}
          animate={getPositionChangeVariant(positionChange)}
        >
          {positionChange === 0 ? (
            position
          ) : (
            <motion.span
              animate={getPositionChangeVariant(positionChange)}
              variants={{
                gain: {
                  y: -6,
                  opacity: 0
                },
                loss: {
                  y: 6,
                  opacity: 0
                }
              }}
              transition={{ loop: Infinity, duration: 0.8, repeatDelay: 0.2 }}
            >
              {positionChange === 1 ? (
                <FiArrowUp size="18px" />
              ) : (
                <FiArrowDown size="18px" />
              )}
            </motion.span>
          )}
        </motion.div>
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

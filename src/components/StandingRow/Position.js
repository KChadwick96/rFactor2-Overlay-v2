import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

import usePrevious from "../../hooks/usePrevious";

const POSITION_CHANGE_DURATION = 4000;

const getPositionChangeVariant = value => {
  const map = {
    0: "normal",
    1: "gain",
    [-1]: "loss"
  };

  return map[value];
};

const Position = ({ position, teamColour }) => {
  const positionChangeTimeout = useRef();
  const previousPosition = usePrevious(position);
  const [positionChange, setPositionChange] = useState(0);

  useEffect(() => {
    if (!previousPosition || previousPosition === position) {
      return;
    }

    setPositionChange(position < previousPosition ? 1 : -1);

    positionChangeTimeout.current = setTimeout(
      () => setPositionChange(0),
      POSITION_CHANGE_DURATION
    );
  }, [position, previousPosition]);

  return (
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
  );
};

export default Position;

import React from "react";

import "./LapCounter.scss";

const STATES = {
  FINISHED: "FINISHED",
  YELLOW: "YELLOW",
  RED: "RED"
};

const LapCounter = ({ currentLap, totalLaps, state, className }) => {
  return (
    <div className={`lap-counter ${className}`}>
      <div className="lap-counter__session">Lap</div>
      <div className="lap-counter__laps">
        {currentLap}/{totalLaps}
      </div>
    </div>
  );
};

export default LapCounter;

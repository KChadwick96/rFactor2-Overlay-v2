import React, { useMemo } from "react";

import "./LapCounter.scss";
import flag from "../../img/checkered-flag.jpg";

export const STATES = {
  GREEN: "GREEN",
  FINISHED: "FINISHED",
  YELLOW: "YELLOW",
  RED: "RED"
};

const LapCounter = ({
  currentLap,
  totalLaps,
  state = STATES.GREEN,
  className = ""
}) => {
  const classNames = useMemo(
    () =>
      [
        "lap-counter",
        state === STATES.YELLOW ? "lap-counter--yellow" : "",
        className
      ].join(" "),
    [className, state]
  );

  return (
    <div className={classNames}>
      {state === STATES.FINISHED ? (
        <>
          <img
            className="lap-counter__checkered"
            src={flag}
            alt="Checkered flag"
          />
          <p className="--width-100">FINISHED</p>
        </>
      ) : (
        <>
          <div className="lap-counter__session">Lap</div>
          <div className="lap-counter__laps">
            {currentLap}/{totalLaps}
          </div>
        </>
      )}
    </div>
  );
};

export default LapCounter;

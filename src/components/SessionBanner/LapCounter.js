import React, { Fragment, useMemo } from "react";

import { STATES } from './SessionBanner'
import flag from "../../img/checkered-flag.jpg";

const LapCounter = ({
  currentLap,
  totalLaps,
  state = STATES.GREEN,
  className = ""
}) => {
  const classNames = useMemo(
    () =>
      [
        "session-banner",
        "session-banner--counter",
        state === STATES.YELLOW ? "session-banner--yellow" : "",
        className
      ].join(" "),
    [className, state]
  );

  return (
    <div className={classNames}>
      {state === STATES.FINISHED ? (
        <Fragment>
          <img
            className="session-banner__checkered"
            src={flag}
            alt="Checkered flag"
          />
          <p className="--width-100">FINISHED</p>
        </Fragment>
      ) : (
        <Fragment>
          <div className="session-banner__lap-heading">Lap</div>
          <div className="session-banner__lap-count">
            {currentLap}/{totalLaps}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default LapCounter;

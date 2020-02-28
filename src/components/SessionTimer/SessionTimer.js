import React, { Fragment, useMemo } from "react";

import "./SessionTimer.scss";
import flag from "../../img/checkered-flag.jpg";

export const STATES = {
  GREEN: "GREEN",
  FINISHED: "FINISHED",
  YELLOW: "YELLOW",
  RED: "RED"
};

const SessionTimer = ({
  session,
  sessionTime,
  state = STATES.GREEN,
  className = ""
}) => {
  const classNames = useMemo(
    () =>
      [
        "session-timer",
        state === STATES.YELLOW ? "session-timer--yellow" : "",
        className
      ].join(" "),
    [className, state]
  );

  return (
    <div className={classNames}>
      {state === STATES.FINISHED ? (
        <Fragment>
          <img
            className="session-timer__checkered"
            src={flag}
            alt="Checkered flag"
          />
          <p className="--width-100">FINISHED</p>
        </Fragment>
      ) : (
        <Fragment>
          <div className="session-timer__session">{session}</div>
          <div className="session-timer__time">
            {sessionTime}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SessionTimer;

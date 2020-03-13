import React, { Fragment, useMemo } from "react";

import flag from "../../img/checkered-flag.jpg";

import "./SessionBanner.scss";

export const STATES = {
  GREEN: "GREEN",
  FINISHED: "FINISHED",
  YELLOW: "YELLOW",
  RED: "RED"
};

export const SESSIONS = {
  PRACTICE: "P1",
  QUALIFY: "Q1",
  QUALIFY2: "Q2",
  WARMUP: "WU",
  RACE: "RACE"
};

const SessionBanner = ({
  session,
  sessionTime,
  currentLap,
  totalLaps,
  state = STATES.GREEN,
  className = ""
}) => {
  const isRace = session === SESSIONS.RACE;
  const classNames = useMemo(
    () =>
      [
        "session-banner",
        isRace ? "session-banner--counter" : "session-banner--timer",
        state === STATES.YELLOW ? "session-banner--yellow" : "",
        className
      ].join(" "),
    [className, state, isRace]
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
          <div className="session-banner__heading">
            {isRace ? "Lap" : session}
          </div>
          <div className="session-banner__text">
            {isRace ? `${currentLap} / ${totalLaps}` : sessionTime}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SessionBanner;

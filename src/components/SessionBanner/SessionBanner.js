import React from "react";

import "./SessionBanner.scss";
import SessionTimer from "./SessionTimer";
import LapCounter from "./LapCounter";

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
  return (
    <div>
      {session === SESSIONS.RACE ? (
        <LapCounter
          currentLap={currentLap}
          totalLaps={totalLaps}
          className={className}
          state={state}
        />
      ) : (
        <SessionTimer
          session={session}
          sessionTime={sessionTime}
          className={className}
          state={state}
        />
      )}
    </div>
  );
};

export default SessionBanner;

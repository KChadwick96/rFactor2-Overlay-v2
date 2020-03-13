import React from "react";
import { select, number, text, withKnobs } from "@storybook/addon-knobs";

import SessionBanner, { STATES, SESSIONS } from "./SessionBanner";

export const LapCounter = () => (
  <SessionBanner
    session={select("session", [SESSIONS.RACE], SESSIONS.RACE)}
    currentLap={number("currentLap", 4)}
    totalLaps={number("totalLaps", 37)}
    state={select(
      "state",
      [STATES.GREEN, STATES.YELLOW, STATES.RED, STATES.FINISHED],
      STATES.GREEN
    )}
  />
);

export const SessionTimer = () => (
  <SessionBanner
    session={select(
      "session",
      [SESSIONS.PRACTICE, SESSIONS.QUALIFY, SESSIONS.QUALIFY2, SESSIONS.WARMUP],
      SESSIONS.QUALIFY2
    )}
    sessionTime={text("sessionTime", "12:00")}
    state={select(
      "state",
      [STATES.GREEN, STATES.YELLOW, STATES.RED, STATES.FINISHED],
      STATES.GREEN
    )}
  />
);

export default {
  title: "Components/Session Banner",
  decorators: [withKnobs]
};

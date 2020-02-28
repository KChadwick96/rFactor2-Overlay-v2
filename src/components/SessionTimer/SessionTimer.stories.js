import React from "react";
import { select, withKnobs, text } from "@storybook/addon-knobs";

import SessionTimer, { STATES } from "./SessionTimer";

export const custom = () => (
  <SessionTimer
    session={text("session", "Q3")}
    sessionTime={text("sessionTime", "12:00")}
    state={select(
      "state",
      [STATES.GREEN, STATES.YELLOW, STATES.RED, STATES.FINISHED],
      STATES.GREEN
    )}
  />
);

export default {
  title: "Components/Session Timer",
  decorators: [withKnobs]
};

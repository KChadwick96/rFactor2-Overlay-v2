import React from "react";
import { number, select, withKnobs } from "@storybook/addon-knobs";

import LapCounter, { STATES } from "./LapCounter";

export const custom = () => (
  <LapCounter
    currentLap={number("currentLap", 4)}
    totalLaps={number("totalLaps", 37)}
    state={select(
      "state",
      [STATES.GREEN, STATES.YELLOW, STATES.RED, STATES.FINISHED],
      STATES.GREEN
    )}
  />
);

export default {
  title: "Components/Lap Counter",
  decorators: [withKnobs]
};

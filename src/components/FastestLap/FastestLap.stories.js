import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import FastestLap from "./FastestLap";

export const normal = () => (
  <FastestLap
    driverName={text("driverName", "Craig Baxter")}
    lapTime={text("lapTime", "1:14.444")}
  />
);

export default {
  title: "Components/Fastest Lap",
  decorators: [withKnobs]
};

import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import FastestLap from "./FastestLap";
import FastestLapV2 from "./FastestLapV2";

export const normal = () => (
  <FastestLap driverName={text("driverName", "Craig Baxter")} lapTime={text("lapTime", "1:14.444")} />
);

export const v2 = () => (
  <div style={{ marginLeft: "120px" }}>
    <FastestLapV2 />
  </div>
);

export default {
  title: "Components/Fastest Lap",
  decorators: [withKnobs]
};

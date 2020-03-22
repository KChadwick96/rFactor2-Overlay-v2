import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import FastestLap from "./FastestLap";

export const normal = () => (
  <div style={{ marginLeft: "120px" }}>
    <FastestLap
      firstName={text("First Name", "Kieran")}
      lastName={text("Last Name", "Chadwick")}
      lapTime={text("Lap Time", "1:20.467")}
    />
  </div>
);

export default {
  title: "Components/Fastest Lap",
  decorators: [withKnobs]
};

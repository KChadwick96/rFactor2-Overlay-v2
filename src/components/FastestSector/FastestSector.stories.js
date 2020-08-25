import React from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import FastestSector from "./FastestSector";

export const normal = () => (
  <FastestSector
    sector={number("sector", 1)}
    sectorTime={text("sectorTime", "28.591")}
    driverName={text("driverName", "Craig Baxter")}
  />
);

export default {
  title: "Components/Fastest Sector",
  decorators: [withKnobs]
};

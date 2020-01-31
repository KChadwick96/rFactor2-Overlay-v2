import React from "react";

import LapCounter from "../components/LapCounter/LapCounter";
import StandingRow from "../components/StandingRow/StandingRow";
import DriverTag from "../components/DriverTag/DriverTag";

import "./LayoutExample.scss";

const STANDINGS = [
  {
    driverName: "Chadwick",
    driverNameCode: "CHA",
    teamColour: "red",
    gapToLeader: 0
  },
  {
    driverName: "Carpenter",
    driverNameCode: "CAR",
    teamColour: "turquoise",
    gapToLeader: 1.2,
    interval: 1.2
  },
  {
    driverName: "Mangan",
    driverNameCode: "MAN",
    teamColour: "yellow",
    gapToLeader: 4.3,
    interval: 3.1,
    pit: true
  }
];

export const standard = () => (
  <div style={{ height: "700px", position: "relative" }}>
    <LapCounter
      currentLap={1}
      totalLaps={20}
      className="--margin-bottom-large"
    />
    {STANDINGS.map((props, index) => (
      <StandingRow position={index + 1} {...props} />
    ))}

    <DriverTag
      position={1}
      name="Kieran Chadwick"
      team="A racing team"
      className="onboard-example"
    />
  </div>
);

export default {
  title: "Layout"
};

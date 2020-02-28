import React from "react";

import LapCounter from "../components/LapCounter/LapCounter";
import SessionTimer from "../components/SessionTimer/SessionTimer";
import StandingRow, { VARIANTS } from "../components/StandingRow/StandingRow";
import DriverTag from "../components/DriverTag/DriverTag";

import "./LayoutExample.scss";

const STANDINGS = [
  {
    driverName: "Chadwick",
    driverNameCode: "CHA",
    teamColour: "red",
    fastestLap: "1:26.444",
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
  },
  {
    driverName: "Baxter",
    driverNameCode: "BAX",
    teamColour: "purple",
    gapToLeader: 100.3,
    interval: 40.1,
    out: true
  }
];

export const raceStandard = () => (
  <div className="container-example">
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

export const raceYellow = () => (
  <div className="container-example">
    <LapCounter
      currentLap={1}
      totalLaps={20}
      className="--margin-bottom-large"
      state="YELLOW"
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

export const timedStandard = () => (
  <div className="container-example">
    <SessionTimer
      session="Q3"
      sessionTime="12:00"
      className="--margin-bottom-large"
    />
    {STANDINGS.map((props, index) => (
      <StandingRow
        position={index + 1}
        {...props}
        variant={index === 0 ? VARIANTS.FASTEST_LAP : VARIANTS.LEADER_GAP}
      />
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

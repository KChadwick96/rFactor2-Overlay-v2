import React from "react";

import StandingRow from "./StandingRow";

export const leader = () => (
  <StandingRow
    position={1}
    driverName="Chadwick"
    driverNameCode="CHA"
    teamColour="red"
    gapToLeader={0}
  />
);

export const pit = () => (
  <StandingRow
    position={12}
    driverName="Mangan"
    driverNameCode="MAN"
    teamColour="yellow"
    gapToLeader={4.3}
    interval={3.1}
    pit
  />
);

export const out = () => (
  <StandingRow
    position={12}
    driverName="Mangan"
    driverNameCode="MAN"
    teamColour="yellow"
    gapToLeader={4.3}
    interval={3.1}
    out
  />
);

export const multiple = () => (
  <>
    <StandingRow
      position={1}
      driverName="Chadwick"
      driverNameCode="CHA"
      teamColour="red"
      gapToLeader={0}
    />
    <StandingRow
      position={2}
      driverName="Carpenter"
      driverNameCode="CAR"
      teamColour="turquoise"
      gapToLeader={1.2}
      interval={1.2}
    />
    <StandingRow
      position={12}
      driverName="Mangan"
      driverNameCode="MAN"
      teamColour="yellow"
      gapToLeader={4.3}
      interval={3.1}
      pit
    />
    <StandingRow
      position={13}
      driverName="Baxter"
      driverNameCode="BAX"
      teamColour="purple"
      gapToLeader={100.3}
      interval={40.1}
      pit
      out
    />
  </>
);

export default {
  title: "Components/Standing Row"
};

import React from "react";

import StandingRow from "./StandingRow";

export const normal = () => (
  <div style={{ maxWidth: "240px" }}>
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
    />
  </div>
);

export default {
  title: "Standing Row"
};

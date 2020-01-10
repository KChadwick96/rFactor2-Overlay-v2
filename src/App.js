import React, { Fragment } from "react";

import DriverTag from "./components/DriverTag/DriverTag";
import StandingRow from "./components/StandingRow/StandingRow";

const App = () => {
  return (
    <Fragment>
      <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
        <DriverTag position={1} name="Kieran Chadwick" team="A racing team" />
      </div>

      <div style={{ width: "260px", padding: "12px" }}>
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
    </Fragment>
  );
};

export default App;

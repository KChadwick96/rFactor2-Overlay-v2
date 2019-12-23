import React, { Fragment } from "react";

import DriverTag from "./components/DriverTag/DriverTag";
import StandingRow from "./components/StandingRow/StandingRow";

const App = () => {
  return (
    <Fragment>
      <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
        <DriverTag position={1} name="Kieran Chadwick" team="KRT" />
      </div>

      <div style={{ width: "280px", padding: "12px" }}>
        <StandingRow position={1} driverName="Chadwick" driverNameCode="CHA" />
        <StandingRow position={2} driverName="Carpenter" driverNameCode="CAR" />
      </div>
    </Fragment>
  );
};

export default App;

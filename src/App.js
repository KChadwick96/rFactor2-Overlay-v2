import React, { useEffect } from "react";

import { LogProvider } from "./context/LogContext";
import { DataProvider } from "./context/DataContext";
import DriverTag from "./components/DriverTag/DriverTag";
import StandingRow from "./components/StandingRow/StandingRow";
import Logs from "./components/Logs/Logs";

const App = () => {
  return (
    <LogProvider>
      <DataProvider>
        <Logs />

        <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
          <DriverTag position={1} name="Kieran Chadwick" team="A racing team" />
        </div>

        <div style={{ width: "260px", padding: "12px" }}>
          <StandingRow position={1} driverName="Chadwick" driverNameCode="CHA" teamColour="red" gapToLeader={0} />
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
      </DataProvider>
    </LogProvider>
  );
};

export default App;

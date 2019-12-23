import React from "react";

import DriverTag from "./components/DriverTag";
import "./App.css";

const App = () => {
  return (
    <div style={{ padding: "16px" }}>
      <DriverTag position={1} name="Kieran Chadwick" team="KRT" />
    </div>
  );
};

export default App;

import React from "react";

import LapCounter from "./LapCounter";

export const normal = () => <LapCounter currentLap={1} totalLaps={24} />;

export default {
  title: "Lap Counter"
};

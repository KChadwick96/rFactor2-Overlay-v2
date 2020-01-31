import React from "react";

import LapCounter from "./LapCounter";

export const standard = () => <LapCounter currentLap={1} totalLaps={24} />;
export const yellow = () => (
  <LapCounter currentLap={4} totalLaps={37} state="YELLOW" />
);
export const finished = () => (
  <LapCounter currentLap={24} totalLaps={24} state="FINISHED" />
);

export default {
  title: "Components/Lap Counter"
};

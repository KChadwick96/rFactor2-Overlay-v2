import React from "react";
import {
  withKnobs,
  text,
  boolean,
  select,
  number
} from "@storybook/addon-knobs";

import StandingRow, { VARIANTS } from "./StandingRow";

export const leader = () => (
  <StandingRow
    position={1}
    driverName="Chadwick"
    driverNameCode="CHA"
    teamColour="red"
    gapToLeader={0}
  />
);

export const custom = () => (
  <StandingRow
    position={number("position", 12)}
    driverName={text("driverName", "Mangan")}
    driverNameCode={text("driverNameCode", "MAN")}
    teamColour={text("teamColour", "purple")}
    gapToLeader={4.3}
    interval={3.1}
    pit={boolean("pit", true)}
    out={boolean("out", false)}
    variant={select(
      "mode",
      [VARIANTS.INTERVAL_GAP, VARIANTS.LEADER_GAP, VARIANTS.POSITION],
      VARIANTS.INTERVAL_GAP
    )}
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
  title: "Components/Standing Row",
  decorators: [withKnobs]
};

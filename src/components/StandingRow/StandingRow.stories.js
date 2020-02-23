import React, { Fragment } from "react";
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
  button,
  color
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
    teamColour={color("teamColour", "purple")}
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

const STANDINGS = [
  {
    driverName: "Chadwick",
    driverNameCode: "CHA",
    teamColour: "orange",
    gapToLeader: 0.5,
    interval: 0.5
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
    interval: 3.1
  },
  {
    driverName: "Baxter",
    driverNameCode: "BAX",
    teamColour: "purple",
    gapToLeader: 100.3,
    interval: 40.1
  }
];

function swapElement(array, indexA, indexB) {
  var tmp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tmp;
}

export const multiple = () => {
  let standings = STANDINGS;
  button("Swap leader", () => {
    swapElement(standings, 0, 1);
  });

  return (
    <Fragment>
      {standings.map((props, index) => (
        <StandingRow
          key={props.driverNameCode}
          position={index + 1}
          {...props}
        />
      ))}
    </Fragment>
  );
};

export default {
  title: "Components/Standing Row",
  decorators: [withKnobs]
};

import React from "react";

import "./StandingRow.scss";

const VARIANTS = {
  LEADER_GAP: "leader-gap",
  INTERVAL_GAP: "interval-gap",
  POSITION: "position"
};

const StandingRow = ({ position, driverName, driverNameCode, variant }) => {
  return (
    <li className="standing-row">
      <div className="standing-row__position">{position}</div>
      <div className="standing-row__name">{driverName}</div>
      <div className="standing-row__interval">+0.467</div>
    </li>
  );
};

export default StandingRow;

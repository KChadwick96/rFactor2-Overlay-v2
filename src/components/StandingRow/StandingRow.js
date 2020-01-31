import React, { useMemo } from "react";

import "./StandingRow.scss";

const VARIANTS = {
  INTERVAL_GAP: "interval-gap",
  LEADER_GAP: "leader-gap",
  POSITION: "position"
};

const TyreGraphic = () => {
  return <div className="tyre-graphic">M</div>;
};

const StandingRow = ({
  position,
  driverName,
  driverNameCode,
  teamColour,
  gapToLeader,
  interval,
  pit,
  variant = VARIANTS.INTERVAL_GAP
}) => {
  const name = variant === VARIANTS.POSITION ? driverName : driverNameCode;

  const gap = useMemo(() => {
    let value = 0;

    if (variant === VARIANTS.INTERVAL_GAP) {
      if (position === 1) return "Interval";
      value = interval;
    }

    if (variant === VARIANTS.LEADER_GAP) {
      if (position === 1) return "Leader";
      value = gapToLeader;
    }

    return `+${value.toFixed(3)}`;
  }, [position, variant, interval, gapToLeader]);

  return (
    <li className="standing-row">
      <div className="standing-row__wrapper">
        <div
          className="standing-row__position"
          style={{ borderRightColor: teamColour }}
        >
          {position}
        </div>
        <TyreGraphic />
        <div className="standing-row__name">{name}</div>
        <div className="standing-row__interval">{gap}</div>
      </div>
      {pit && <div className="standing-row__pit">pit</div>}
    </li>
  );
};

export default StandingRow;

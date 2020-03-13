import React, { useMemo } from "react";

import "./FastestLap.scss";

const FastestLap = ({ driverName, lapTime, className }) => {
  const classNames = useMemo(() => ["fastest-lap", className].join(" "), [className]);

  return (
    <div className={classNames}>
      <div className="fastest-lap__header">Fastest Lap</div>
      <div className="fastest-lap__name">{driverName}</div>
      <div className="fastest-lap__time">{lapTime}</div>
    </div>
  );
};

export default FastestLap;

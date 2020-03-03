import React from "react";

import "./FastestSector.scss";

const FastestSector = ({ sector, sectorTime, driverName }) => {
  return (
    <div className="fastest-sector">
      <div className="fastest-sector__number">Sector {sector}</div>
      <div className="fastest-sector__name">{driverName}</div>
      <div className="fastest-sector__time">{sectorTime}</div>
    </div>
  );
};

export default FastestSector;

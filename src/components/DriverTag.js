import React from "react";

import "./DriverTag.scss";

const FLAG =
  "https://aor-s3-overlay-settings.s3.eu-west-1.amazonaws.com/flags/gb.png";

const RELATIVE_POD_TYPES = {
  AHEAD: "ahead",
  BEHIND: "behind"
};

const RelativePod = ({ nameCode, timeDifference, type }) => {
  return (
    <div className="relative-pod">
      <p className="relative-pod__title">
        {type === RELATIVE_POD_TYPES.AHEAD ? "Ahead" : "Behind"}
      </p>
      <p className="relative-pod__difference">
        {nameCode} {timeDifference}
      </p>
    </div>
  );
};

const DriverTag = ({ name, position, team }) => {
  return (
    <div className="driver-tag">
      <div className="driver-tag__banner">
        <div className="driver-tag__content">
          <div className="driver-tag__position">{position}</div>
          <div className="driver-tag__details">
            <p className="driver-tag__name">{name}</p>
            {team && <p className="driver-tag__team">{team}</p>}
          </div>

          <img src={FLAG} alt="UK flag" className="driver-tag__flag" />
        </div>

        <span className="driver-tag__pod">2 stops</span>
        <span className="driver-tag__pod">Last 1:28.430</span>
        <span className="driver-tag__pod driver-tag__pod--constructive">
          Best 1:28.009
        </span>
      </div>

      <div className="driver-tag__relative-pod-container">
        <RelativePod nameCode="CHA" timeDifference="0.478" type="ahead" />
        <RelativePod nameCode="CAR" timeDifference="0.478" type="behind" />
      </div>
    </div>
  );
};

export default DriverTag;

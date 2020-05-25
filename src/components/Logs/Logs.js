import React, { useContext } from "react";

import { LogContext } from "../../context/LogContext";

const Logs = () => {
  const { logs } = useContext(LogContext);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 400,
        height: 600,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "white",
        fontSize: "12px",
        padding: "4px",
        fontFamily: "Consolas,monaco,monospace",
      }}
    >
      {logs &&
        logs.map(({ level, message }, index) => (
          <p key={`log-${index}`} style={{}}>
            <span>{level}</span>:&nbsp;{message}
          </p>
        ))}
    </div>
  );
};

export default Logs;

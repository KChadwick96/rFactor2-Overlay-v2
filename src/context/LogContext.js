import React, { useState } from "react";

const LogContext = React.createContext();

const LogProvider = ({ children }) => {
  const [logs, setLogs] = useState();

  const logger = (level, message) => {
    if (logs) {
      const a = logs.concat({ level, message });

      setLogs(a);
    } else {
      setLogs([{ level, message }]);
    }
  };

  return <LogContext.Provider value={{ logs, logger }}>{children}</LogContext.Provider>;
};

export { LogContext, LogProvider };

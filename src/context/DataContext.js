import React, { useEffect, useContext, useState } from "react";

import { LogContext } from "./LogContext";

const API_URL = "http://localhost:5397/rest/watch";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const { logger } = useContext(LogContext);

  const start = () => {
    logger("INFO", "Starting data fetch cycle...");

    setInterval(() => {
      getData();
    }, 2000);
  };

  useEffect(() => {
    start();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(API_URL);
      const body = await response.json();
      setData(body);
      logger("INFO", "Fetched sessionData!");
    } catch (ex) {
      logger("ERROR", `Failed to get data from ${API_URL} - ${ex.message || JSON.stringify(ex)}`);
    }
  };

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };

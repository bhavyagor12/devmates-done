import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=pub_781059c4c87ad81cf376039a3d4acc98d2ba&category=technology&q=coding%20OR%20jobs`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    AxiosAuth()
      .get("/colors")
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(colorList);

  return (
    <>
      <Bubbles colors={colorList} />
      <ColorList colors={colorList} updateColors={setColorList} />
    </>
  );
};

export default BubblePage;

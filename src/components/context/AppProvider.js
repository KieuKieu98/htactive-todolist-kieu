import React, { useState } from "react";

import ColorContext from "./ColorContext";

export default props => {
  const [page, setValue] = useState("");
  const [colorBtn, setcolorBtn] = useState("");
  // const [colorBlack, setColor] = useState(true);

  const changeColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgcolor = "rgb(" + x + "," + y + "," + z + ")";
    // setColor(!colorBlack);
    // const bgColor = colorBlack ? "black" : "white";
    // setcolorBtn(bgColor);
    setcolorBtn(bgcolor);
  };
  const changePage = page => setValue(page);
  return (
    <ColorContext.Provider
      value={{
        page,
        colorBtn,
        changeColor,
        changePage
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

import React, { useState } from "react";

import ColorContext from "./ColorContext";

export default props => {
  const [page, setValue] = useState("");
  const [colorBtn, setcolorBtn] = useState("");
  const [colorBlack, setColor] = useState(true);

  const changeColor = () => {
    setColor(!colorBlack);
    const bgColor = colorBlack ? "black" : "white";
    setcolorBtn(bgColor);
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

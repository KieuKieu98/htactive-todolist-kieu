import React, { useContext } from "react";

import ColorContext from "../context/ColorContext";

export default Component => props => {
  const context = useContext(ColorContext);

  return <Component {...context} {...props} />;
};

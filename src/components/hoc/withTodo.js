import React, { useContext } from "react";

import TodoContext from "../context/TodoContext";

export default Component => props => {
  
  const context = useContext(TodoContext);

  return <Component {...context} {...props} />;
};

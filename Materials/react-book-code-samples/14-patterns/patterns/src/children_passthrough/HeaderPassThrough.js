import React from "react";

const HeaderPassThrough = ({children}) => {
  return React.Children.only(children);
}

export default HeaderPassThrough;
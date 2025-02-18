import React, { Component } from "react";
import "./Dialog.css";

class CommonDialog extends Component {
  render() {
    const { dialogClass, content, ...props } = this.props;
    return  <div className={`dialog ${dialogClass}`} {...props} >
        {content}
      </div>;
  }
}

export default CommonDialog;
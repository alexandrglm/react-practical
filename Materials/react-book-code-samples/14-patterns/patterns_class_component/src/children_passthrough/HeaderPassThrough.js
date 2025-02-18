import React, { Component } from "react";

class HeaderPassThrough extends Component {
  render() {
    return React.Children.only(this.props.children);
  }
}

export default HeaderPassThrough;
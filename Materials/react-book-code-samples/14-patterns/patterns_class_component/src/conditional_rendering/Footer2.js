import React, { Component } from "react";

class Footer2 extends Component {
  render() {
    const data = this.props.data;
    return  (data == null || <div>No data</div>);
  }
}

export default Footer2;
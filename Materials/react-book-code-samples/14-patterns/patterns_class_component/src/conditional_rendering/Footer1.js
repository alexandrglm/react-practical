import React, { Component } from "react";

class Footer1 extends Component {
  render() {
    const data = this.props.data;
    return data && <div>{data.length} Records</div>;
  }
}

export default Footer1;
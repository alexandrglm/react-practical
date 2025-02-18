import React, { Component } from "react";

class Footer3 extends Component {
  render() {
    const data = this.props.data;
    return (
      data == null ? (
        <div>No Records</div>
      ) : (
        <div>{data.length} Records</div>
      )
    );
  }
}

export default Footer3;
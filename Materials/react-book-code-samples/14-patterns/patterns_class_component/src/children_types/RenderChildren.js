import React, { Component } from "react";

class RenderChildren extends Component {
  render() {
    return <div>
            {<h3>String type render</h3>}
            <h4>{[<b>This</b>, " is ", <i>Good</i>]}</h4>
            <h5>{[...this.props.words]}</h5>
        </div>;
  }
}

export default RenderChildren;
import React, { Component } from "react";

class Header extends Component {
  render () {
    return <div style={{color: "green"}}>
            {this.props.children}
        </div>;
  }
}

export default Header;
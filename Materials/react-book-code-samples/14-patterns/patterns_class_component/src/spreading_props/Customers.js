import React, { Component } from "react";
import Customer from "../destructuring_props/Customer";

class Customers extends Component {
  render() {
    return <div>
        {
            this.props.data.map( customer => 
                <Customer {...customer} />
            )
        }
      </div>;
  }
}

export default Customers;
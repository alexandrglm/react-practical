import React, { Component } from "react";
import Customers from "../spreading_props/Customers";
import customers from "../customers.json";

class CustomersContainer extends Component {
    constructor() {
        super()
        this.state = { customers: [] }
      }

    componentDidMount() {
        this.setState({customers});
      }

  render() {
    return <div>
        <h3>Customers</h3>
        <Customers data={this.state.customers} />
      </div>;
  }
}

export default CustomersContainer;
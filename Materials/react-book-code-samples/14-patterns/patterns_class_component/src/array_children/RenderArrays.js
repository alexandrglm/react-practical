import React, { Component } from "react";

class RenderArrays extends Component {
  render() {
      const customers = this.props.customers;
    return <div>
        { 
            customers.map( customer => 
                <div>{customer.name}</div>
            )
        }
        <div>
            {[customers.length, " customers"].map(text => <span>{text}</span>)}
        </div>
    </div>;
  }
}

export default RenderArrays;
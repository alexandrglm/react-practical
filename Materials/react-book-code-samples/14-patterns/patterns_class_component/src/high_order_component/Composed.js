import React from "react";
import customers from "../customers.json";

const Composed = Component =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { data: [] };
    }

    componentDidMount() {
      this.setState({ data: customers });
    }

    render() {
      return <Component data={this.state.data} {...this.props} />;
    }
  };

export default Composed;
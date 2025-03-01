import React, { Component } from "react";

class ControlledInput extends Component {
    constructor(props) {
        super(props)
        this.state = { value: "" }
      }

    onChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <input 
                type1="text" 
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                name={this.props.name}
            />;
    }
}

export default ControlledInput;
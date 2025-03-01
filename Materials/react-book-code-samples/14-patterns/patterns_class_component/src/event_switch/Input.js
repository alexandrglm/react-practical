import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
        super(props);
        this.state = { logEvent: "" };
  }

  handleEvent (event) {
    switch(event.type) {
        case "focus":
            this.setState({logEvent: "Focus event"});
            break;
        case "blur":
            this.setState({logEvent: "Blur event"});
            break;
        case "change":
            this.setState({logEvent: "Change event " + event.target.value});
            break;
        default:
            this.setState({logEvent: event.type});
            break;
    }
  }

  render() {
    return <div> 
        <input type="text" name={this.props.name} 
            onFocus={this.handleEvent.bind(this)}
            onChange={this.handleEvent.bind(this)}
            onBlur={this.handleEvent.bind(this)}
        />
        <div>{this.state.logEvent}</div>
    </div>;
  }
}

export default Input;
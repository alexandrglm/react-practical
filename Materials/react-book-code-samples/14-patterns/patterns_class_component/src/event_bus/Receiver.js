import React, { Component } from "react";
import bus from "./Bus";

class Receiver extends Component {
    constructor(props) {
      super(props);
      this.state = { message: null }
      bus.on("EVENT_HAPPENED", this.onEventReceived.bind(this));
      }

    onEventReceived (receivedMessage) {
        console.log("Event received", receivedMessage);
        this.setState({message: receivedMessage});
    }
  render() {
    return <div>
      { this.state.message &&
          <div>Event Received. Message: {this.state.message}</div>
      }
      </div>;
  }
}

export default Receiver;
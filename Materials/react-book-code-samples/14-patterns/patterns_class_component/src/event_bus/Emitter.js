import React, { Component } from "react";
import bus from "./Bus";

class Emitter extends Component {
    constructor(props) {
        super(props);
      }

    sayHello () {
        console.log("Event emitted");
        bus.emit("EVENT_HAPPENED", "It Works!");
    }
  render() {
    return <div>
        <button onClick={this.sayHello.bind(this)}>Say Hello</button>
      </div>;
  }
}

export default Emitter;
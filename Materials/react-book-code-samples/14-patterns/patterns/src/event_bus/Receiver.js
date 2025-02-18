import { useState, useEffect } from "react";
import bus from "./Bus";

const Receiver  = () => {  
    const [message, setMessage] = useState('');

    const onEventReceived = (receivedMessage) => {
      console.log("Event received", receivedMessage);
      setMessage(receivedMessage);
    } 

    useEffect(() => {
      bus.on("EVENT_HAPPENED", onEventReceived);
    })

    return (
      <div>{message && <div>Event Received. Message: {message}</div>}</div>
    );
  }


export default Receiver;
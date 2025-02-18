import { useState } from "react";

const Input = ({name}) => {
    const [logEvent, setLogEvent] = useState("")

    const handleEvent = (event) => {
      switch (event.type) {
        case "focus":
          setLogEvent("Focus event");
          break;
        case "blur":
          setLogEvent("Blur event");
          break;
        case "change":
          setLogEvent("Change event " + event.target.value);
          break;
        default:
          setLogEvent({ logEvent: event.type });
          break;
      }
    }

    return <div> 
        <input type="text" name={name} 
            onFocus={handleEvent}
            onChange={handleEvent}
            onBlur={handleEvent}
        />
        <div>{logEvent}</div>
    </div>;
  }

export default Input;
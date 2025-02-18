import bus from "./Bus";

const Emitter= () => {
    const sayHello = ()=>  {
      console.log("Event emitted");
      bus.emit("EVENT_HAPPENED", "It Works!");
    }
    return <div>
        <button onClick={sayHello}>Say Hello</button>
      </div>;
  }

export default Emitter;
import "./App.css";
import { useState } from "react";

function App() {
  const [read, setRead] = useState(true);
  const [display, setDisplay] = useState("none");

  const readmore = (e) => {
    console.log(e.target);
    setRead(!read);
    setDisplay(read ? "inline" : "none");
  };
  return (
    <p>
      A computer is a machine that can be programmed to carry out sequences of
      arithmetic or...<span style={{ display: display }}>logical operations (computation) automatically. Modern
      digital electronic computers can perform generic sets of operations known
      as programs. These programs enable computers to perform a wide range of
      tasks.
     </span>
      <a onClick={readmore} style={{ color: "blue", fontSize: "10px" }}>
        {read ? "read more" : "read less"}
      </a>
    </p>
  );
}

export default App;

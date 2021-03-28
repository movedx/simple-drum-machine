import { useEffect, useState } from "react";
import DrumPad from "./DrumPad";
import Display from "./Display";
import styles from "./App.module.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [displayText, setDisplayText] = useState("Play with keyboard!");

  return (
    <div id="drum-machine" className={styles.container}>
      <Display text={displayText} />
      <div className={styles.pads}>
        <DrumPad id="Q" setDisplayText={setDisplayText} />
        <DrumPad id="W" setDisplayText={setDisplayText} />
        <DrumPad id="E" setDisplayText={setDisplayText} />
        <DrumPad id="A" setDisplayText={setDisplayText} />
        <DrumPad id="S" setDisplayText={setDisplayText} />
        <DrumPad id="D" setDisplayText={setDisplayText} />
        <DrumPad id="Z" setDisplayText={setDisplayText} />
        <DrumPad id="X" setDisplayText={setDisplayText} />
        <DrumPad id="C" setDisplayText={setDisplayText} />
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
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
  return <div></div>;
}

export default App;

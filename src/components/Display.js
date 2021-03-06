import React from "react";
import styles from "./Display.module.css";

const Display = (props) => {
  return (
    <div className={styles.display} id="display">
      {props.text}
    </div>
  );
};

export default Display;

import React, { useEffect, useRef } from "react";
import styles from "./DrumPad.module.css";
import soundBank from "../soundBank";

const DrumPad = (props) => {
  useEffect((props) => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sample = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === props.id.toLowerCase()) play();
  };

  const play = async () => {
    let text = soundBank[props.id.toLowerCase()];
    props.setDisplayText(text.substr(text.lastIndexOf("/") + 1));
    // sample.current.currentTime = 0;
    await sample.current.play();
  };

  const handleClick = (e) => {
    play();
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className="drum-pad" id={props.id}>
        {props.id}
        <audio
          className="clip"
          ref={sample}
          id={props.id}
          preload="auto"
          src={soundBank[props.id.toLowerCase()]}
        ></audio>
      </div>
    </div>
  );
};

export default DrumPad;

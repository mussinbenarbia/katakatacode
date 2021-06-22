import React from "react";
import { useTimer } from "react-timer-hook";
import { useEffect } from "react";
export default function Timer({ expiryTimestamp, setGamePhase }) {
  const { seconds, minutes, start } = useTimer({
    expiryTimestamp,
    onExpire: () => setGamePhase(2),
  });

  useEffect(() => {
    console.log(expiryTimestamp);
    start();
  }, []);

  return (
    <div id="clock" style={{ textAlign: "center" }}>
      <div>
        <span>{minutes}</span>:
        <span>{seconds.toString().length === 1 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

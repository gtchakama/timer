import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { timeLeft } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countDownDate }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownDate]);

  function updateRemainingTime(countdown) {
    setRemainingTime(timeLeft(countdown));
  }

  return (
    <>
      <h1 className="title">We Are Launching In</h1>
      <div className="countdown-timer">
        <span>{remainingTime.days}</span>
        <span>days</span>
        <span className="time">{remainingTime.hours}</span>
        <span>hours</span>
        <span className="time">{remainingTime.minutes}</span>
        <span>minutes</span>
        <span className="time">{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
    </>
  );
};

export default CountdownTimer;

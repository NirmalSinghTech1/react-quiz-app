import { useState, useEffect } from "react";

export default function ProgressBar({ onSkipAnswer, timeout }) {
  const [questionTimer, setQuestionTimer] = useState(timeout);
  const timeLeft = (questionTimer / timeout) * 100;

  useEffect(() => {
    const timeoutId = setTimeout(onSkipAnswer, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onSkipAnswer, timeout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuestionTimer((prevTimer) =>
        prevTimer > 0 ? prevTimer - 30 : prevTimer,
      );
    }, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeout]);

  return (
    <progress
      value={timeLeft}
      max={100}
      className={`h-2.5 md:h-2 w-full mb-4 shadow-2xl -translate-1 appearance-none md:translate-0 md:w-md
            ${timeout === 3000 ? "[&::-webkit-progress-value]:bg-violet-800" : "[&::-webkit-progress-value]:bg-[#8e76fa]"}
            [&::-webkit-progress-value]:rounded-2xl
            [&::-webkit-progress-bar]:bg-gray-700
            [&::-webkit-progress-bar]:rounded-lg
          `}
    />
  );
}

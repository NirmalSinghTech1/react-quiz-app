import { useMemo } from "react";
import QUESTIONS from "../questions.js";

export default function Question({
  onAddAnswer,
  activeQuestionIndex,
  answerStatus,
}) {
  const shuffledAnswers = useMemo(() => {
    return shuffleArray(QUESTIONS[activeQuestionIndex].answers);
  }, [activeQuestionIndex]);

  return (
    <div className="text-center">
      <h2 className="text-gray-300 font-semibold text-lg mb-9 md:text-xl md:font-normal md:mb-9">
        {QUESTIONS[activeQuestionIndex].text}
      </h2>
      <ul className="text-md mt-4 flex flex-col gap-2 font-roboto-condensed md:w-2xl mx-auto">
        {shuffledAnswers.map((answer) => {
          let optionColor = "";

          if (answerStatus.answer === answer) {
            if (answerStatus.status === "answered") {
              optionColor = "bg-[#D68246]";
            } else if (answerStatus.status === "wrong") {
              optionColor = `bg-[#DD3A44]/80`;
            } else if (answerStatus.status === "correct") {
              optionColor = "bg-green-700";
            }
          }

          return (
            <li
              key={answer}
              className={`${optionColor ? optionColor : "bg-blue-400/50"} rounded-4xl h-14 animate-[slideUp_0.5s_ease-in-out_1] md:text-md text-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out ${answerStatus.status ? "hover:bg-none" : "hover:bg-violet-500"}`}
            >
              <button
                onClick={() => onAddAnswer(answer)}
                className="cursor-pointer py-1 px-4 h-full w-full rounded-4xl"
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function shuffleArray(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));
    [result[randomNum], result[i]] = [result[i], result[randomNum]];
  }

  return result;
}

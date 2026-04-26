import { useState } from "react";

import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import QUESTIONS from "./questions.js";
import Scoreboard from "./components/Scoreboard.jsx";

function App() {
  const [answers, setAnswers] = useState([]);
  const [answerStatus, setAnswerStatus] = useState({
    answer: null,
    status: "",
  });

  const quizIsComplete = answers.length === QUESTIONS.length;
  const activeQuestionIndex = answers.length;
  let timer = 5000;

  if (answerStatus.answer !== null) {
    timer = 3000;
  }

  function handleSkipAnswer() {
    setAnswers((prevAnswers) => [...prevAnswers, null]);
  }

  function handleAddAnswer(answer) {
    setAnswerStatus({ answer: answer, status: "answered" });
    const isCorrect = QUESTIONS[activeQuestionIndex].answers[0] === answer;

    setTimeout(() => {
      setAnswerStatus((prevStatus) => ({
        ...prevStatus,
        status: isCorrect ? "correct" : "wrong",
      }));

      setTimeout(() => {
        setAnswers((prevAnswers) => [...prevAnswers, answer]);
        setAnswerStatus({ answer: null, status: "" });
      }, 2000);
    }, 1000);
  }

  return (
    <>
      <main className="w-full">
        {!quizIsComplete ? (
          <div className="bg-linear-to-b from-gray-800 to-gray-950 mx-3 rounded-xl px-3 pb-10 h-100 shadow-[0_3px_10px_1px_rgba(0,0,0,0.5)] animate-[slideUp_0.6s_ease-in-out_1] md:p-11 md:h-auto md:mx-auto max-w-[49em]">
            <ProgressBar
              onSkipAnswer={!answerStatus.answer ? handleSkipAnswer : null}
              timeout={timer}
              key={answerStatus.status ? timer : activeQuestionIndex}
            />
            <Question
              onAddAnswer={handleAddAnswer}
              activeQuestionIndex={activeQuestionIndex}
              answerStatus={answerStatus}
            />
          </div>
        ) : (
          <Scoreboard answers={answers} />
        )}
      </main>
    </>
  );
}

export default App;

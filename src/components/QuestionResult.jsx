import QUESTIONS from "../questions.js";

export default function QuestionResult({ questionText, answer, questionNum }) {
  const isAnswerCorrect = QUESTIONS[questionNum - 1].answers[0] === answer;

  return (
    <li>
      <span className="bg-gray-950 rounded-[50%] w-[2em] h-[2em] inline-block pt-1">
        {questionNum}
      </span>
      <p className="text-gray-800 mt-1 text-[1em]">{questionText}</p>
      <p
        className={`font-roboto-condensed font-medium ${!answer ? "italic text-red-800" : isAnswerCorrect ? "text-green-900" : "text-red-900"} `}
      >
        {!answer ? "'Not Answered'" : answer}
      </p>
    </li>
  );
}

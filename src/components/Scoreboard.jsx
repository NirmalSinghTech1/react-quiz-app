import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import QuestionResult from "./QuestionResult";

export default function Scoreboard({ answers }) {
  const totalSkipped = answers.filter((answer) => answer === null);
  const skippedPercentage = Math.round(
    (totalSkipped.length / answers.length) * 100,
  );
  const correctAnswers = answers.filter(
    (answer, index) => QUESTIONS[index].answers[0] === answer,
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / answers.length) * 100,
  );
  const incorrectPercentage = Math.round(
    ((answers.length - totalSkipped.length - correctAnswers.length) /
      answers.length) *
      100,
  );

  return (
    <div className="flex flex-col items-center mx-auto bg-linear-to-br from-violet-300/80 to-violet-400/70 max-w-140 w-4/5 min-w-60 py-9 px-10 mb-10 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.7)] animate-[slideUpSlow_1s_ease-in-out_1]">
      <div className="border-2 border-gray-900 rounded-[50%] w-25 h-25 md:w-35 md:h-35 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        <img
          src={quizCompleteImg}
          alt="Trophy image"
          width={50}
          height={50}
          className="md:w-20 md:h-20"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-shadow-sm tracking-wide uppercase mt-6 text-gray-900">
        Quiz Completed!
      </h1>
      <div className="w-80 mt-7 font-roboto-condensed border-b-2 border-b-gray-900/60 pb-8 mb-8">
        <ul className="grid grid-cols-3 items-start gap-8 text-gray-900/60">
          <li className="">
            <span className="text-[2.5rem]">{skippedPercentage}%</span>
            <p className="uppercase text-[0.9rem] font-medium">Skipped</p>
          </li>
          <li className="">
            <span className="text-[2.5rem]">{correctPercentage}%</span>
            <p className="uppercase text-[0.9rem] font-medium">
              Answered Correctly
            </p>
          </li>
          <li className="">
            <span className="text-[2.5rem]">{incorrectPercentage}%</span>
            <p className="uppercase text-[0.9rem] font-medium">
              Answered Incorrectly
            </p>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-8">
          {answers.map((answer, index) => (
            <QuestionResult
              key={index}
              questionText={QUESTIONS[index].text}
              answer={answer}
              questionNum={index + 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

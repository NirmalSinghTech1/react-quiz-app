import QUESTIONS from "../questions.js";
import Option from "./Option";

export default function Question() {
  return (
    <div className="text-center">
      <h2 className="text-gray-300 font-semibold text-lg mb-9 md:text-xl md:font-normal md:mb-9">
        Which of the following definitions best describes React.js?
      </h2>
      <ul className="text-md mt-4 flex flex-col gap-2 font-roboto-condensed md:w-2xl mx-auto">
        {QUESTIONS[1].answers.map((answer) => (
          <Option key={answer} answer={answer} />
        ))}
      </ul>
    </div>
  );
}

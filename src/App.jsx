import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";

function App() {
  return (
    <>
      <main>
        <div className="bg-linear-to-b from-gray-800 to-gray-950 mt-5 mx-3 rounded-xl px-3 pb-10 h-auto shadow-[0_3px_10px_1px_rgba(0,0,0,0.5)] animate-[slideUp_0.6s_ease-in-out_1] md:p-11 md:h-auto md:mx-auto max-w-[49em]">
          <ProgressBar />
          <Question />
        </div>
      </main>
    </>
  );
}

export default App;

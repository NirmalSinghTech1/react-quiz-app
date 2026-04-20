function App() {

  return (
    <>
      <main>
        <div className="bg-linear-to-b from-gray-800 to-gray-950 mt-12 mx-3 rounded-xl px-3 h-100 shadow-2xl">
          <progress value={50} max={100} className="h-2.5 w-full mb-4 shadow-2xl -translate-1 appearance-none 
            [&::-webkit-progress-value]:bg-fuchsia-500
            [&::-webkit-progress-value]:rounded-2xl
            [&::-webkit-progress-bar]:bg-gray-700
            [&::-webkit-progress-bar]:rounded-lg
          " />
          <div className="text-left">
            <h2 className="text-gray-300 font-semibold text-lg">Which of the following definitions best describes React.js?</h2>
            <ul className="text-md mt-4 flex flex-col gap-2 font-roboto-condensed">
              <li className="py-1 px-4 bg-violet-500/40 rounded-4xl h-14 justify-center">A library to build user interfaces with help of declarative code.</li>
              <li className="py-1 px-4 bg-violet-500/30 rounded-4xl h-14 flex items-center animate-[slideUp_0.3s_ease-in_1]">A library for managing state in web applications.</li>
              <li className="py-1 px-4 bg-violet-500/20 rounded-4xl h-14">A framework to build user interfaces with help of imperative code.</li>
              <li className="py-1 px-4 bg-violet-500/10 rounded-4xl h-14 flex items-center">A library used for building mobile applications only.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

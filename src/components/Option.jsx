export default function Option({ answer }) {
  return (
    <li className="py-1 px-4 bg-violet-500/30 rounded-4xl h-14 animate-[slideUp_0.5s_ease-in-out_1] md:text-md text-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-violet-400/50">
      {answer}
    </li>
  );
}

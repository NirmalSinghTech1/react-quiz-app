export default function ProgressBar() {
  return (
    <progress
      value={50}
      max={100}
      className="h-2.5 md:h-2 w-full mb-4 shadow-2xl -translate-1 appearance-none md:translate-0 md:w-md
            [&::-webkit-progress-value]:bg-[#8e76fa]
            [&::-webkit-progress-value]:rounded-2xl
            [&::-webkit-progress-bar]:bg-gray-700
            [&::-webkit-progress-bar]:rounded-lg
          "
    />
  );
}

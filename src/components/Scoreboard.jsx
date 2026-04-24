import quizCompleteImg from '../assets/quiz-complete.png';

export default function Scoreboard() {
    return (
        <div className='flex flex-col items-center mx-auto bg-linear-to-br from-violet-400 to-violet-500 max-w-130 w-4/5 min-w-60 py-9 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.7)] animate-[slideUpSlow_1s_ease-in-out_1]'>
            <div className='border-2 border-gray-900 rounded-[50%] w-25 h-25 md:w-35 md:h-35 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
                <img src={quizCompleteImg} alt="Trophy image" width={50} height={50} className='md:w-20 md:h-20' />
            </div>
            <h1 className='text-2xl md:text-4xl font-bold text-shadow-sm tracking-wide uppercase mt-6 text-gray-900'>Quiz Completed!</h1>
        </div>
    )
}
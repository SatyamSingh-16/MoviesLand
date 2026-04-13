function Pagination({ handlePrev, handleNext, pages }) {
  return (
    <div className="flex justify-center items-center py-12 bg-[#0f171e]">
      <div className="flex items-center gap-8 px-6 py-3 bg-gray-800/50 backdrop-blur-md rounded-full border border-gray-700 shadow-2xl">
        <div
          onClick={handlePrev}
          className="cursor-pointer text-gray-400 hover:text-teal-400 transition-all duration-200 transform hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-teal-500 rounded-full text-white font-bold shadow-[0_0_15px_rgba(45,212,191,0.5)]">
          {pages}
        </div>

        <div
          onClick={handleNext}
          className="cursor-pointer text-gray-400 hover:text-teal-400 transition-all duration-200 transform hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

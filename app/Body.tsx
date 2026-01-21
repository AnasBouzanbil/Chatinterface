export default function Body() {
  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] flex flex-col justify-center items-center border border-gray-300 px-4 sm:px-0">
      {/* Title */}
      <h1 className="mt-20 text-center text-2xl sm:text-3xl font-bold">
        what i can help you with?
      </h1>

      <div className="flex flex-col justify-between items-start w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 min-h-[180px] mt-10 border border-gray-300 p-4 bg-white shadow-md rounded-3xl overflow-hidden">
        {/* Input */}
        <input
          type="text"
          placeholder="Ask anything"
          className="w-full p-2 rounded-md focus:outline-none transition"
        />

        <div className="flex flex-wrap justify-between items-center w-full mt-4 gap-2">
          <div className="flex flex-wrap gap-2">
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold p-2 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>

            {/* Button 2 */}
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 rounded-full flex items-center whitespace-nowrap">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
              <p className="text-sm">open search</p>
            </button>

            {/* Button 3 */}
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 rounded-full flex items-center whitespace-nowrap">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <p className="text-sm">reasoning</p>
            </button>

            {/* Button 4 */}
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold p-2 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
          </div>

          {/* Send button */}
          <div>
            <button className="bg-black hover:bg-gray-800 text-white font-bold p-2 rounded-full flex items-center justify-center w-10 h-10">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 px-4 max-w-md text-center">
        <div className="border border-gray-300 rounded-md px-4 py-2 bg-white shadow-sm w-full">
          <p className="text-gray-700 text-sm font-semibold">
            You've hit the limit. You can upgrade to Pro
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Response would use another model (cheaper)
          </p>
        </div>
        <p className="text-gray-500 text-xs max-w-xs">
          AI can make mistakes. Please verify critical information from reliable
          sources.
        </p>
      </div>
    </div>
  );
}
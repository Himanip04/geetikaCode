import ThrowCard from "../ThrowCard/ThrowCard";

export default function ChatTopicCard() {
  return (
    <div className="flex justify-center  bg-white rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 border border-[#e6e8ed]">
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-12">
        
        {/* Left Side (Text) */}
        <div className="flex-1 flex flex-col items-start md:items-start">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-3">
            Talk about anything,<br/>anytime, anywhere
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-2">
            Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.
          </p>
        </div>

        {/* Right Side (Card) */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-xs bg-white rounded-3xl shadow-xl p-6">
            <div className="text-gray-500 text-xs text-center w-full">Create your own</div>
            <div className="bg-gray-100 rounded-2xl p-5 mb-4 text-left space-y-4">
              {/* Row 1 */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 transition">
                <span className="text-xl">👤</span>
                <span className="text-gray-800 text-sm">Tourist</span>
              </div>
              {/* Row 2 */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 transition">
                <span className="text-xl">🤝</span>
                <span className="text-gray-800 text-sm">New friend</span>
              </div>
              {/* Row 3 */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 transition">
                <span className="text-xl">🗺️</span>
                <span className="text-gray-800 text-sm leading-snug">
                  Talking about the best places to grab dinner in San Francisco.
                </span>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#3558ff] text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
              Start chatting
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
}

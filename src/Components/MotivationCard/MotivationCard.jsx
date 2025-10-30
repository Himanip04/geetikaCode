import ThrowCard from "../ThrowCard/ThrowCard";

export default function MotivationCard() {
  return (
    <div className="flex justify-center bg-white rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 border border-[#e6e8ed]">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-[26px] md:text-[36px] font-semibold text-[#0c145c] leading-snug">
            Stay motivated and <br className="hidden md:block" /> reach your goals
          </h1>

          <p className="text-[#5f6575] text-[14px] md:text-[15px] mt-4 leading-relaxed max-w-sm mx-auto md:mx-0">
            Speak Tutor keeps you motivated and accountable to achieve your goals.
            Learning a language is better with someone by your side.
          </p>
        </div>

        {/* RIGHT MAIN CARD */}
        <div className="relative w-full flex justify-center md:block">

          <div className="bg-white rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-5 md:p-6 border border-[#e6e8ed] w-full max-w-[390px]">

            <div className="bg-[#fafafa] rounded-2xl p-5 md:p-6">

              {/* Icon */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-11 h-11 rounded-full bg-[#4f6aff] flex items-center justify-center text-white text-xl">
                  💬
                </div>
              </div>

              {/* Two Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="bg-[#d95b79] text-white p-4 rounded-xl text-[13px] leading-snug text-center sm:text-left">
                  You're interested in traveling, and exploring new cultures.
                </div>

                <div className="bg-[#3152ff] text-white p-4 rounded-xl text-[13px] leading-snug text-center sm:text-left">
                  We’ve created unique lessons and conversations based on those goals.
                </div>
              </div>

              {/* Button */}
              <button className="mt-6 bg-[#3152ff] w-full py-3 rounded-xl text-white text-sm font-medium hover:opacity-90 transition">
                Get Started
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}




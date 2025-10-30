import ThrowCard from "../ThrowCard/ThrowCard";

export default function TripNotificationCard() {
  return (
   
    <div className="flex justify-center  bg-white rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 border border-[#e6e8ed]">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2340] leading-snug mb-3">
            Build a relationship<br/>with your tutor
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Speak Tutor designs a personalized curriculum as unique as you are by getting to know you deeply over time.
          </p>
        </div>

        {/* RIGHT UI CARD */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-[32px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative w-[320px] md:w-[360px]">

            {/* Phone top bar */}
            <div className="text-[10px] text-gray-400 mb-3">9:41</div>

            {/* Notification Bubble */}
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
              <div className="font-semibold text-[#1a2340] text-sm mb-1">Speak</div>
              <p className="text-gray-600 text-xs leading-snug">
                Hey Audrey, your trip to Mexico is in 6 days!<br/>
                Let's practice some vocabulary for your trip!
              </p>
              <div className="text-[10px] text-gray-400 text-right mt-1">now</div>
            </div>

            {/* Placeholder grid (just like screenshot) */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-[#eef0f7]"
                ></div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
    
  );
}

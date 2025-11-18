export default function Education({ dark }) {
  return (
    <section className="mt-10">
      <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-[#6e4f2a]"}`}>
        Education
      </h3>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* BTech */}
        <div
          className={`p-5 rounded-xl ${
            dark ? "bg-[#14012b] border-[#3c1cff]" : "bg-[#fff7ec]"
          }`}
        >
          <p className={`${dark ? "text-[#b599ff]" : "text-[#a67845]"} font-semibold`}>
            B.Tech — Computer Science
          </p>
          <p className={`text-xs mt-1 ${dark ? "text-[#cbb9ff]" : "text-[#9c8468]"}`}>
            Uttarakhand Technical University
          </p>
          <p className={`text-xs mt-1 ${dark ? "text-[#cbb9ff]" : "text-[#9c8468]"}`}>
            2020 — 2023
          </p>
        </div>

        {/* Diploma */}
        <div
          className={`p-5 rounded-xl ${
            dark ? "bg-[#14012b] border-[#3c1cff]" : "bg-[#fff7ec]"
          }`}
        >
          <p className={`${dark ? "text-[#b599ff]" : "text-[#a67845]"} font-semibold`}>
            Diploma — Computer Science & Engineering
          </p>
          <p className={`text-xs mt-1 ${dark ? "text-[#cbb9ff]" : "text-[#9c8468]"}`}>
           Uttarakhand Board of Technical Education
          </p>
          <p className={`text-xs mt-1 ${dark ? "text-[#cbb9ff]" : "text-[#9c8468]"}`}>
            2017 — 2020
          </p>
        </div>

      </div>
    </section>
  );
}

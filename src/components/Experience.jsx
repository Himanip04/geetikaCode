export default function Experience({ dark }) {
  return (
    <section className="mt-10">
      <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-[#6e4f2a]"}`}>
        Experience
      </h3>

      <div
        className={`mt-3 p-5 rounded-xl ${
          dark ? "bg-[#14012b] border-[#3c1cff]" : "bg-[#fff7ec]"
        }`}
      >
        <p className={`${dark ? "text-[#b599ff]" : "text-[#a67845]"} font-semibold`}>
          Associate Developer — Evon Technologies
        </p>
        <p className={`text-xs mt-1 ${dark ? "text-[#cbb9ff]" : "text-[#9c8468]"}`}>
          Jul 2023 — Aug 2025
        </p>

        <p className={`mt-2 text-sm ${dark ? "text-[#dcd4ff]" : "text-[#7f6a55]"}`}>
         Collaborated with team members to develop and implement new software features, resulting in a 20% increase in product
 functionality- Streamlined code development processes, reducing project completion time by 15%- Conducted thorough testing and debugging of code, leading to a 30% decrease in software error
        </p>
      </div>
    </section>
  );
}

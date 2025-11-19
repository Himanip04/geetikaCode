import React from "react";

const PROFILE_PATH = "/profile.jpg";
const RESUME_PATH = "/Resume_Himani.pdf";

export default function Sidebar({ dark, setDark }) {
  const skills = [
    "React.js",
    "React Native",
    "JavaScript",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <aside
      className={`col-span-1 rounded-3xl p-8 relative border transition-all duration-500 ${
        dark
          ? "bg-[#0a0120] border-[#3c1cff] shadow-[0_0_25px_#3c1cff]"
          : "bg-white border-[#f2e8d9] shadow-xl"
      }`}
    >
      {/* Glow */}
      <div
        className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-40 ${
          dark ? "bg-[#6d28ff]" : "bg-[#f7e7c8]"
        }`}
      ></div>

      <div className="flex flex-col items-center text-center relative">

        {/* Avatar */}
        <div
          className={`w-40 h-40 rounded-full overflow-hidden border-4 shadow-lg ${
            dark
              ? "border-[#6d28ff] shadow-[0_0_20px_#6d28ff55]"
              : "border-[#f7d9a3]"
          }`}
        >
          <img
            src={PROFILE_PATH}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className={`mt-4 text-2xl font-bold ${dark ? "text-[#bdaaff]" : "text-[#6e4f2a]"}`}>
          Himani Pant
        </h1>

        {/* Role */}
        <p className={`${dark ? "text-[#9f84ff]" : "text-[#a67845]"} font-medium mt-1`}>
          Full Stack Developer
        </p>

        {/* Social */}
        <div className="mt-3 flex gap-6">
          <a
            href="https://github.com/Himanip04"
            target="_blank"
            rel="noreferrer"
            className={`text-lg ${dark ? "text-[#bdaaff] hover:text-white" : "text-[#6e4f2a] hover:text-black"}`}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/himani-pant-982a67223/"
            target="_blank"
            rel="noreferrer"
            className={`text-lg ${dark ? "text-[#bdaaff] hover:text-white" : "text-[#6e4f2a] hover:text-black"}`}
          >
            LinkedIn
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href={RESUME_PATH}
            download
            className={`px-5 py-2 rounded-full text-white ${
              dark
                ? "bg-[#7b5bff] hover:bg-[#6d28ff]"
                : "bg-[#a67845] hover:bg-[#8e6234]"
            }`}
          >
            Resume
          </a>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className={`px-5 py-2 rounded-full ${
              dark
                ? "border border-[#6d28ff] text-[#cbb9ff] hover:bg-[#6d28ff44]"
                : "border border-[#d6c7b2] text-[#6e4f2a]"
            }`}
          >
            Contact
          </button>
        </div>

        {/* SKILLS + LANGUAGES — (Missing earlier, added now) */}
        <div className="mt-8 w-full text-left">
          {/* Skills heading */}
          <h4
            className={`text-xs font-bold uppercase tracking-wider ${
              dark ? "text-[#b599ff]" : "text-[#a67845]"
            }`}
          >
            Skills
          </h4>

          {/* Skills list */}
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className={`text-xs px-3 py-1 rounded-full ${
                  dark
                    ? "bg-[#14012b] border border-[#3c1cff] text-[#dcd4ff] shadow-[0_0_10px_#3c1cff55]"
                    : "bg-[#fff7ec] border border-[#f1e4d2] text-[#6e4f2a]"
                }`}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Languages */}
          <h4
            className={`text-xs font-bold uppercase mt-6 ${
              dark ? "text-[#b599ff]" : "text-[#a67845]"
            }`}
          >
            Languages
          </h4>

          <p className={`mt-2 text-sm ${dark ? "text-[#d2c9ff]" : "text-[#7f6a55]"}`}>
            English, Hindi
          </p>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className={`absolute top-2 right-2 w-12 h-6 rounded-full p-1 flex items-center ${
            dark ? "bg-[#421cb3]" : "bg-[#e8dcc6]"
          }`}
        >
          <span
            className={`w-6 h-6 rounded-full transition-transform ${
              dark ? "translate-x-6 bg-[#cbb9ff]" : "translate-x-0 bg-white"
            }`}
          />
        </button>
      </div>
    </aside>
  );
}

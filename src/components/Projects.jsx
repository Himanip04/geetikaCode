export default function Projects({ dark }) {
    const data = [
        {
            title: "User Profile (Full Stack)",
            desc:
                "Built a Naukri-like job portal with React Native and Spring Boot WebFlux. Implemented job search, filters, authentication, profile management, and notifications. Developed scalable REST APIs and ensured clean, modular, and secure architecture.",
            tech: "React Native · Spring Boot · PostgreSQL · MongoDB",
        },

   {
  title: "3D Demo App & Meeting Tool",
  desc:
    "Built a real-time collaboration tool with group/direct chat, interactive UI, and productivity-focused features using React and Tailwind, improving communication and teamwork.",
  tech: "React · Tailwind · HTML",
}

    ];

    return (
        <section className="mt-10">
            <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-[#6e4f2a]"}`}>
                Projects
            </h3>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((p) => (
                    <div
                        key={p.title}
                        className={`p-5 rounded-xl ${dark ? "bg-[#14012b] border-[#3c1cff]" : "bg-[#fff7ec]"
                            }`}
                    >
                        <h4 className={`${dark ? "text-[#b599ff]" : "text-[#a67845]"} font-semibold`}>
                            {p.title}
                        </h4>
                        <p className="text-sm mt-2">{p.desc}</p>
                        <p className={`mt-2 text-xs ${dark ? "text-[#cbb9ff]" : "text-[#9c8468]"}`}>
                            {p.tech}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

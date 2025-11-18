export default function Header({ dark }) {
  return (
    <>
      <h2 className={`text-3xl font-bold ${dark ? "text-white" : "text-[#6e4f2a]"}`}>
        Hello — I’m Himani
      </h2>

      <p className={`mt-3 max-w-xl ${dark ? "text-[#d3caff]" : "text-[#7f6a55]"}`}>
       Full Stack Developer with 2 years of experience building scalable web and mobile apps. Skilled in React, React Native, Java, and Spring Boot. I focus on clean code, performance optimization, and delivering real-world solutions with an agile, problem-solving mindset
      </p>
    </>
  );
}

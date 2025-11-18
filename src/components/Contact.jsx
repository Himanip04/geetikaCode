export default function Contact({ dark }) {
  const data = [
    { label: "Email", value: "himanipant333@gmail.com" },
    { label: "Phone", value: "+91-9193538464" },
    { label: "Location", value: "Dehradun, India" },
  ];

  return (
    <section className="mt-10" id="contact">
      <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-[#6e4f2a]"}`}>
        Contact
      </h3>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((c) => (
          <div
            key={c.label}
            className={`p-5 rounded-xl ${
              dark ? "bg-[#14012b] border-[#3c1cff]" : "bg-[#fff7ec]"
            }`}
          >
            <p className={`${dark ? "text-[#b599ff]" : "text-[#a67845]"} text-xs`}>
              {c.label}
            </p>
            <p className="font-medium mt-1 break-words">{c.value}</p>
          </div>
        ))}
      </div>

      <p
        className={`mt-8 text-center text-sm ${
          dark ? "text-[#b9aaff]" : "text-[#9c8468]"
        }`}
      >
        © {new Date().getFullYear()} Himani Pant — All Rights Reserved
      </p>
    </section>
  );
}

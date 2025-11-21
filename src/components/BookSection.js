import React from "react";

const books = [
  {
    id: 1,
    title: "Mohabbat Se Mohabbat Tak Ka Safar",
    description: "A soulful tale of romance and reunion.",
    img: "/1000162102.jpg", // Your 1st image
    link: "https://hindi.pratilipi.com/series/mohabbat-se-mohabbat-tak-ka-safar-by-geetika-pant-k6j1dm4malol",
  },
  {
    id: 2,
    title: "Dard Se Mohabbat Tak Ka Safar",
    description: "An emotional journey of pain, healing and love.",
    img: "/1000162098.jpg", // Your 2nd image
    link: "https://hindi.pratilipi.com/series/dard-se-mohabbat-tak-ka-safar-by-geetika-pant-ccvppnhibms4",
  },
  {
    id: 3,
    title: "Dooriyan",
    description: "A suspenseful story exploring distances of heart.",
    img: "/IMG-20241008-WA0002.jpg", // Your 3rd image
    link: "https://hindi.pratilipi.com/series/dooriyan-by-geetika-pant-qbzpn1lkpms3",
  },
  {
  id: 4,
  title: "Ankahi Dastan",
  description: "A tender and unspoken tale of hidden emotions, lost connections, and quiet longing. It delves into the spaces between words and hearts — where love, regret, and hope intertwine in a story that is felt more than said.",
  img: "/580714.jpg", 
  link: "https://hindi.pratilipi.com/series/ankahi-dastan-by-geetika-pant-bmxhfjzf9nwv",
},
{
  id: 5,
  title: "Ankahi Dastan – Season 2",
  description: "The next chapter of untold stories — exploring deeper longings, hidden truths, and the evolving journey of the soul. Season 2 peels back more layers of unspoken emotions, giving voice to what was never said.",
  img: "/cover (1).webp", 
  link: "https://hindi.pratilipi.com/series/ankahi-dastan-season-2-by-geetika-pant-5d9bp1kkswyf",
},
{
  id: 6,
  title: "Vachan – A Promise of Love and Duty",
  description: "A compelling narrative about love, commitment, and the delicate balance between heart and duty. In this story, promises define identities, and decisions shape destinies.",
  img: "/cover.webp", 
  link: "https://hindi.pratilipi.com/series/vachan-a-promis-of-love-and-duty-by-geetika-pant-zisunaiamadd",
},
];

export default function BooksSection() {
  return (
    <div className="py-20 bg-[#faf8ff]" id="books">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10 font-serif">
        📚 My Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-20">

        {books.map((book, index) => (
          <div
            key={index}
            className={`
              ${book.color}
              p-4 rounded-xl shadow-lg w-full max-w-xs mx-auto transform 
              hover:rotate-1 hover:-translate-y-1 transition-all duration-500 
              border border-purple-200 cursor-pointer
            `}
          >

            {/* Polaroid Style */}
            <div className="bg-white p-3 rounded-md shadow-inner">
              <img
                src={book.img}
                alt={book.title}
                className="h-40 w-full object-cover rounded-md shadow"
              />
            </div>

            <p className="text-center font-semibold mt-4 text-purple-700 italic font-serif">
              {book.title}
            </p>

            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center bg-purple-600 text-white py-2 rounded-lg shadow hover:bg-purple-700 transition"
            >
              Read on Pratilipi
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}


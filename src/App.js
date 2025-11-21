import React from "react";
import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import BooksSection from "./components/BookSection";

// Artistic Pastel Storybook Portfolio Hero Section
export default function App() {
  return (
    <div className="font-serif bg-gradient-to-b from-pink-50 to-purple-50 min-h-screen text-gray-800">

      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-purple-700">✒️ Geetika Pant</h1>
        <p className="text-lg mt-2 text-gray-600">
          Hindi Fiction Writer · Emotional · Thriller · Suspense
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 space-y-14 pb-20">

        {/* About Me */}
        <section className="bg-white/70 backdrop-blur-md shadow-md p-8 rounded-2xl border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">🌸 About Me</h2>
          <p className="leading-relaxed text-gray-700">
           I am a storyteller who transforms emotions into meaningful narratives—crafting poems and stories that resonate with the heart. Through my work on Pratilipi and my YouTube channel ‘Tales From My Pen,’ I explore themes of love, separation, healing, and human connection. My writing style blends simplicity with depth, bringing everyday feelings to life with a touch of poetic grace. With each story I share, my aim is to leave readers with something they can carry—a thought, a feeling, a quiet moment that stays.
          </p>
        </section>

        {/* Books – REAL BOOK STYLE */}
        <BooksSection />

        {/* Platforms */}
        <section className="bg-white/70 shadow-md p-8 rounded-2xl border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">🌼 Story Platforms</h2>

          <div className="space-y-3">
            <a
              href="https://hindi.pratilipi.com/user/गीतिका-पंत-t29r6a74r4?utm_campaign=general&utm_source=web_share"
              target="_blank"
              className="block underline text-purple-700 text-lg"
            >
              📖 Pratilipi Profile
            </a>
            <a
              href="https://www.youtube.com/@TalesFromMyPen"
              target="_blank"
              className="block underline text-purple-700 text-lg"
            >
              🎧 YouTube — Tales From My Pen
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white/70 shadow-md p-8 rounded-2xl border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">🌟 Freelance Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Fiction ghostwriting (Hindi)</li>
            <li>Story writing (short & long)</li>
            <li>Audio story scripts</li>
            <li>Story-to-audio narration</li>
            <li>Emotional & thriller storytelling</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-pink-50 shadow-md p-8 rounded-2xl border border-pink-100">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">🌷 Contact</h2>
          <p className="text-gray-700 text-lg">
            📩 Email: <b>pantgeetika1997@gmail.com</b>
          </p>
        </section>

      </div>
    </div>
  );
}

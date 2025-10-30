import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import MotivationCard from "../MotivationCard/MotivationCard";
import ChatTopicCard from "../ChatTopicCard/ChatTopicCard";
import TripNotificationCard from "../TripNotificationCard/TripNotificationCard";

export default function ScrollStack() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ---- CARD 1 ---- */
  const rawCard1Y = useTransform(scrollYProgress, [0, 0.25], [0, -200]);
  const card1Y = useSpring(rawCard1Y, { stiffness: 120, damping: 20 });

  const rawCard1Opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const card1Opacity = useSpring(rawCard1Opacity, { stiffness: 120, damping: 20 });

  /* ---- CARD 2 ---- */
  const rawCard2EnterY = useTransform(scrollYProgress, [0.12, 0.32], [200, 0]);
  const card2EnterY = useSpring(rawCard2EnterY, { stiffness: 140, damping: 22 });

  const rawCard2EnterOpacity = useTransform(scrollYProgress, [0.15, 0.30], [0, 1]);
  const card2EnterOpacity = useSpring(rawCard2EnterOpacity, { stiffness: 140, damping: 22 });

  const rawCard2ExitY = useTransform(scrollYProgress, [0.32, 0.50], [0, -200]);
  const card2ExitY = useSpring(rawCard2ExitY, { stiffness: 140, damping: 22 });

  const rawCard2ExitOpacity = useTransform(scrollYProgress, [0.32, 0.50], [1, 0]);
  const card2ExitOpacity = useSpring(rawCard2ExitOpacity, { stiffness: 140, damping: 22 });

  /* ---- CARD 3 ---- */
  const rawCard3Y = useTransform(scrollYProgress, [0.45, 0.85], [200, 0]);
  const card3Y = useSpring(rawCard3Y, { stiffness: 130, damping: 25 });

  const rawCard3Opacity = useTransform(scrollYProgress, [0.50, 0.90], [0, 1]);
  const card3Opacity = useSpring(rawCard3Opacity, { stiffness: 130, damping: 25 });

  return (
    <>
      {/* STACK SECTION */}
      <div ref={containerRef} className="relative h-[350vh] bg-[#f7f7f8]">

        {/* CARD 1 */}
        <motion.div
          style={{ y: card1Y, opacity: card1Opacity }}
          className="sticky top-24 flex justify-center z-[3]"
        >
          <div className="max-w-5xl w-full px-4">
            <MotivationCard />
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          style={{ y: card2ExitY, opacity: card2ExitOpacity }}
          className="sticky top-24 flex justify-center z-[2]"
        >
          <motion.div
            style={{ y: card2EnterY, opacity: card2EnterOpacity }}
            className="max-w-5xl w-full px-4"
          >
            <ChatTopicCard />
          </motion.div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          style={{ y: card3Y, opacity: card3Opacity }}
          className="sticky top-24 flex justify-center z-[1]"
        >
          <div className="max-w-5xl w-full px-4">
            <TripNotificationCard />
          </div>
        </motion.div>
      </div>

      {/* AFTER SECTION */}
      <section className="bg-white py-32 px-6 text-center">
        <div className="mt-10 inline-block bg-[#f1f1f3] text-gray-700 px-4 py-2 rounded-full">
          Jessica Park
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="text-[40px] font-semibold text-[#1d1d1f] leading-snug">
            “The first time I used Speak Tutor, I couldn’t believe it wasn’t a real person.”
          </p>
          <p className="mt-6 text-xl text-gray-600">
            It understands my motivations at a deep level.
          </p>
        </div>
      </section>
    </>
  );
}

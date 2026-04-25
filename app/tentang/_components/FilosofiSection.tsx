"use client";
import { motion } from "framer-motion";

const FilosofiSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  const cards = [
    {
      title: "Website Bukan Sekadar Tampilan",
      desc: "Kami percaya bahwa website bukan sekadar tampilan, tetapi alat untuk membangun kepercayaan dan membuka peluang bisnis.",
    },
    {
      title: "Fokus pada Dampak Nyata",
      desc: "Karena itu, kami tidak hanya berfokus pada desain, tetapi juga pada bagaimana website tersebut dapat digunakan secara nyata oleh bisnis Anda.",
    },
    {
      title: "Tujuan yang Jelas",
      desc: "Bagi kami, website yang baik adalah website yang memiliki tujuan, struktur yang jelas, dan mampu memberikan dampak.",
    },
    {
      title: "Komitmen Kami",
      desc: "Setiap website yang kami buat dirancang dengan arah yang terarah, membantu bisnis Anda dikenal, dipercaya, dan menghasilkan peluang.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          {...fadeUp()}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Filosofi Kami
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(0.1 * (idx + 1))}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-lg">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilosofiSection;
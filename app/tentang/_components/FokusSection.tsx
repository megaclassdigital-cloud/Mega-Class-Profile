"use client";
import { motion } from "framer-motion";

const FokusSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  const list = [
    "Membantu bisnis tampil lebih profesional di mata pelanggan",
    "Meningkatkan kepercayaan melalui tampilan website yang jelas dan terstruktur",
    "Membantu bisnis mendapatkan peluang pelanggan melalui website",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          {...fadeUp()}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
        >
          Fokus Kami dalam Setiap Website
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Kami membantu bisnis memiliki website yang tidak hanya sekadar online, tetapi benar-benar dapat digunakan untuk mendukung perkembangan bisnis.
        </motion.p>

        <div className="space-y-4">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(0.1 * (idx + 2))}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow-sm"
            >
              <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                ✓
              </span>
              <p className="text-gray-700 text-lg">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.5)}
          className="text-gray-600 text-center mt-8"
        >
          Kami tidak hanya membuat website, tetapi membantu bisnis memiliki media digital yang benar-benar bisa digunakan.
        </motion.p>
      </div>
    </section>
  );
};

export default FokusSection;
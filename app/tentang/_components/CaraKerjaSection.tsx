"use client";
import { motion } from "framer-motion";

const CaraKerjaSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  const paragraf = [
    "Kami menggunakan pendekatan yang terstruktur dalam setiap project. Dimulai dari memahami kebutuhan bisnis, menyusun konsep website, hingga proses pembuatan dan finalisasi.",
    "Setiap tahap dilakukan secara jelas agar website yang dihasilkan tidak hanya menarik secara tampilan, tetapi juga sesuai dengan tujuan bisnis Anda.",
    "Kami mengutamakan komunikasi yang jelas dan proses yang transparan, sehingga Anda dapat mengikuti perkembangan project dari awal hingga selesai.",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          {...fadeUp()}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Cara Kami Bekerja
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {paragraf.map((text, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.1)}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                {idx + 1}
              </div>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaraKerjaSection;
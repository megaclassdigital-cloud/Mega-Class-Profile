"use client";
import { motion } from "framer-motion";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const BlogSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  const articles = [
    {
      title: "Mengapa Bisnis Kecil Perlu Website Profesional",
      desc: "Di era digital, website menjadi aset penting untuk membangun kredibilitas dan menjangkau pasar yang lebih luas. Pelajari bagaimana website profesional dapat mendorong pertumbuhan bisnis Anda.",
      date: "Segera hadir",
    },
    {
      title: "Tips Memilih Jasa Pembuatan Website yang Tepat",
      desc: "Memilih jasa website yang tepat sangat berpengaruh pada hasil akhir. Kami rangkum hal-hal penting yang perlu Anda pertimbangkan sebelum memutuskan.",
      date: "Segera hadir",
    },
    {
      title: "Apa Itu SEO dan Kenapa Penting untuk Website Anda",
      desc: "SEO membantu website Anda muncul di halaman pertama Google. Pahami konsep dasarnya dan bagaimana penerapannya pada website bisnis Anda.",
      date: "Segera hadir",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          {...fadeUp()}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Blog & Artikel
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Temukan artikel seputar website, bisnis, dan strategi digital untuk membantu Anda berkembang.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(0.1 * (idx + 1))}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <DocumentTextIcon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {article.desc}
              </p>
              <span className="text-xs text-gray-400">{article.date}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.4)}
          className="text-gray-500 text-sm mt-8"
        >
          Blog akan segera tersedia. Nantikan artikel informatif dari kami.
        </motion.p>
      </div>
    </section>
  );
};

export default BlogSection;
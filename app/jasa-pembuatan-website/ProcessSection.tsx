"use client";
import { motion } from "framer-motion";

const processSteps = [
  { number: "1", title: "Konsultasi", desc: "Konsultasi kebutuhan bisnis Anda" },
  { number: "2", title: "Konsep", desc: "Penentuan konsep dan struktur website" },
  { number: "3", title: "Desain & Development", desc: "Proses desain dan development" },
  { number: "4", title: "Revisi", desc: "Revisi hingga sesuai keinginan" },
  { number: "5", title: "Launch", desc: "Website siap digunakan" },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proses Pembuatan Website
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-600">
            Proses kami transparan dan terarah.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6 md:gap-0">
          {processSteps.map((step, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="flex-1 flex flex-col items-center text-center px-2">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block w-8 border-t-2 border-dashed border-gray-300 my-6 mx-auto" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
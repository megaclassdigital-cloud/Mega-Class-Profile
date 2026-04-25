"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
  {
    number: "1",
    title: "Konsultasi",
    desc: "Kami memahami kebutuhan bisnis Anda, target market, serta tujuan pembuatan website agar sesuai dengan arah bisnis yang ingin dicapai.",
  },
  {
    number: "2",
    title: "Perencanaan Konsep Website",
    desc: "Kami menyusun struktur halaman, alur website, dan konsep tampilan agar sesuai dengan kebutuhan dan jenis bisnis Anda.",
  },
  {
    number: "3",
    title: "Proses Desain & Pembuatan Website",
    desc: "Website mulai dikerjakan berdasarkan konsep yang telah disepakati, dengan desain yang profesional dan struktur yang sudah dirancang sebelumnya.",
  },
  {
    number: "4",
    title: "Revisi",
    desc: "Anda dapat memberikan revisi sesuai dengan kesepakatan awal agar hasil website sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    number: "5",
    title: "Website Siap Digunakan",
    desc: "Website dipublikasikan dan dapat langsung digunakan untuk promosi, branding, dan menerima calon pelanggan.",
  },
  {
    number: "6",
    title: "Setup & Finalisasi",
    desc: "Kami melakukan pengecekan akhir, setup domain dan hosting, serta memastikan website dapat diakses dengan baik sebelum diserahkan kepada Anda.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Alur Pengerjaan Jasa Pembuatan Website di Mega Class Digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Kami menggunakan alur kerja yang jelas dari tahap konsultasi hingga website siap digunakan, sehingga Anda dapat mengikuti setiap proses dengan mudah.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Kiri: Grid 2 kolom x 3 baris */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Kanan: Ilustrasi tim */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format"
                alt="Tim profesional bekerja bersama"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            {/* Lingkaran blur dekoratif */}
            <div className="absolute w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
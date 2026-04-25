"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-24 bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] text-white overflow-hidden">
      {/* Background Layer: Grid Minimalis & Ambient Glow */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />
      <div className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[140px] opacity-10 -top-20 -left-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADLINE: Center, Bold, & Clean (Sesuai Referensi) */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h1
            {...fadeUp(0)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4"
          >
            Tentang <span className="text-cyan-400">Mega Class</span> Digital
          </motion.h1>
          <motion.div 
            {...fadeUp(0.1)}
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* SUB-HEADLINE & CARD: Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sub-Headline: Clean & Professional */}
          <motion.div 
            {...fadeUp(0.2)} 
            className="lg:col-span-5"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              Mega Class Digital adalah digital agency yang berfokus pada pembuatan website untuk membantu bisnis tampil <span className="text-cyan-400">profesional</span>, <span className="text-cyan-400 font-bold">terpercaya</span>, dan siap bersaing di era digital.
            </p>
          </motion.div>

          {/* Card: Floating Glass (Sederhana tanpa banyak ikon) */}
          <motion.div
            {...fadeUp(0.3)}
            className="lg:col-span-7 relative"
          >
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 shadow-xl">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-normal italic">
                "Kami percaya bahwa setiap bisnis membutuhkan fondasi digital yang jelas, bukan sekadar website yang ada. Karena itu, setiap website yang kami buat dirancang dengan tujuan yang terarah: membantu bisnis Anda dikenal, dipercaya, dan menghasilkan peluang."
              </p>
              
              {/* Garis Aksen Sederhana */}
              <div className="mt-8 h-1 w-16 bg-cyan-400 rounded-full opacity-50" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
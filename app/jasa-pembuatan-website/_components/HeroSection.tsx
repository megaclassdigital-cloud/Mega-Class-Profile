    "use client";
    import Image from "next/image";
    import Link from "next/link";
    import { motion } from "framer-motion";

    const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Developement Profesional Website yang Dirancang untuk Mendatangkan Pelanggan
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-lg md:text-xl text-white/90 mb-4 max-w-lg">
                Bukan sekadar tampilan. Kami membantu bisnis Anda tampil lebih dipercaya dan siap mendapatkan customer melalui website yang dibangun dengan strategi yang jelas.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm text-white/60 mb-8">
                Mulai dari nol hingga siap digunakan, tanpa ribet dan tanpa bingung.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-wrap gap-4">
                <a href="https://wa.me/6281234567890" className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3.5 rounded-full font-semibold hover:brightness-110 hover:scale-105 transition-all">
                    Konsultasi Gratis via WhatsApp
                </a>
                <Link href="/portfolio" className="border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all">
                    Lihat Portfolio Kami
                </Link>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                <Image src="/images/hero-illustration.svg" alt="Ilustrasi jasa pembuatan website profesional" fill className="object-contain" priority />
                </div>
                <div className="absolute w-64 h-64 bg-cyan-400 rounded-full blur-[120px] opacity-20 -z-10" />
            </motion.div>
            </div>
        </div>
        </section>
    );
    };

    export default HeroSection;
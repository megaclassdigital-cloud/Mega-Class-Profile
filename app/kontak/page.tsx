import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Hubungi Kami | Mega Class Digital",
  description: "Diskusikan kebutuhan website Anda bersama kami.",
};

export default function KontakPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Diskusikan kebutuhan website Anda bersama kami.
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Formulir Kontak</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nama</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pesan</label>
                  <textarea rows={4} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition">
                  Kirim Pesan
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Informasi Kontak</h2>
              <div className="space-y-3 text-gray-700">
                <p>WhatsApp: 0812-3456-7890</p>
                <p>Email: hello@megaclassdigital.com</p>
                <p>Alamat: Jakarta, Indonesia</p>
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center w-full sm:w-auto bg-green-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.175.598 4.22 1.638 5.977L0 24l6.273-1.638A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-1.94 0-3.77-.57-5.32-1.56l-.38-.23-3.75.98 1-3.65-.25-.4A9.56 9.56 0 012.4 12c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm5.22-7.2c-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.9 1.11-.17.19-.34.22-.63.08-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.68-1.57-1.96-.16-.28-.02-.43.13-.57.13-.13.28-.34.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.54-.47-.47-.64-.47-.17 0-.36-.02-.55-.02s-.5.07-.77.35c-.26.28-1 1-1 2.45s1.03 2.84 1.18 3.03c.14.19 2.02 3.09 4.89 4.33.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.68-.69 1.92-1.35.23-.66.23-1.23.16-1.35-.07-.11-.26-.18-.54-.32z"/>
                  </svg>
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
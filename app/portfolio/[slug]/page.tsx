import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { notFound } from "next/navigation";

interface PortfolioDetail {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  content: string;
  meta_title: string;
  meta_description: string;
  keywords: string;
  created_at: string;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabaseAdmin
    .from("portfolio")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) return { title: "Portfolio Tidak Ditemukan | Mega Class Digital" };

  return {
    title: data.meta_title || data.title + " | Mega Class Digital",
    description: data.meta_description || data.description?.slice(0, 160),
    keywords: data.keywords || "",
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const { data } = await supabaseAdmin
    .from("portfolio")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) notFound();

  const item = data as PortfolioDetail;

  const isValidImageUrl = (url: string | null | undefined): boolean => {
    if (!url || url.trim() === "") return false;
    return url.startsWith("/") || url.startsWith("http://") || url.startsWith("https://");
  };

  const strengths = item.keywords
    ? item.keywords.split(",").map((k: string) => k.trim()).filter(Boolean)
    : [];

  return (
    <main className="bg-white">
      <Navbar />
      <article>
        {/* ===== HEADER ===== */}
        <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(34,211,238,0.15),transparent_50%)]" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <ScrollReveal>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-white/70 hover:text-white text-sm gap-1 mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Portfolio
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full mb-4">
                {item.category}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {item.title}
              </h1>
            </ScrollReveal>
            {item.description && (
              <ScrollReveal delay={0.3}>
                <p className="text-lg md:text-xl text-white/80 max-w-3xl">
                  {item.description}
                </p>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* ===== KONTEN UTAMA ===== */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            {/* Gambar Utama */}
            <ScrollReveal>
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
                {isValidImageUrl(item.image) ? (
                  <Image
                    src={item.image}
                    alt={item.meta_title || item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Sinopsis Project */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Tentang Project
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  {item.description ? (
                    <p className="text-lg">{item.description}</p>
                  ) : (
                    <p className="text-gray-500 italic">Tidak ada deskripsi.</p>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Detail Studi Kasus */}
            {item.content && (
              <ScrollReveal>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Detail Studi Kasus
                  </h2>
                  <div
                    className="prose prose-blue max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </ScrollReveal>
            )}

            {/* Kelebihan */}
            {strengths.length > 0 && (
              <ScrollReveal>
                <div className="mb-12 bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md border border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Kelebihan yang Ditonjolkan
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {strengths.map((strength, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* CTA */}
            <ScrollReveal>
              <div className="text-center mt-16 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">Tertarik dengan project serupa?</p>
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3.5 rounded-full font-semibold hover:brightness-110 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.175.598 4.22 1.638 5.977L0 24l6.273-1.638A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-1.94 0-3.77-.57-5.32-1.56l-.38-.23-3.75.98 1-3.65-.25-.4A9.56 9.56 0 012.4 12c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm5.22-7.2c-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.9 1.11-.17.19-.34.22-.63.08-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.68-1.57-1.96-.16-.28-.02-.43.13-.57.13-.13.28-.34.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.54-.47-.47-.64-.47-.17 0-.36-.02-.55-.02s-.5.07-.77.35c-.26.28-1 1-1 2.45s1.03 2.84 1.18 3.03c.14.19 2.02 3.09 4.89 4.33.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.68-.69 1.92-1.35.23-.66.23-1.23.16-1.35-.07-.11-.26-.18-.54-.32z"/>
                  </svg>
                  Konsultasi Gratis via WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </article>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
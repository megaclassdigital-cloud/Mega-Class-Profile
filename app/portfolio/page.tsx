"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  meta_title: string;
  created_at: string;
}

const LIMIT = 9;

export default function PortfolioPage() {
  const [categories, setCategories] = useState<string[]>(["Semua"]);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPortfolio(activeCategory, page);
  }, [activeCategory, page]);

  const fetchCategories = async () => {
    const res = await fetch("/api/admin/categories");
    if (res.ok) {
      const data: { name: string }[] = await res.json();
      const catNames = data.map((c) => c.name);
      setCategories(["Semua", ...catNames]);
    }
  };

  const fetchPortfolio = async (category: string, pageNum: number) => {
    setLoading(true);
    const params = new URLSearchParams();
    if (category !== "Semua") params.set("category", category);
    params.set("page", String(pageNum));
    params.set("limit", String(LIMIT));

    const res = await fetch(`/api/portfolio?${params.toString()}`);
    if (res.ok) {
      const { data, total } = await res.json();
      setPortfolioItems(data || []);
      setHasMore(pageNum * LIMIT < total);
      setTotal(total);
    }
    setLoading(false);
  };

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setPage(1);
  };

  const isValidImageUrl = (url: string | null | undefined) =>
    url && url.trim() !== "" &&
    (url.startsWith("/") || url.startsWith("http://") || url.startsWith("https://"));

  return (
    <main>
      <Navbar />
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Website
            </h1>
            <p className="text-lg text-gray-600">
              Kumpulan website yang telah kami kerjakan untuk berbagai kebutuhan bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Sidebar Kategori (20%) */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-2 sticky top-24">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Portfolio (80%) */}
            <div className="md:col-span-5">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-center items-center py-32"
                  >
                    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  </motion.div>
                ) : portfolioItems.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-32 text-gray-500"
                  >
                    <p className="text-lg">Belum ada portfolio.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeCategory + page}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {portfolioItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden flex flex-col"
                      >
                        {/* Gambar sebagai link ke detail */}
                        <Link href={`/portfolio/${item.slug}`} className="relative h-48 w-full overflow-hidden block">
                          {isValidImageUrl(item.image) ? (
                            <Image
                              src={item.image}
                              alt={item.meta_title || item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        {/* Konten card */}
                        <div className="p-4 flex flex-col flex-1">
                          <div className="mb-2">
                            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <Link
                            href={`/portfolio/${item.slug}`}
                            className="text-lg font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors"
                          >
                            {item.title}
                          </Link>
                          {item.description && (
                            <p className="text-gray-600 text-sm line-clamp-2 mb-3 flex-1">
                              {item.description}
                            </p>
                          )}

                          {/* Tombol tambahan: Konsultasi Gratis & Lihat Hasil */}
                          <div className="flex items-center gap-3 text-xs">
                            <a
                              href="https://wa.me/6281234567890"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                            >
                              Konsultasi Gratis
                            </a>
                            <Link
                              href={`/portfolio/${item.slug}`}
                              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                            >
                              Lihat Hasil
                            </Link>
                          </div>

                          {/* Tanggal & Lihat Study Case */}
                          <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs text-gray-400">
                              {new Date(item.created_at).toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "long",
                              })}
                            </span>
                            <Link
                              href={`/portfolio/${item.slug}`}
                              className="text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              Lihat Study Case →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination */}
          {total > LIMIT && !loading && (
            <div className="flex justify-center items-center mt-10 gap-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">
                Halaman {page}
              </span>
              <button
                onClick={() => setPage((p) => (hasMore ? p + 1 : p))}
                disabled={!hasMore}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
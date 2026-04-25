import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | Mega Class Digital",
  description:
    "Layanan jasa pembuatan website profesional untuk bisnis Anda. Cepat, responsif, dan siap digunakan untuk mendapatkan pelanggan.",
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa buat website bisnis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
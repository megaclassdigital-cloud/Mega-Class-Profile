import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | Mega Class Digital",
  description:
    "Jasa pembuatan website profesional untuk bisnis Anda. Cepat, responsif, dan siap digunakan untuk mendapatkan pelanggan.",
  keywords: ["jasa pembuatan website", "jasa website profesional", "jasa buat website bisnis"],
};

export default function JasaWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
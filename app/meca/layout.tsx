import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MecaFooter from "@/components/meca/MecaFooter";
import MecaNavbar from "@/components/meca/MecaNavbar";
import "./meca.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-meca-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://megaclassdigital.com"),
  title: {
    default: "MECA | Website Pengelolaan Bimbel dan Tempat Kursus",
    template: "%s | MECA",
  },
  description:
    "Website untuk mengelola kelas, jadwal, siswa, materi, pembayaran, dan hasil belajar bimbel atau tempat kursus.",
  alternates: { canonical: "/meca" },
  openGraph: {
    title: "MECA by Mega Class Digital",
    description: "Kelola kelas, jadwal, siswa, materi, pembayaran, tugas, dan laporan dari satu website.",
    type: "website",
    url: "https://megaclassdigital.com/meca",
    locale: "id_ID",
    images: [
      {
        url: "/images/meca/meca-3d-hero.png",
        width: 1536,
        height: 1024,
        alt: "Visual tiga dimensi ekosistem belajar MECA",
      },
    ],
  },
};

export default function MecaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} meca-site`}>
      <MecaNavbar />
      {children}
      <MecaFooter />
    </div>
  );
}

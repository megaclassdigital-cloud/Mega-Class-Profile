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
    "Kenali demo MECA, aplikasi manajemen bimbel dan tempat kursus untuk mengatur jadwal, data siswa, materi, tugas, pembayaran, dan laporan dalam satu tempat.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
  twitter: {
    card: "summary_large_image",
    title: "Aplikasi Manajemen Bimbel dan Tempat Kursus | MECA",
    description: "Atur jadwal, siswa, materi, tugas, pembayaran, dan laporan bimbel dari satu website.",
    images: ["/images/meca/meca-3d-hero.png"],
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

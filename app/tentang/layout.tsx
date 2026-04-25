import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Mega Class Digital | Jasa Pembuatan Website Profesional",
  description:
    "Mega Class Digital adalah digital agency yang berfokus pada pembuatan website untuk membantu bisnis tampil profesional, terpercaya, dan siap bersaing di era digital.",
};

export default function TentangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
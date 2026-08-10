type MecaStructuredDataProps = {
  page: "home" | "features" | "mecademy" | "faq";
  faqItems?: ReadonlyArray<readonly [string, string]>;
};

const baseUrl = "https://megaclassdigital.com";

const pageDetails = {
  home: {
    name: "Aplikasi Manajemen Bimbel dan Tempat Kursus | MECA",
    description:
      "MECA adalah demo aplikasi manajemen bimbel dan tempat kursus untuk mengatur jadwal, siswa, materi, tugas, pembayaran, dan laporan dalam satu tempat.",
    path: "/meca",
  },
  features: {
    name: "Fitur Aplikasi Administrasi Bimbel dan Kursus | MECA",
    description:
      "Fitur MECA membantu pengelola bimbel mengatur kelas, siswa, materi, tugas, tagihan, progres belajar, dan laporan pemilik.",
    path: "/meca/fitur",
  },
  mecademy: {
    name: "Gamifikasi Pembelajaran untuk Bimbel | Mecademy MECA",
    description:
      "Mecademy membawa gamifikasi pembelajaran ke bimbel melalui misi, poin, peringkat, julukan, event, dan pamer karya.",
    path: "/meca/mecademy",
  },
  faq: {
    name: "Pertanyaan Aplikasi Manajemen Bimbel dan Kursus | MECA",
    description:
      "Jawaban tentang demo MECA, fitur aplikasi manajemen bimbel, kecocokan lembaga kursus, penyimpanan data, penyesuaian brand, dan cara melihat demo.",
    path: "/meca/faq",
  },
} as const;

export default function MecaStructuredData({ page, faqItems = [] }: MecaStructuredDataProps) {
  const details = pageDetails[page];
  const url = `${baseUrl}${details.path}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Mega Class Digital",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/meca/meca-logo-transparent-v1.webp`,
      },
      description: "Pengembang website, sistem digital, dan produk MECA untuk kebutuhan bisnis dan lembaga pendidikan.",
    },
    {
      "@type": "WebApplication",
      "@id": `${baseUrl}/meca#web-application`,
      name: "MECA",
      alternateName: "MECA Aplikasi Manajemen Bimbel",
      url: `${baseUrl}/meca`,
      description:
        "Demo aplikasi manajemen bimbel dan tempat kursus untuk mengatur jadwal, siswa, materi, tugas, pembayaran, progres belajar, dan laporan.",
      applicationCategory: ["BusinessApplication", "EducationalApplication"],
      operatingSystem: "Web browser",
      inLanguage: "id-ID",
      image: `${baseUrl}/images/meca/meca-3d-hero.webp`,
      provider: { "@id": `${baseUrl}/#organization` },
      featureList: [
        "Manajemen kelas dan jadwal",
        "Data siswa dan akses pengguna",
        "Materi, tugas, ujian, dan nilai",
        "Tagihan dan pencatatan pembayaran",
        "Progres belajar dan laporan pemilik",
        "Gamifikasi pembelajaran melalui Mecademy",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: details.name,
      description: details.description,
      inLanguage: "id-ID",
      isPartOf: { "@id": `${baseUrl}/meca#web-application` },
      about: { "@id": `${baseUrl}/meca#web-application` },
    },
  ];

  if (page === "faq" && faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faqpage`,
      url,
      inLanguage: "id-ID",
      mainEntity: faqItems.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
  }

  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}

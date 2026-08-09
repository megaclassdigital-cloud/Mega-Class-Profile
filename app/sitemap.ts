import type { MetadataRoute } from "next";

const siteUrl = "https://megaclassdigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/jasa-pembuatan-website`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/meca`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/meca/fitur`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/meca/mecademy`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/meca/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/harga`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/tentang`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/kontak`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}

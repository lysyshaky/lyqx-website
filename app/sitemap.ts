import type { MetadataRoute } from "next";

const BASE = "https://lyqx.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE}/contact/`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/project/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/project/gidy/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/project/love-nest/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/project/fetch-agent/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/project/gworing-gifts/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/project/t-platfom/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/project/eveevo/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/service/mobile-development/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/service/web-development/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/service/ux-ui-design/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/service/branding-identity/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/service/backend/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/service/ai-technologies/`, priority: 0.8, changeFrequency: "monthly" },
  ];
}

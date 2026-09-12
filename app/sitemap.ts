import type { MetadataRoute } from 'next';
import { insights, projects, services, site } from '@/lib/site';

// Keep sitemap modification dates stable. Do not use the build/deploy time here,
// otherwise every deployment incorrectly tells search engines every URL changed.
const SITE_CONTENT_UPDATED = new Date('2026-09-12T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/services`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/work`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/about`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/insights`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/privacy`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${site.url}/insights/${insight.slug}`,
    lastModified: new Date(`${insight.date}T00:00:00.000Z`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...insightPages];
}

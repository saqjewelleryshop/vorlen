import type {MetadataRoute} from 'next';
import { insights, projects, services, site } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{
  const now=new Date();
  const staticPages=[
    {url:site.url,changeFrequency:'weekly' as const,priority:1},
    {url:`${site.url}/services`,changeFrequency:'monthly' as const,priority:.9},
    {url:`${site.url}/work`,changeFrequency:'monthly' as const,priority:.8},
    {url:`${site.url}/about`,changeFrequency:'monthly' as const,priority:.7},
    {url:`${site.url}/insights`,changeFrequency:'weekly' as const,priority:.8},
    {url:`${site.url}/contact`,changeFrequency:'monthly' as const,priority:.7},
    {url:`${site.url}/privacy`,changeFrequency:'yearly' as const,priority:.2},
  ].map(x=>({...x,lastModified:now}));
  return [...staticPages,...services.map(x=>({url:`${site.url}/services/${x.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.8})),...projects.map(x=>({url:`${site.url}/work/${x.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.7})),...insights.map(x=>({url:`${site.url}/insights/${x.slug}`,lastModified:new Date(x.date),changeFrequency:'monthly' as const,priority:.7}))];
}

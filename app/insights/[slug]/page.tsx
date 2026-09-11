import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import { insights, site } from '@/lib/site';
type Props={params:Promise<{slug:string}>};
const content:Record<string,{heading:string;sections:{h:string;p:string[]}[]}>= {
  'seo-aeo-geo-one-foundation':{heading:'SEO, AEO and GEO work best when the underlying website is clear, crawlable and credible.',sections:[
    {h:'Start with retrieval, not acronyms',p:['A search engine or AI answer system has to discover a page, understand what it is about and judge whether it is useful enough to surface. That makes crawlability, internal linking, page purpose and information quality the shared foundation.','AEO and GEO should not become excuses to duplicate the same answer across dozens of thin pages. One strong page should satisfy one clear intent and make its main facts explicit.']},
    {h:'Write extractable answers',p:['Important questions should have direct answers in normal language. Define the subject, give the answer, add the nuance and then support it with examples or evidence. This helps users first and also makes the content easier for machines to parse.']},
    {h:'Make the entity unambiguous',p:['Use the same business name, service descriptions, location and contact details consistently. Connect service pages, about information and relevant structured data so the site tells one coherent story about who provides what.']},
    {h:'Evidence beats optimisation theatre',p:['Case studies, original examples, named expertise and substantiated outcomes are stronger than inflated claims. If a result cannot be verified, do not manufacture a percentage for the sake of a card on a homepage.']},
  ]},
  'website-redesign-brief':{heading:'A useful redesign brief describes the change the business needs — not just the pages it wants.',sections:[
    {h:'1. Define the commercial objective',p:['State what should be different after the redesign: better-qualified enquiries, clearer positioning, faster purchases, easier recruitment, lower support demand or another measurable business outcome.']},
    {h:'2. Describe the audience and their decision',p:['List the primary user groups, what they need to know, what may stop them trusting the business and the action you need them to take.']},
    {h:'3. Audit what already works',p:['A redesign should not automatically discard useful rankings, content, brand equity or workflows. Identify what should be retained as carefully as what needs replacing.']},
    {h:'4. Agree constraints early',p:['Platform, integrations, governance, accessibility requirements, content ownership, deadlines and budget all shape the right solution. Hiding them until development creates avoidable compromise.']},
  ]},
  'automation-first-workflow':{heading:'Automate work that is frequent, repeatable and easy to verify before reaching for the most impressive AI demo.',sections:[
    {h:'Volume',p:['Tasks that happen dozens or hundreds of times create more potential value than a process that occurs twice a year. Start by measuring frequency and time spent.']},
    {h:'Clarity',p:['The best early candidates have recognisable inputs, an understandable rule or decision and a clear output. If two experienced people disagree on the correct result, full automation is probably premature.']},
    {h:'Risk',p:['A wrong internal label can be easy to fix. A wrong payment, legal notice or customer promise can be expensive. Higher-risk steps should include stronger validation and human approval.']},
    {h:'Integration effort',p:['A five-minute task is not worth automating if the only available system requires months of brittle integration work. Rank opportunity against implementation cost and maintenance burden.']},
  ]}
};
export function generateStaticParams(){return insights.map(i=>({slug:i.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const x=insights.find(i=>i.slug===slug);if(!x)return {};return {title:x.title,description:x.description,alternates:{canonical:`/insights/${x.slug}`},openGraph:{type:'article',title:x.title,description:x.description,url:`${site.url}/insights/${x.slug}`,publishedTime:x.date}}}
export default async function Insight({params}:Props){const {slug}=await params;const x=insights.find(i=>i.slug===slug);const body=content[slug];if(!x||!body)notFound();return <main id="main-content" className="subpage"><JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:x.title,description:x.description,datePublished:x.date,dateModified:x.date,mainEntityOfPage:`${site.url}/insights/${x.slug}`,author:{'@type':'Organization',name:'Vorlen',url:site.url},publisher:{'@type':'Organization',name:'Vorlen',url:site.url}}}/><article className="article"><Link className="back-link" href="/insights"><ArrowLeft size={14}/> Insights</Link><header><span className="section-num">{x.readTime} / {new Date(x.date).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</span><h1>{x.title}</h1><p className="article-lead">{body.heading}</p></header><div className="article-body">{body.sections.map(s=><section key={s.h}><h2>{s.h}</h2>{s.p.map(p=><p key={p}>{p}</p>)}</section>)}</div></article></main>}

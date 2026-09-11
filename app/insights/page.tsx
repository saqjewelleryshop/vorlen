import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { insights } from '@/lib/site';
export const metadata:Metadata={title:'Insights',description:'Practical notes on digital strategy, web design, automation, SEO, AEO and GEO from Vorlen.',alternates:{canonical:'/insights'}};
export default function Insights(){return <main id="main-content" className="subpage"><section className="page-hero"><span className="section-num">Insights</span><h1>Useful<br/><i>thinking.</i></h1><p>Clear answers on digital strategy, experience, technology, search and automation — written to be useful rather than to fill a content calendar.</p></section><section className="insight-list">{insights.map((x,i)=><Link href={`/insights/${x.slug}`} className="insight-card" key={x.slug}><span>0{i+1}</span><div><p>{new Date(x.date).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})} / {x.readTime}</p><h2>{x.title}</h2><p>{x.description}</p></div><ArrowUpRight/></Link>)}</section></main>}

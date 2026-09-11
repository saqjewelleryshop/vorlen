import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/site';
export const metadata:Metadata={title:'Selected work',description:'Selected digital work from Vorlen across brand, commerce, web applications and automation.',alternates:{canonical:'/work'}};
export default function Work(){return <main id="main-content" className="subpage"><section className="page-hero"><span className="section-num">Selected work / 01—06</span><h1>Proof,<br/><i>not promises.</i></h1><p>Selected examples of how strategy, interface and technology can work together. We do not publish invented performance numbers or claims we cannot substantiate.</p></section><section className="work-listing">{projects.map((w,i)=><Link href={`/work/${w.slug}`} className={`work-list-item ${w.tone}`} key={w.slug}><div className="work-num">{w.number}</div><div><p>{w.type}</p><h2>{w.client}</h2><h3>{w.title}</h3></div><div className="work-orb" aria-hidden="true"/><ArrowUpRight/></Link>)}</section></main>}

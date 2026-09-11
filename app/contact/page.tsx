import type { Metadata } from 'next';
import ProjectBrief from '../components/ProjectBrief';
import { site } from '@/lib/site';
export const metadata:Metadata={title:'Start a project',description:'Tell Vorlen what you are trying to change. Enquire about websites, web applications, ecommerce, automation or search-led growth.',alternates:{canonical:'/contact'}};
export default function Contact(){return <main id="main-content" className="subpage"><section className="contact-page"><div className="contact-copy"><span className="section-num">New business</span><h1>Let's make<br/><i>something</i><br/>matter.</h1><p>Tell us the problem, opportunity or project. You do not need a polished brief.</p><a className="big-email" href={`mailto:${site.email}`}>{site.email}</a><div className="contact-facts"><span>Manchester, UK</span><span>Working worldwide</span><span>Response target: 1–2 working days</span></div></div><ProjectBrief/></section></main>}

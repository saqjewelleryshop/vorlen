import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import { projects, site } from '@/lib/site';

type Props={params:Promise<{slug:string}>};

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const p=projects.find(x=>x.slug===slug);
  if(!p)return {};
  return {title:`${p.client} — selected work`,description:p.summary,alternates:{canonical:`/work/${p.slug}`}};
}

const caseContent: Record<string, [string,string,string]> = {
  'ame-services': [
    'A service offer that needed a clearer digital hierarchy.',
    'Turn the proposition into a confident, low-friction path from first impression to enquiry.',
    'Brand expression, service architecture, responsive interface and conversion journey.'
  ],
  'ivy-and-pearls': [
    'A product-led brand where the digital shop needed to feel as considered as the product.',
    'Build desire without making the shopping journey slower or harder to understand.',
    'Editorial product presentation, collection structure, product-page system and mobile commerce UX.'
  ],
  'northstar': [
    'Operational work spread across disconnected touchpoints and repeated manual steps.',
    'Create one clear system around the people, states and actions that matter.',
    'Workflow mapping, role-based UX, operational dashboard patterns and automation-ready interaction design.'
  ],
  'ntm-associates': [
    'A Rochdale accountancy firm needed a stronger digital presence that made a broad service offer easy to understand and trust.',
    'Create a direct route from local search or service intent to the right answer, then make getting a quote feel simple and low-friction.',
    'Responsive website, service architecture, local SEO landing pages, FAQ content, tax and accounting guides, conversion journeys and technical search foundations.'
  ],
  'tenant-dashboard': [
    'Businesses needed a customer-service assistant that could be available around the clock without becoming another disconnected tool or generic chatbot.',
    'Turn a website into a useful 24/7 support channel: give customers grounded answers, capture enquiries, create human-ready tickets and let each business control how its assistant behaves.',
    'Multi-tenant SaaS architecture, branded AI assistants, grounded answers, lead capture, support-ticket workflows, conversation management, analytics, brand rules and integrations with existing business systems.'
  ],
  'badr-adventures': [
    'An outdoor adventure brand needed a digital experience that could communicate its distinctive faith-friendly proposition while making trips easy to discover.',
    'Combine strong editorial identity with a simple journey from inspiration to finding an appropriate guided hike, camping trip or adventure.',
    'Responsive website, adventure discovery, booking journeys, content architecture, search-focused landing pages, editorial guides and technical SEO foundations.'
  ],
};

const visualCopy:Record<string,string>={
  'ame-services':'MOVE\nWITH\nINTENT.',
  'ivy-and-pearls':'MADE\nTO BE\nKEPT.',
  'northstar':'WORK\nWITHOUT\nFRICTION.',
  'ntm-associates':'CLARITY\nBUILDS\nTRUST.',
  'tenant-dashboard':'SUPPORT\nWITHOUT\nCHAOS.',
  'badr-adventures':'FIND\nYOUR\nHORIZON.',
};

export default async function WorkDetail({params}:Props){
  const {slug}=await params;
  const p=projects.find(x=>x.slug===slug);
  if(!p)notFound();
  const context=caseContent[p.slug] ?? caseContent.northstar;
  const externalUrl='externalUrl' in p ? p.externalUrl : undefined;

  return <main id="main-content" className="subpage">
    <JsonLd data={{'@context':'https://schema.org','@type':'CreativeWork',name:`${p.client} — ${p.title}`,url:`${site.url}/work/${p.slug}`,creator:{'@type':'Organization',name:'Vorlen',url:site.url},description:p.summary,...(externalUrl?{sameAs:externalUrl}:{})}}/>
    <section className={`case-hero ${p.tone}`}>
      <Link className="back-link" href="/work"><ArrowLeft size={14}/> Selected work</Link>
      <span className="section-num">{p.number} / {p.type}</span>
      <h1>{p.client}</h1>
      <p>{p.title}</p>
      {externalUrl&&<a className="case-live-link" href={externalUrl} target="_blank" rel="noopener noreferrer">Visit live project <ExternalLink size={15}/></a>}
      <div className="case-orb" aria-hidden="true"/>
    </section>
    <section className="case-intro">
      <p className="lead">{p.summary}</p>
      <p className="case-note">This case study focuses on the work and user experience. We do not publish numerical performance claims unless they can be substantiated.</p>
    </section>
    <section className="case-grid">
      <article><span>01 / Context</span><h2>{context[0]}</h2></article>
      <article><span>02 / Direction</span><h2>{context[1]}</h2></article>
      <article><span>03 / Scope</span><h2>{context[2]}</h2></article>
    </section>
    <section className="case-visual"><div className="fake-browser large"><div className="browser-bar"><span/><span/><span/><b>{p.client}</b></div><div className="browser-content"><div className="browser-kicker">VORLEN / SELECTED WORK</div><div className="browser-title">{visualCopy[p.slug] ?? visualCopy.northstar}</div><div className="browser-circle"/></div></div></section>
    {externalUrl&&<section className="live-project-strip"><div><span className="section-num">Live project</span><h2>See the work in the real world.</h2></div><a className="button-dark" href={externalUrl} target="_blank" rel="noopener noreferrer">Open live project <ExternalLink size={17}/></a></section>}
    <section className="wide-cta"><p>Have a project with a similar problem?</p><h2>Make the next move clearer.</h2><Link className="button-dark" href="/contact">Start a project <ArrowUpRight size={17}/></Link></section>
  </main>
}

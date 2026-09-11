import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react';
import FAQ from './components/FAQ';
import JsonLd from './components/JsonLd';
import { projects, services, site } from '@/lib/site';

const faqs=[
  {q:'What does a project start with?',a:'A commercial conversation about the business, customer, problem and desired outcome. We define what success means before deciding what should be designed or built.'},
  {q:'Can Vorlen design and build the technology?',a:'Yes. Strategy, UX, interface and engineering are handled as one connected process across websites, web applications, ecommerce and automation.'},
  {q:'Do you work with existing brands and websites?',a:'Yes. We can improve an existing digital system or create a new one. The recommendation depends on what can be retained without carrying forward the same constraints.'},
  {q:'What are AEO and GEO?',a:'AEO makes content easier to answer from directly; GEO focuses on visibility and citation in generative search. Both rely on strong technical SEO, clear entities, useful content and credible evidence.'},
];
export default function Home(){
  const ld=[
    {'@context':'https://schema.org','@type':'Organization','@id':`${site.url}/#organization`,name:site.name,url:site.url,email:site.email,description:site.description,address:{'@type':'PostalAddress',addressLocality:'Manchester',addressCountry:'GB'}},
    {'@context':'https://schema.org','@type':'WebSite','@id':`${site.url}/#website`,url:site.url,name:site.name,publisher:{'@id':`${site.url}/#organization`},inLanguage:'en-GB'},
    {'@context':'https://schema.org','@type':'ProfessionalService','@id':`${site.url}/#service`,name:site.name,url:site.url,email:site.email,areaServed:['United Kingdom','Worldwide'],description:site.description,provider:{'@id':`${site.url}/#organization`}},
  ];
  return <main id="main-content" className="site"><JsonLd data={ld}/>
    <section className="hero"><div className="hero-left"><p className="eyebrow">Independent digital studio / Manchester + worldwide</p><h1>Make your<br/><i>business</i><br/>impossible<br/>to ignore<span>.</span></h1><p className="hero-copy">We design and engineer high-performance websites, web applications, ecommerce experiences and AI automation for ambitious businesses.</p><div className="hero-actions"><Link className="text-link light" href="/work">Explore work <ArrowDown size={17}/></Link><Link className="button-lime" href="/contact">Start a project <ArrowUpRight size={17}/></Link></div></div><div className="hero-right" aria-hidden="true"><div className="hero-index">01 — 06</div><div className="poster"><div className="poster-top">VORLEN / 26</div><div className="poster-word">NO<br/>NOISE.</div><div className="poster-line"/><div className="poster-bottom">STRATEGY<br/>DESIGN<br/>ENGINEERING</div></div><div className="vertical">DIGITAL / DESIGN / TECHNOLOGY</div></div></section>

    <section className="statement"><div className="statement-number section-num">02</div><div><p>Most agencies make websites.<br/><strong>We build the thing your website is supposed to do.</strong></p><div className="statement-answers"><span>Explain the offer.</span><span>Earn trust.</span><span>Remove friction.</span><span>Create action.</span></div></div><div className="statement-side">Strategy / Experience / Technology / Growth</div></section>

    <section className="work" aria-labelledby="work-title"><div className="section-head"><div><span className="section-num">03 / Selected work</span><h2 id="work-title">Proof,<br/><i>not promises.</i></h2></div><p>Selected digital work.<br/>No invented performance claims.</p></div>
      <div className="live-work-grid" aria-label="Live client projects">
        {projects.filter((w)=>'externalUrl' in w && w.externalUrl).map((w)=><article className={`live-work-card ${w.tone}`} key={`live-${w.slug}`}>
          <div className="live-work-card-top"><span>{w.number}</span><span>LIVE PROJECT</span></div>
          <p>{w.type}</p>
          <h3>{w.client}</h3>
          <p className="live-work-copy">{w.summary}</p>
          <div className="live-work-actions"><Link href={`/work/${w.slug}`}>View case study <ArrowUpRight size={15}/></Link><a href={w.externalUrl} target="_blank" rel="noopener noreferrer">Visit live site <ExternalLink size={15}/></a></div>
        </article>)}
      </div>
      {projects.map((w,i)=><article className={'project '+w.tone} key={w.slug}><div className="project-meta"><span>{w.number}</span><span>{w.client}</span><span>{w.type}</span></div><Link href={`/work/${w.slug}`} className="project-visual" aria-label={`View ${w.client} case study`}><div className="fake-browser"><div className="browser-bar"><span/><span/><span/><b>{w.client}</b></div><div className="browser-content"><div className="browser-kicker">{w.number} / SELECTED WORK</div><div className="browser-title">{i===0?'MOVE\nWITH\nINTENT.':i===1?'MADE\nTO BE\nKEPT.':w.slug==='ntm-associates'?'CLARITY\nBUILDS\nTRUST.':w.slug==='tenant-dashboard'?'SUPPORT\nWITHOUT\nCHAOS.':'WORK\nWITHOUT\nFRICTION.'}</div><div className="browser-circle"/></div></div></Link><div className="project-info"><div><p>{w.type}</p><h3><Link href={`/work/${w.slug}`}>{w.title}</Link></h3>{'externalUrl' in w && w.externalUrl&&<a className="inline-live-link" href={w.externalUrl} target="_blank" rel="noopener noreferrer">Visit live site <ExternalLink size={13}/></a>}</div><p className="project-summary">{w.summary}</p><ArrowUpRight className="project-arrow"/></div></article>)}</section>

    <section className="capabilities" aria-labelledby="services-title"><div className="cap-title"><span className="section-num">04 / Capabilities</span><h2 id="services-title">Everything<br/>connected.</h2><p>One senior digital partner across the parts that need to work together.</p><Link className="text-link light" href="/services">View all services <ArrowUpRight size={16}/></Link></div><div className="cap-list">{services.map(s=><Link className="cap-row" href={`/services/${s.slug}`} key={s.slug}><span>{s.number}</span><div><h3>{s.name}</h3><p>{s.short}</p></div><ArrowUpRight size={20}/></Link>)}</div></section>

    <section className="about"><div className="section-num">05 / Approach</div><div className="about-big">Less agency.<br/><i>More partner.</i></div><div className="about-copy"><p>We keep the team close to the work. Strategy, design and engineering share the same commercial objective from the start.</p><p>That means fewer hand-offs, clearer decisions and a digital product that survives contact with the real world.</p><Link href="/about">How we work <ArrowUpRight size={16}/></Link></div></section>

    <section className="manifesto"><div className="manifesto-mark" aria-hidden="true">V</div><p>Make it clear.<br/>Make it useful.<br/><i>Make it matter.</i></p></section>

    <section className="answer-section"><div><span className="section-num">06 / Search + AI discovery</span><h2>Built to be<br/><i>understood.</i></h2></div><div className="answer-copy"><p className="lead">Search engines and AI systems cannot recommend a business they cannot clearly understand.</p><p>We build explicit page structure, crawlable internal links, useful answers, semantic HTML, structured data and consistent entity information into the site itself. SEO, AEO and GEO are treated as one connected information problem — not three layers of keyword decoration.</p><Link className="text-link" href="/services/search-growth">How we approach search <ArrowUpRight size={16}/></Link></div></section>

    <section className="faq" aria-labelledby="faq-title"><div className="section-num">07 / FAQ</div><h2 id="faq-title">Questions.</h2><FAQ items={faqs}/></section>

    <section className="contact-cta"><span className="section-num">08 / Start</span><div><p className="eyebrow">Have a serious project?</p><h2>Let's make<br/><i>something</i><br/>matter.</h2></div><Link className="round-link" href="/contact" aria-label="Start a project"><ArrowUpRight/></Link></section>
  </main>
}

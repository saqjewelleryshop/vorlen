import Link from 'next/link';
import { site } from '@/lib/site';
export default function Footer(){return <footer className="footer"><div><Link className="wordmark" href="/">VORLEN<span>®</span></Link><p>Independent digital studio.<br/>{site.location} / working worldwide.</p></div><nav aria-label="Footer"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">Studio</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></nav><div className="footer-meta"><a href={`mailto:${site.email}`}>{site.email}</a><span>© 2026 VORLEN®</span></div></footer>
<script async src="https://widget-omega-nine.vercel.app/widget.js" data-chatbot="cb_f81436b6"/></>}

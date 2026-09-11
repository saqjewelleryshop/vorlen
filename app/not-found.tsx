import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound(){return <main id="main-content" className="not-found"><span className="section-num">404 / Wrong turn</span><h1>Nothing<br/><i>here.</i></h1><p>The page may have moved, or the link may be wrong.</p><Link className="button-lime" href="/">Back to Vorlen <ArrowUpRight size={17}/></Link></main>}

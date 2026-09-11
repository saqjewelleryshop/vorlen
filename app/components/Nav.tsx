'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menu]);

  return <header className={scrolled ? 'nav scrolled' : 'nav'}>
    <Link className="wordmark" href="/" aria-label="Vorlen home">VORLEN<span>®</span></Link>
    <nav className="nav-mid" aria-label="Primary navigation">
      <Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">Studio</Link><Link href="/insights">Insights</Link>
    </nav>
    <Link className="nav-cta" href="/contact">Start a project <ArrowUpRight size={16}/></Link>
    <button className="menu-btn" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'}>{menu ? <X/> : <Menu/>}</button>
    {menu && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
      <Link href="/work" onClick={() => setMenu(false)}>Work</Link><Link href="/services" onClick={() => setMenu(false)}>Services</Link><Link href="/about" onClick={() => setMenu(false)}>Studio</Link><Link href="/insights" onClick={() => setMenu(false)}>Insights</Link><Link href="/contact" onClick={() => setMenu(false)}>Start a project ↗</Link>
    </nav>}
  </header>;
}

import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { site } from '@/lib/site';

export const viewport: Viewport = { width:'device-width', initialScale:1, themeColor:'#11110f', colorScheme:'light dark' };
export const metadata: Metadata = {
  metadataBase:new URL(site.url),
  title:{default:'Vorlen — Digital studio for websites, web apps & AI automation',template:'%s | Vorlen'},
  description:site.description,
  applicationName:'Vorlen',
  authors:[{name:'Vorlen',url:site.url}],
  creator:'Vorlen',publisher:'Vorlen',
  alternates:{canonical:'/'},
  openGraph:{title:'Vorlen — Digital products that move businesses forward',description:site.description,type:'website',locale:'en_GB',url:site.url,siteName:'Vorlen'},
  twitter:{card:'summary_large_image',title:'Vorlen — Digital products that move businesses forward',description:site.description},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
  category:'technology',
  verification:{google:'gRlHgzyRK8AtKv_uqVwIrcNGbp2vSMqk0uShIerQXu0'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><a className="skip-link" href="#main-content">Skip to content</a><Nav/>{children}<Footer/></body></html>}

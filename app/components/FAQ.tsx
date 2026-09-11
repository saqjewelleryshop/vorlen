'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
export default function FAQ({items}:{items:{q:string;a:string}[]}) {
  const [open,setOpen]=useState<number|null>(0);
  return <div className="faq-list">{items.map((item,i)=><div className="faq-item" key={item.q}>
    <h3><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>{item.q}</span><Plus className={open===i?'rot':''} aria-hidden="true"/></button></h3>
    <div className={open===i?'faq-answer open':'faq-answer'}><p>{item.a}</p></div>
  </div>)}</div>
}

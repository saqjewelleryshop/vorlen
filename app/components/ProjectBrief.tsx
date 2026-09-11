'use client';
import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
export default function ProjectBrief(){
  const [status,setStatus]=useState('');
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const name=String(form.get('name')||'');
    const company=String(form.get('company')||'');
    const email=String(form.get('email')||'');
    const project=String(form.get('project')||'');
    const budget=String(form.get('budget')||'');
    const body=`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nBudget: ${budget}\n\nProject:\n${project}`;
    window.location.href=`mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry — ${company||name}`)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open with the project brief pre-filled.');
  }
  return <form className="brief-form" onSubmit={submit}>
    <div className="form-grid"><label>Name<input name="name" autoComplete="name" required/></label><label>Work email<input name="email" type="email" autoComplete="email" required/></label></div>
    <div className="form-grid"><label>Company<input name="company" autoComplete="organization"/></label><label>Indicative budget<select name="budget" defaultValue=""><option value="" disabled>Select range</option><option>Under £5k</option><option>£5k–£10k</option><option>£10k–£25k</option><option>£25k–£50k</option><option>£50k+</option><option>Not sure yet</option></select></label></div>
    <label>What are you trying to achieve?<textarea name="project" rows={6} required placeholder="The problem, opportunity, deadline and anything useful to know."/></label>
    <button className="button-dark" type="submit">Prepare email <ArrowUpRight size={17}/></button>
    <p className="form-note">No form data is stored on this site. Submitting opens your email app with this brief addressed to us.</p>
    <p className="sr-only" aria-live="polite">{status}</p>
  </form>
}

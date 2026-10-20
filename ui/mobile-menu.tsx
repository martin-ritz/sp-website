'use client'

import { navItems } from "@/lib/nav-items"
import NavLink from '@/ui/nav-link'
import { useState, useEffect } from 'react'

export default function MobileMenu() {
  const [ open, setOpen ] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }

      if (open) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [open])

  return (
    <nav className="font-mono md:hidden">
      <button onClick={handleClick} className={`font-bold relative z-20 ${open ? 'text-4xl' : 'text-5xl'} w-12 h-12 flex items-center justify-center`} aria-label="Open and close menu" aria-expanded={open}>{open ? 'x' : '='}</button>
      {open && <ul className="flex flex-col items-center pt-32 gap-6 fixed inset-0 bg-background px-4 z-10 text-2xl">
        {navItems.map((item) => (
          <li key={item.id}>
             <NavLink href={item.href} onClick={() => setOpen(false)}>{item.name}</NavLink>
          </li>
        ))}
      </ul>}
    </nav>
  )
}
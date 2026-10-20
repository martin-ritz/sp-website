'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

type NavLinkProps = {
  href: string,
  children: React.ReactNode,
  onClick?: () => void
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

 return (
  <Link href={href} onClick={onClick} aria-current={isActive ? 'page' : undefined} className={clsx(
    'block px-4 py-2 rounded-full',
    isActive && 'bg-zinc-200',
    !isActive && 'hover:bg-zinc-100'
    )}>
    {children}
  </Link>
 )
}
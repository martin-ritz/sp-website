import NavLink from '@/ui/nav-link'
import { navItems } from '@/lib/nav-items'

export default function Navbar() {
  return (
    <nav className="font-mono hidden md:block">
      <ul className="flex gap-6 justify-end">
        {navItems.map((item) => (
          <li key={item.id}>
             <NavLink href={item.href}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
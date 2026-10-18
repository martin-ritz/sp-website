import Link from 'next/link'

const navItems = [
  { id: 1, name: 'about.txt', href: '/about'},
  { id: 2, name: 'essays.md', href: '/essays'},
  { id: 3, name: "contact.exe", href: '/contact'}
];

export default function Navbar() {
  return (
    <nav className="font-mono">
      <ul>
        {navItems.map((item) => (
          <li key={item.id}><Link href={item.href}>{item.name}</Link></li>
        ))}
      </ul>
    </nav>
  )
}
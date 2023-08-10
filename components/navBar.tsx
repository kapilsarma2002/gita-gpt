'use client'
import Link from "next/link"

const links = [
  { href: '/home', label: 'Home' },
  { href: '/gita', label: 'Gita' },
  { href: '/about', label: 'About'}
]

const NavBar = () => {

  return <div className="border border-black/10 flex flex-row gap-16 text-xl px-3 py-2 rounded-3xl dark:border-white/40">
    {links.map(link => (
      <Link href={link.href} key={link.label}>{link.label}</Link>
    ))}
  </div>
}

export default NavBar

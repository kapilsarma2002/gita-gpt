'use client'
import Link from "next/link"

const links = [
  { href: '/home', label: 'Home' },
  { href: '/gita', label: 'Gita' },
  { href: '/bookmarks', label: 'Bookmarks' },
  { href: '/about', label: 'About' },
]

const NavBar = () => {

  return (
    <div className="flex flex-row gap-16 text-xl px-3 py-2 text-black/80 dark:text-white/80">
      {links.map((link) => (
        <Link href={link.href} key={link.label}>
          <div className="hover:text-black/100 dark:hover:text-white/100 transition duration-150 ease-out hover:ease-in">
            {link.label}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NavBar

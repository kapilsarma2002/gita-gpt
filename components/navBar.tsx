'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import ThemeSwitcher from '@/components/themeSwitcher'

const links = [
  { href: '/home', label: 'Home' },
  { href: '/gita', label: 'Gita' },
  { href: '/bookmarks', label: 'Bookmarks' },
  { href: '/profile', label: 'Profile'},
  { href: '/about', label: 'About' },
]

const NavBar = ({user}) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  console.log(user)

  const userProfile = links[3]
  userProfile.href = `/profile/${user.userName}`


  return (
    <div className="relative flex justify-between">
      <div className="lg:flex items-center gap-4 px-6">
        <div className="pl-6 lg:pl-8">Logo</div>
      </div>
      <div className="lg:hidden px-3 py-2">
        <button
          onClick={toggleDropdown}
          className="text-xl text-black/80 dark:text-white/80"
        >☰ Menu
        </button>
      </div>
      <div className="hidden lg:flex lg:flex-row gap-2 lg:gap-4 lg:text-xl px-3 pb-2 text-base lg:text-black/70 dark:text-white/80">
        {links.map((link) => (
          <Link href={link.href} key={link.label}>
            <div className="hover:text-black/100 dark:hover:text-white/100 transition duration-150 ease-out hover:ease-in">
              {link.label}
            </div>
          </Link>
        ))}
      </div>
      <div className="lg:flex items-center gap-4 px-6 pb-4">
        <div className="text-lg lg:text-xl">
          <ThemeSwitcher />
        </div>
        {typeof window !== 'undefined' && window.innerWidth >= 768 ? (
          <UserButton />
        ) : null}
      </div>
      {showDropdown && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border border-black/5 z-10">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              <div className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavBar

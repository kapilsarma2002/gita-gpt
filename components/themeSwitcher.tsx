'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import {useState, useEffect} from 'react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="h-[30px] w-[30px] cursor-pointer">
      {theme === 'light' && (
        <div onClick={() => setTheme('dark')}>
          <Image src="/moon.png" height={30} width={30} alt="sun" />
        </div>
      )}
      {theme === 'dark' && (
        <div onClick={() => setTheme('light')}>
          <Image src="/sun_icon.png" height={30} width={30} alt="moon" />
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher

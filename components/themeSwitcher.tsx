'use client'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  //Icons
  const moonIcon = document.querySelector('.moon')
  const sunIcon = document.querySelector('.sun')
  //console.log('icons: ', sunIcon, moonIcon)

  // Theme variants
  const userTheme = localStorage.getItem('theme')
  const systemTheme = window.matchMedia('(prefers-color:scheme: dark)').matches

  // Icon toggling
  const iconToggle = () => {
    moonIcon.classList.toggle('display-none')
    sunIcon.classList.toggle('display-none')
  }

  // Initial theme check
  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark')
      moonIcon.classList.add('display-none')
    }
    sunIcon.classList.add('display-none')
  }

  // Manual theme check
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      iconToggle()
      return
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    iconToggle()
  }

  // calling theme switch on clicking buttons
  sunIcon.addEventListener('click', () => {
    themeSwitch()
  })
  moonIcon.addEventListener('click', () => {
    themeSwitch()
  })

  // theme check on initial load
  themeCheck()
}

const ThemeSwitcher = () => {

  return (
    <div className='h-full w-full'>
      <div className="moon cursor-pointer">
        <Image src="/moon.png" height={30} width={30} alt="moon" />
      </div>
      <div className="sun cursor-pointer">
        <Image src="/sun.png" height={30} width={30} alt="sun" />
      </div>
    </div>
  )
}

export default ThemeSwitcher


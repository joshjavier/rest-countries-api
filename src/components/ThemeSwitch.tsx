import { useEffect, useRef, useState } from 'react'
import MoonIcon from '../icons/moon.svg'

export function ThemeSwitch() {
  const [isActive, setActive] = useState<boolean>(false)
  const html = useRef<HTMLElement>(document.documentElement)

  useEffect(() => {
    // Set the initial active state based on the `data-theme` attribute
    setActive(html.current.dataset.theme === 'dark')
  }, [])

  const toggle = () => {
    setActive((a) => {
      html.current.dataset.theme = a ? 'light' : 'dark'
      localStorage.setItem('theme-preference', a ? 'light' : 'dark')
      reflectThemeChange()
      return !a
    })
  }

  return (
    <button className="theme-switch" aria-pressed={isActive} onClick={toggle}>
      <MoonIcon className="icon icon-moon" aria-hidden="true" />
      Dark Mode
    </button>
  )
}

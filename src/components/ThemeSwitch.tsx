import { useEffect, useRef, useState } from 'react'
import MoonIcon from '../icons/moon.svg'

export function ThemeSwitch() {
  const [isActive, setActive] = useState<boolean>(false)
  const html = useRef<HTMLElement>(document.documentElement)

  useEffect(() => {
    // Set the initial active state based on the `data-theme` attribute
    setActive(html.current.dataset.theme === 'dark')

    // Listen to changes in `prefers-color-scheme` and adapt accordingly
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches: isDark }) => {
        setActive(setThemePreference(isDark))
      })
  }, [])

  const toggle = () => {
    setActive(a => setThemePreference(!a))
  }

  const setThemePreference = (isDark: boolean): boolean => {
    html.current.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme-preference', isDark ? 'dark' : 'light')

    return isDark
  }

  return (
    <button className="theme-switch" aria-pressed={isActive} onClick={toggle}>
      <MoonIcon className="icon icon-moon" aria-hidden="true" />
      Dark Mode
    </button>
  )
}

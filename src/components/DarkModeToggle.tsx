import { useEffect, useState } from 'react'
import { ReactComponent as MoonIcon } from '../assets/moon-outline.svg'

const DarkModeToggle = () => {
  const [active, setActive] = useState<boolean>(null!)

  const toggle = () => {
    setActive((active) => {
      if (active) {
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove('dark')
      } else {
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add('dark')
      }
      return !active
    })
  }

  useEffect(() => {
    setActive(document.documentElement.classList.contains('dark'))
  }, [])

  return (
    <button
      aria-pressed={active}
      onClick={toggle}
      className="button no-padding"
    >
      <MoonIcon
        className="icon icon-stroke"
        aria-hidden="true"
        style={{ fill: active ? 'currentColor' : 'none' }}
      />
      <span className="sr-only sm:not-sr-only">Dark Mode</span>
    </button>
  )
}

export default DarkModeToggle

import { useState } from 'react'
import MoonIcon from '../icons/moon.svg'

export function ThemeSwitch() {
  const [isActive, setActive] = useState<boolean>(false)

  const toggle = () => {
    setActive(a => !a)
  }

  return (
    <button className='theme-switch' aria-pressed={isActive} onClick={toggle}>
      <MoonIcon className='icon icon-moon' />
      Dark Mode
    </button>
  )
}

import { ThemeSwitch } from "./ThemeSwitch";

export function Header() {
  return (
    <header>
      <div className="wrapper center">
          <div className="logo">
            <a href="/">Where in the world?</a>
          </div>

          <ThemeSwitch />
      </div>
    </header>
  )
}

import { NavLink, useLocation } from 'react-router-dom'

interface Props {
  title: string
}

const Header = (props: Props) => {
  const location = useLocation()

  return (
    <header className="[ site-header ] [ bg-white shadow ]">
      <div className="[ wrapper py-6 ]">
        <h1>
          <NavLink to={location.pathname === '/' ? '#main' : '/'}>
            {props.title}
          </NavLink>
        </h1>
        {/* Dark mode toggle */}
      </div>
    </header>
  )
}

export default Header

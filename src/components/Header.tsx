import { Link } from 'react-router-dom'

interface Props {
  title: string
}

const Header = (props: Props) => {
  return (
    <header className="site-header">
      <div className="[ wrapper py-6 ]">
        <h1>
          <Link to="/">{props.title}</Link>
        </h1>
        {/* Dark mode toggle */}
      </div>
    </header>
  )
}

export default Header

interface Props {
  title: string
}

const Header = (props: Props) => {
  return (
    <header className="[ site-header ] [ bg-white shadow mb-12 ]">
      <div className="[ wrapper py-6 ]">
        <h1>{props.title}</h1>
        {/* Dark mode toggle */}
      </div>
    </header>
  )
}

export default Header

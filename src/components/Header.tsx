interface Props {
  title: string
}

const Header = (props: Props) => {
  return (
    <header>
      <div className="wrapper">
        <h1>{props.title}</h1>
        {/* Dark mode toggle */}
      </div>
    </header>
  )
}

export default Header

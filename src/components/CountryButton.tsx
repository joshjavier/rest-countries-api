import { Link } from 'react-router-dom'
import { Country } from '../data/entities'

interface Props {
  country: Country
  callback?: (code: string) => void
}

const CountryButton = (props: Props) => {
  const handleClick = () => {
    props.callback!(props.country.alpha3Code)
  }

  return props.callback ? (
    <button className="[ button ] [ py-1 px-7 ]" onClick={handleClick}>
      {props.country.name}
    </button>
  ) : (
    <Link
      to={`../country/${props.country.alpha3Code}`}
      className="[ button ] [ py-1 px-7 ]"
    >
      {props.country.name}
    </Link>
  )
}

export default CountryButton

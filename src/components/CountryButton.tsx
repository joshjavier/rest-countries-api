import { Link } from 'react-router-dom'
import { Country } from '../data/entities'

interface Props {
  country: Country
}

const CountryButton = (props: Props) => {
  return (
    <Link
      to={`../country/${props.country.alpha3Code}`}
      className="[ button ] [ py-1 px-7 ]"
    >
      {props.country.name}
    </Link>
  )
}

export default CountryButton

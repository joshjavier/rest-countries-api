import { Country } from '../data/entities'

interface Props {
  country: Country
  callback: (code: string) => void
}

const CountryButton = (props: Props) => {
  const handleClick = () => {
    props.callback(props.country.alpha3Code)
  }

  return (
    <button className="[ button ] [ py-1 px-7 ]" onClick={handleClick}>
      {props.country.name}
    </button>
  )
}

export default CountryButton

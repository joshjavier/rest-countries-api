import { Link } from "react-router-dom"
import { CountrySimple } from "../data/entities"

interface Props {
  country: CountrySimple
}

export function Card({ country }: Props) {
  const prettify = (number: number): string =>
    new Intl.NumberFormat('en-US').format(number)

  return (
    <article className="card">
      <div className="flag">
        <img loading="lazy" src={country.flag} alt="" />
      </div>
      <div className="text">
        <h3 className="title">
          <Link to={country.code.toLowerCase()}>{country.name}</Link>
        </h3>
        <div className="info">
          <p><strong>Population:</strong> {prettify(country.population)}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
        </div>
      </div>
    </article>
  )
}

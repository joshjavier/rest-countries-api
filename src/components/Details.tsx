import { Country } from '../data/entities'

interface Props {
  country: Country
  countries: Country[]
}

const Details = (props: Props) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props.country

  const tld = topLevelDomain ? topLevelDomain.join(', ') : 'None'
  const curr = currencies ? currencies.map((c) => c.name).join(', ') : 'None'
  const lang = languages ? languages.map((l) => l.name).join(', ') : 'None'
  let borderCountries: Country[]
  if (borders) {
    borderCountries = borders.map(
      (border) => props.countries.find((c) => c.alpha3Code === border)!,
    )
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>
        <span>Native Name:</span> {nativeName}
      </p>
      <p>
        <span>Population:</span> {population.toLocaleString('en-US')}
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
      <p>
        <span>Sub Region:</span> {subregion}
      </p>
      <p>
        <span>Capital:</span> {capital || 'None'}
      </p>
      <p>
        <span>Top Level Domain:</span> {tld}
      </p>
      <p>
        <span>Currencies:</span> {curr}
      </p>
      <p>
        <span>Languages:</span> {lang}
      </p>

      {borders && (
        <div>
          <p>
            <span>Border Countries:</span>
          </p>
          <ul>
            {borderCountries!.map((bc) => (
              <li key={bc.alpha3Code}>{bc.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Details

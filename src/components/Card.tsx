interface Props {
  country: {
    name: string
    population: number
    region: string
    capital: string
    flag: string
  }
}

export function Card({ country }: Props) {
  const prettify = (number: number): string =>
    new Intl.NumberFormat('en-US').format(number)

  return (
    <article className="card">
      <div className="flag">
        <img src={country.flag} alt="" />
      </div>
      <div className="text">
        <h3 className="title">{country.name}</h3>
        <div className="info">
          <p><strong>Population:</strong> {prettify(country.population)}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
        </div>
      </div>
    </article>
  )
}

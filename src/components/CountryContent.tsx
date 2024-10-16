import { CountryDetail } from "../data/entities"

interface Props {
  country: CountryDetail
}

export function CountryContent({ country }: Props) {
  return (
    <article className="content">
      <div className="flag">
        <img src={country.flag.png} alt={country.flag.alt} />
      </div>

      <div className="text">
        <h1 className="name">{country.name}</h1>

        <div className="quick-facts">
          <h2 className="visually-hidden">Quick Facts</h2>
          <div className="left">
            <Line label="Native Name" value={country.nativeName} />
            <Line label="Population" value={country.population} />
            <Line label="Region" value={country.region} />
            <Line label="Sub Region" value={country.subregion} />
            <Line label="Capital" value={country.capital} />
          </div>

          <div className="right">
            <Line label="Top Level Domain" value={country.tld} />
            <Line label="Currency" value={country.currencies} />
            <Line label="Languages" value={country.languages} />
          </div>
        </div>

        {country.borders.length > 0 && (
          <div className="border-countries cluster">
            <h2>Border Countries:</h2>
            <ul role="list" className="cluster">
              {country.borders.map(b =>
                <CountryLink key={b} label={b} />
              )}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

interface LineProps {
  label: string
  value: string | number | string[]
}

function Line({ label, value }: LineProps) {
  if (typeof value === 'number') {
    value = new Intl.NumberFormat('en-US').format(value)
  } else if (Array.isArray(value)) {
    value = value.join(', ')
  }

  return (
    <p><strong>{label}:</strong> {value || 'Not Available'}</p>
  )
}

interface CountryLinkProps {
  label: string
  url?: string
}

function CountryLink({ label, url }: CountryLinkProps) {
  return (
    <li><a className="btn btn-sm" href={url ?? '#'}>{label}</a></li>
  )
}

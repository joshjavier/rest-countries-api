import { Country } from '../data/entities'
import CountryButton from './CountryButton'
import InfoLine from './InfoLine'

interface Props {
  country: Country
  level: 'summary' | 'detail'
  countries: Country[]
  navToCountry: (code: string) => void
}

const CountryInfo = (props: Props) => {
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

  const pop = population.toLocaleString('en-US')
  const tld = topLevelDomain.join(', ')
  const curr = currencies?.map((c) => c.name).join(', ')
  const lang = languages.map((l) => l.name).join(', ')

  return (
    <div className="country-info">
      {props.level === 'detail' ? (
        <>
          <h2>{name}</h2>
          <InfoLine title="Native Name" text={nativeName} />
          <InfoLine title="Population" text={pop} />
          <InfoLine title="Region" text={region} />
          <InfoLine title="Sub Region" text={subregion} />
          <InfoLine title="Capital" text={capital} />
          <InfoLine title="Top Level Domain" text={tld} />
          <InfoLine title="Currencies" text={curr} />
          <InfoLine title="Languages" text={lang} />
          {borders && (
            <InfoLine title="Border Countries">
              <ul className="cluster">
                {borders
                  .map((b) => props.countries.find((c) => c.alpha3Code === b)!)
                  .map((c) => (
                    <li key={c.alpha3Code}>
                      <CountryButton
                        country={c}
                        callback={props.navToCountry}
                      />
                    </li>
                  ))}
              </ul>
            </InfoLine>
          )}
        </>
      ) : (
        <>
          <h3>{name}</h3>
          <InfoLine title="Population" text={pop} />
          <InfoLine title="Region" text={region} />
          <InfoLine title="Capital" text={capital} />
        </>
      )}
    </div>
  )
}

export default CountryInfo

import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { getCountry } from '../countries'
import { Country } from '../data/entities'
import CountryButton from './CountryButton'
import InfoLine from './InfoLine'

interface Props {
  country: Country
  level: 'summary' | 'detail'
  navToCountry?: (code: string) => void
}

export type Ref = HTMLAnchorElement

const CountryInfo = forwardRef<Ref, Props>((props, ref) => {
  const {
    name,
    alpha3Code,
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

  return props.level === 'detail' ? (
    <>
      <h2>{name}</h2>

      <div className="flex flex-wrap gap-8 justify-between">
        <div className="[ infolines ] [ flow ]">
          <InfoLine title="Native Name" text={nativeName} />
          <InfoLine title="Population" text={pop} />
          <InfoLine title="Region" text={region} />
          <InfoLine title="Sub Region" text={subregion} />
          <InfoLine title="Capital" text={capital} />
        </div>
        <div className="[ infolines ] [ flow ]">
          <InfoLine title="Top Level Domain" text={tld} />
          <InfoLine title="Currencies" text={curr} />
          <InfoLine title="Languages" text={lang} />
        </div>
      </div>

      {borders && (
        <InfoLine title="Border Countries">
          <ul className="cluster">
            {borders
              .map((b) => getCountry(b))
              .map((c) => (
                <li key={c.alpha3Code}>
                  <CountryButton country={c} callback={props.navToCountry} />
                </li>
              ))}
          </ul>
        </InfoLine>
      )}
    </>
  ) : (
    <>
      <h3>
        <Link to={`country/${alpha3Code}`} ref={ref}>
          {name}
        </Link>
      </h3>
      <div className="[ infolines ] [ flow ]">
        <InfoLine title="Population" text={pop} />
        <InfoLine title="Region" text={region} />
        <InfoLine title="Capital" text={capital} />
      </div>
    </>
  )
})

export default CountryInfo

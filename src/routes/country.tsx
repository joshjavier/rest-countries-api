import { Link, useLoaderData } from 'react-router-dom'
import { getCountry, getCountries } from '../countries'

import Flag from '../components/Flag'
import CountryInfo from '../components/CountryInfo'
import { ReactComponent as BackIcon } from '../assets/arrow-back-outline.svg'

export const loader = ({ params }) => {
  const countries = getCountries()
  const country = getCountry(params.countryCode)
  return { country, countries }
}

const Country = () => {
  const { country, countries } = useLoaderData()

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="[ button ] [ px-8 ]">
          <BackIcon className="icon icon-stroke" />
          Back
        </Link>
      </nav>
      <div className="country">
        <div className="flag">
          <Flag png={country.flags.png} />
        </div>
        <div className="[ content ] [ flow ]">
          <CountryInfo country={country} level="detail" countries={countries} />
        </div>
      </div>
    </>
  )
}

export default Country

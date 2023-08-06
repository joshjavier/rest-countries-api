import { Link, useLoaderData, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const { country, countries } = useLoaderData()

  return (
    <>
      <nav className="navigation">
        <button className="[ button ] [ px-8 ]" onClick={() => navigate(-1)}>
          <BackIcon className="icon icon-stroke" />
          Back
        </button>
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

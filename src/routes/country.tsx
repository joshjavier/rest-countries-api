import { useLoaderData, useNavigate } from 'react-router-dom'
import { getCountry } from '../countries'

import Flag from '../components/Flag'
import CountryInfo from '../components/CountryInfo'
import { ReactComponent as BackIcon } from '../assets/arrow-back-outline.svg'
import type { Country } from '../data/entities'

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ params }) => {
  const country = getCountry(params.countryCode)
  return { country }
}

const Country = () => {
  const navigate = useNavigate()
  const { country } = useLoaderData() as { country: Country }

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
          <CountryInfo country={country} level="detail" />
        </div>
      </div>
    </>
  )
}

export default Country

import { Country } from '../data/entities'
import Flag from './Flag'
import CountryInfo from './CountryInfo'

interface Props {
  country: Country
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="[ flag ] [ frame ]">
        <Flag png={props.country.flags.png} />
      </div>
      <div className="text">
        <CountryInfo country={props.country} level="summary" />
      </div>
    </div>
  )
}

export default Card

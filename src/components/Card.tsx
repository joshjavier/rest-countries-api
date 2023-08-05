import { Country } from '../data/entities'
import Flag from './Flag'

interface Props {
  country: Country
}

const Card = (props: Props) => {
  const { name, population, region, capital, flags } = props.country

  return (
    <div>
      <div>
        <Flag png={flags.png} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          <span>Population:</span> {population.toLocaleString('en-US')}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital || 'None'}
        </p>
      </div>
    </div>
  )
}

export default Card

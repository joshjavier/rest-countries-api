import { Link } from 'react-router-dom'
import ArrowIcon from '../icons/arrow-left.svg'

export function Country() {
  return (
    <div className="country center">
      <Link to="/" className="btn back-link">
        <ArrowIcon className="icon" />
        Back
      </Link>

      <article className="content">
        <div className="flag">
          <img src="https://flagcdn.com/w320/be.png" alt="The flag of Belgium is composed of three equal vertical bands of black, yellow and red." />
        </div>

        <div className="text">
          <h1 className="name">Belgium</h1>

          <div className="quick-facts">
            <h2 className="visually-hidden">Quick Facts</h2>
            <div className="left">
              <Line label="Native Name" value="België" />
              <Line label="Population" value={11319511} />
              <Line label="Region" value="Europe" />
              <Line label="Sub Region" value="Western Europe" />
              <Line label="Capital" value="Brussels" />
            </div>

            <div className="right">
              <Line label="Top Level Domain" value=".be" />
              <Line label="Currency" value="Euro" />
              <Line label="Languages" value={['Dutch', 'French', 'German']} />
            </div>
          </div>

          <div className="border-countries cluster">
            <h2>Border Countries:</h2>
            <ul role="list" className="cluster">
              <CountryLink label="France" />
              <CountryLink label="Germany" />
              <CountryLink label="Netherlands" />
            </ul>
          </div>
        </div>
      </article>
    </div>
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

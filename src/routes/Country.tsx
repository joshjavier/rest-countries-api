import { Link, useParams } from 'react-router-dom'
import ArrowIcon from '../icons/arrow-left.svg'
import { CSSProperties, useEffect, useState } from 'react'
import { getCountry } from '../services/country'
import { CountryDetail } from '../data/entities'
import { CountryContent } from '../components'
import { AxiosError } from 'axios'

export function Country() {
  const [country, setCountry] = useState<CountryDetail | null>(null)
  const [error, setError] = useState<Error | AxiosError | null>(null)
  const { name } = useParams()

  useEffect(() => {
    if (!name) return

    getCountry(name)
      .then(country => {
        setCountry(country)
        document.title = `${country.flag.emoji} ${country.name} | Where in the world?`
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
  }, [])

  const style: CSSProperties = { textAlign: 'center', marginTop: 100 }

  return (
    <div className="country center">
      <Link to="/" className="btn back-link">
        <ArrowIcon className="icon" />
        Back
      </Link>

      {error ? (
        <div style={style}>
          Error: {
            error instanceof AxiosError && error.status === 404
              ? 'No matching countries.'
              : error.message
          }
        </div>
      ) : country ? (
        <CountryContent country={country} />
      ) : (
        <div style={style}>Loading...</div>
      )}
    </div>
  )
}

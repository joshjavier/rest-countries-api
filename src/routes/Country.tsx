import { Link, useParams } from 'react-router-dom'
import ArrowIcon from '../icons/arrow-left.svg'
import { CSSProperties, useEffect, useState } from 'react'
import { getCountry, getCountryNames } from '../services/country'
import { CountryDetail } from '../data/entities'
import { CountryContent } from '../components'
import axios from 'axios'

export function Country() {
  const [country, setCountry] = useState<CountryDetail | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const { name } = useParams()

  useEffect(() => {
    if (!name) return

    async function fetchCountry(query: string) {
      try {
        const country = await getCountry(query)
        if (country.borders.length > 0) {
          country.borders = await getCountryNames(country.borders as string[])
        }
        document.title = `${country.flag.emoji} ${country.name} | Where in the world?`
        setCountry(country)
      } catch (error: unknown) {
        console.log(error)
        setError(error as Error)
      }
    }

    void fetchCountry(name)
  }, [name])

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
            axios.isAxiosError(error) && error.status === 404
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

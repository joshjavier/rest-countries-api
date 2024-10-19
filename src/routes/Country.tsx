import { Link, useParams } from 'react-router-dom'
import ArrowIcon from '../icons/arrow-left.svg'
import { CSSProperties, useEffect } from 'react'
import { getCountry, getCountryNames } from '../services/country'
import { CountryContent, CountryContentLoader } from '../components'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type CountryParams = {
  name: string
}

export function Country() {
  const { name } = useParams() as CountryParams
  const country = useQuery({
    queryKey: ['country', name],
    queryFn: () => getCountry(name),
    staleTime: 5 * 60 * 1000,
  })
  const borders = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['borders', name],
    queryFn: () => getCountryNames(country.data!.borders as string[]),
    enabled: !!country.data,
    staleTime: 5 * 60 * 1000,
  })

  useEffect(() => {
    if (!country.data) return
    document.title = `${country.data.flag.emoji} ${country.data.name} | Where in the world?`
  }, [country.data])

  const style: CSSProperties = { textAlign: 'center', marginTop: 100 }

  return (
    <div className="country center">
      <Link to="/" className="btn back-link">
        <ArrowIcon className="icon" />
        Back
      </Link>

      {country.error ? (
        <div style={style}>
          Error: {
            axios.isAxiosError(country.error) && country.error.status === 404
              ? 'No matching countries.'
              : country.error.message
          }
        </div>
      ) : country.data && borders.data ? (
        <CountryContent country={{ ...country.data, borders: borders.data }} />
      ) : (
        <CountryContentLoader />
      )}
    </div>
  )
}

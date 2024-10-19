import { useEffect, useState } from 'react'
import { SearchBar, Select, Card } from '../components'
import { CountrySimple } from '../data/entities'
import { getCountries } from '../services/country'
import { useQuery } from '@tanstack/react-query'

export function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
    staleTime: 5 * 60 * 1000, // fetched data is fresh for 5 minutes
  })
  const [selectedRegion, setFilter] = useState<string | null>(null)
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    document.title = 'Where in the world? | Frontend Mentor'
  }, [])

  const countriesToShow: CountrySimple[] | undefined = selectedRegion || query
    ? data?.countries.filter((c) => {
      let regionMatch = true, queryMatch = true
      if (selectedRegion) regionMatch = c.region === selectedRegion
      if (query) queryMatch = c.name.toLowerCase().includes(query.toLowerCase())
      return regionMatch && queryMatch
    })
    : data?.countries

  return (
    <>
      <div className="filters cluster center">
        <SearchBar callback={setQuery} />
        <Select options={data?.regions ?? []} callback={setFilter} />
      </div>

      <div className="country-grid center">
        {isPending ? (
          <div style={{ gridColumn: '1 / -1', marginTop: 100 }}>Loading...</div>
        ) : isError ? (
          <div style={{ gridColumn: '1 / -1', marginTop: 100 }}>Error: {error?.message}</div>
        ) : countriesToShow && countriesToShow.length > 0 ? (
          countriesToShow.map(country => <Card key={country.code} country={country} />)
        ) : (
          <div style={{ gridColumn: '1 / -1', marginTop: 100 }}>No matching countries.</div>
        )}
      </div>
    </>
  )
}

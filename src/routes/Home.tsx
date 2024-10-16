import { useEffect, useState } from 'react'
import { SearchBar, Select, Card } from '../components'
import { CountrySimple } from '../data/entities'
import { getCountries } from '../services/country'

export function Home() {
  const [countries, setCountries] = useState<CountrySimple[]>(null!)
  const [regions, setRegions] = useState<string[]>([])
  const [selectedRegion, setFilter] = useState<string | null>(null)
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    getCountries().then(countries => {
      setCountries(countries)
      setRegions(r => {
        const regions = Array.from(new Set(countries.map(c => c.region)))
        regions.sort((a, b) => a.localeCompare(b))
        return regions
      })
    }).catch(console.log)
  }, [])

  const countriesToShow = selectedRegion || query
    ? countries.filter(c => {
      let regionMatch = true, queryMatch = true
      if (selectedRegion) regionMatch = c.region === selectedRegion
      if (query) queryMatch = c.name.toLowerCase().includes(query.toLowerCase())
      return regionMatch && queryMatch
    })
    : countries

  return (
    <>
      <div className="filters cluster center">
        <SearchBar callback={setQuery} />
        <Select options={regions} callback={setFilter} />
      </div>

      <div className="country-grid center">
        {countries == null ? (
          <div>Loading...</div>
        ) : countriesToShow.length > 0 ? (
          countriesToShow.map(country => <Card key={country.code} country={country} />)
        ) : (
          <div>No matching countries.</div>
        )}
      </div>
    </>
  )
}

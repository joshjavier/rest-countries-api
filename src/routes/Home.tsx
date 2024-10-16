import { useEffect, useState } from 'react'
import { SearchBar, Select, Card } from '../components'
import { CountrySimple } from '../data/entities'
import { getCountries } from '../services/country'

export function Home() {
  const [countries, setCountries] = useState<CountrySimple[]>([])
  const [regions, setRegions] = useState<string[]>([])
  const [selectedRegion, setFilter] = useState<string | null>(null)

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

  const countriesToShow = selectedRegion
    ? countries.filter(c => c.region === selectedRegion)
    : countries

  return (
    <>
      <div className="filters cluster center">
        <SearchBar />
        <Select options={regions} callback={setFilter} />
      </div>

      <div className="country-grid center">
        {countriesToShow.length > 0 ? (
          countriesToShow.map(country => <Card key={country.code} country={country} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  )
}

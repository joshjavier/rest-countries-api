import { useEffect, useState } from 'react'
import { SearchBar, Select, Card, Option } from '../components'
import { CountrySimple } from '../data/entities'
import { getCountries } from '../services/country'

export function Home() {
  const [countries, setCountries] = useState<CountrySimple[]>([])
  const [regions, setRegions] = useState<string[]>([])

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

  return (
    <>
      <div className="filters cluster center">
        <SearchBar />
        <Select options={regions} />
      </div>

      <div className="country-grid center">
        {countries.length > 0 ? (
          countries.map(country => <Card key={country.name} country={country} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  )
}

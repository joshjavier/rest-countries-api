import { useEffect, useState } from 'react'
import { SearchBar, Select, Card } from '../components'
import { CountrySimple } from '../data/entities'
import { getCountries } from '../services/country'

const regions = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

export function Home() {
  const [countries, setCountries] = useState<CountrySimple[]>([])

  useEffect(() => {
    getCountries().then(setCountries).catch(console.log)
  }, [])

  return (
    <>
      <div className="filters cluster center">
        <SearchBar />
        <Select options={regions} />
      </div>

      <div className="country-grid center">
        {countries.length > 0 ? (
          countries.map(country => <Card country={country} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  )
}

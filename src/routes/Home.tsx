import { SearchBar, Select, Card } from '../components'

const regions = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

const germany = {
  name: 'Germany',
  population: 81770900,
  region: 'Europe',
  capital: 'Berlin',
  flag: 'https://flagcdn.com/w320/de.png',
}

export function Home() {
  return (
    <>
      <div className="filters cluster center">
        <SearchBar />
        <Select options={regions} />
      </div>

      <div className="country-grid center">
        <Card country={germany} />
        <Card country={germany} />
      </div>
    </>
  )
}

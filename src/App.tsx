import { Header } from './components/Header'
import { Select } from './components/Select'
import { SearchBar } from './components/SearchBar'

const regions = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

export function App() {
  return (
    <>
      <Header />
      <main className="center">
        <div className="filters cluster">
          <SearchBar />
          <Select options={regions} />
        </div>

        <div className="country-grid">
          Country cards here
        </div>
      </main>
    </>
  )
}

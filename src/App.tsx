import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'

export function App() {
  return (
    <>
      <Header />
      <main className="center">
        <div className="filters">
          <SearchBar />
        </div>

        <div className="country-grid">
          Country cards here
        </div>
      </main>
    </>
  )
}

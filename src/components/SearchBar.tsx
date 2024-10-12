import { useState } from 'react'
import SearchIcon from '../icons/search.svg'
import CrossIcon from '../icons/x.svg'

export function SearchBar() {
  const [query, setQuery] = useState<string>('')

  return (
    <search className="search-bar">
      <form>
        <input
          type="search"
          name="q"
          autoComplete="off"
          placeholder="Search for a country…"
          aria-label="Search for a country"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>

      <SearchIcon className="icon icon-search" aria-hidden="true" />

      <button
        className="cancel"
        onClick={() => setQuery('')}
        style={{ visibility: query ? 'visible' : 'hidden' }}
      >
        <span className="visually-hidden">Clear search</span>
        <CrossIcon className="icon icon-x" aria-hidden="true" />
      </button>
    </search>
  )
}

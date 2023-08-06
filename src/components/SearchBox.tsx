import { FormEvent, useState } from 'react'
import { ReactComponent as SearchIcon } from '../assets/search-outline.svg'

interface Props {
  callback: (query: string) => void
}

const SearchBox = (props: Props) => {
  const [query, setQuery] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    props.callback(query)
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="searchbox">
      <SearchIcon className="icon icon-stroke" aria-hidden="true" />
      <input
        type="search"
        id="search"
        name="q"
        value={query}
        onChange={({ target }) => setQuery((target as HTMLInputElement).value)}
        aria-label="Search for a country"
        placeholder="Search for a country…"
      />
    </form>
  )
}

export default SearchBox

import { FormEvent, useEffect, useRef, useState } from 'react'
import SearchIcon from '../icons/search.svg'
import CrossIcon from '../icons/x.svg'
import { useDebounce } from '@uidotdev/usehooks'

interface Props {
  callback?: (query: string) => void
}

export function SearchBar({ callback }: Props) {
  const [query, setQuery] = useState<string>('')
  const debouncedQuery = useDebounce(query, 300)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (callback) {
      callback(debouncedQuery)
    }
  }, [debouncedQuery])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    input.current?.blur() // focus out of the input to hide the keypad on mobile
  }

  return (
    <search className="search-bar">
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name="q"
          autoComplete="off"
          placeholder="Search for a country…"
          aria-label="Search for a country"
          value={query}
          onChange={e => setQuery(e.target.value)}
          enterKeyHint="search"
          ref={input}
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

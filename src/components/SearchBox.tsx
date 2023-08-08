import { useSubmit } from 'react-router-dom'
import { useRef } from 'react'
import { ReactComponent as SearchIcon } from '../assets/search-outline.svg'
import { ReactComponent as ClearIcon } from '../assets/close-outline.svg'

interface Props {
  q: string | null
}

const SearchBox = ({ q }: Props) => {
  const submit = useSubmit()
  const ref = useRef<HTMLInputElement>(null)

  return (
    <label className="searchbox">
      <SearchIcon className="icon icon-stroke" aria-hidden="true" />
      <input
        type="search"
        id="q"
        name="q"
        defaultValue={q || ''}
        onChange={(e) => {
          const isFirstSearch = q === null
          submit(e.currentTarget.form, { replace: !isFirstSearch })
        }}
        aria-label="Search for a country"
        placeholder="Search for a country…"
        ref={ref}
      />
      <button
        aria-label="Clear search query"
        onClick={() => (ref.current!.value = '')}
        hidden={!q}
      >
        <ClearIcon className="icon icon-stroke" aria-hidden="true" />
      </button>
    </label>
  )
}

export default SearchBox

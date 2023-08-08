import { useSubmit } from 'react-router-dom'
import { ChangeEvent, useRef } from 'react'
import debounce from 'lodash/debounce'
import { ReactComponent as SearchIcon } from '../assets/search-outline.svg'
import { ReactComponent as ClearIcon } from '../assets/close-outline.svg'

interface Props {
  q: string | null
}

const SearchBox = ({ q }: Props) => {
  const submit = useSubmit()
  const ref = useRef<HTMLInputElement>(null)

  const debouncedSubmit = debounce((form, replace) => {
    submit(form, { replace })
  }, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isFirstSearch = q === null
    debouncedSubmit(e.currentTarget.form, !isFirstSearch)
  }

  return (
    <label className="searchbox">
      <SearchIcon className="icon icon-stroke" aria-hidden="true" />
      <input
        type="search"
        id="q"
        name="q"
        defaultValue={q || ''}
        onChange={handleChange}
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

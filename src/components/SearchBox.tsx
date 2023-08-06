import { Form, useSubmit } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '../assets/search-outline.svg'

interface Props {
  q: string | null
}

const SearchBox = ({ q }: Props) => {
  const submit = useSubmit()

  return (
    <Form role="search" className="searchbox">
      <label>
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
        />
      </label>
    </Form>
  )
}

export default SearchBox

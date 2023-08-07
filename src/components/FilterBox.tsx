import { useSubmit } from 'react-router-dom'
import { ReactComponent as ChevronIcon } from '../assets/chevron-down.svg'

interface Props {
  options: Set<string>
  selected: string | null
}

const FilterBox = ({ options, selected }: Props) => {
  const submit = useSubmit()

  return (
    <label className="filterbox">
      <select
        name="region"
        id="region"
        defaultValue={selected || ''}
        onChange={(e) => {
          submit(e.currentTarget.form)
        }}
        aria-label="Filter countries by region"
      >
        <option value="">Filter by Region</option>
        {[...options].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <ChevronIcon className="icon icon-stroke" aria-hidden="true" />
    </label>
  )
}

export default FilterBox

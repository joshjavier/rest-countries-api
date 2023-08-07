import { useSubmit } from 'react-router-dom'

interface Props {
  options: Set<string>
  selected: string | null
}

const FilterBox = ({ options, selected }: Props) => {
  const submit = useSubmit()

  return (
    <select
      name="region"
      id="region"
      defaultValue={selected || ''}
      onChange={(e) => {
        submit(e.currentTarget.form)
      }}
    >
      <option value="">Filter by Region</option>
      {[...options].map((r) => (
        <option key={r} value={r}>
          {r}
        </option>
      ))}
    </select>
  )
}

export default FilterBox

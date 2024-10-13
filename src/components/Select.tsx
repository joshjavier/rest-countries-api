import { useSelect } from 'downshift'
import ChevronIcon from '../icons/chevron-down.svg'

interface Option {
  value: string
  label: string
}

interface Props {
  options: Option[]
}

export function Select({ options }: Props) {
  const itemToString = (item: Option) => item.label

  const {
    isOpen, selectedItem, getToggleButtonProps,
    getMenuProps, highlightedIndex, getItemProps,
  } = useSelect({ items: options, itemToString })

  return (
    <div className="select">
      <label className="visually-hidden">Filter countries by region</label>

      <div className="toggle-button" {...getToggleButtonProps()}>
        <span>{selectedItem ? selectedItem.label : 'Filter by Region'}</span>
        <ChevronIcon className="icon" />
      </div>

      <ul className="menu" {...getMenuProps()}>
        {isOpen && options.map((item, index) => (
          <li
            key={item.value}
            style={{
              backgroundColor: highlightedIndex === index ? 'color-mix(in srgb, var(--color-text), transparent 90%)' : 'transparent',
              fontWeight: selectedItem === item ? 800 : 300,
            }}
            {...getItemProps({ item, index })}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

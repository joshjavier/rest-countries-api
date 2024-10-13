import { useSelect } from 'downshift'
import ChevronIcon from '../icons/chevron-down.svg'
import CrossIcon from '../icons/x.svg'
import { MouseEvent } from 'react'

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
    getMenuProps, highlightedIndex, getItemProps, selectItem,
  } = useSelect({ items: options, itemToString })

  const clearSelection = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation() // don't open the menu when clearing the selection
    selectItem(null)
  }

  return (
    <div className="select">
      <label className="visually-hidden">Filter countries by region</label>

      <div className="toggle-button" {...getToggleButtonProps()}>
        <span>{selectedItem ? selectedItem.label : 'Filter by Region'}</span>
        {selectedItem && (
          <button className="clear" aria-label="Clear selection" onClick={clearSelection}>
            <CrossIcon className="icon" />
          </button>
        )}
        <ChevronIcon className="icon icon-expand" />
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

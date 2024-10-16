import { useSelect } from 'downshift'
import ChevronIcon from '../icons/chevron-down.svg'
import CrossIcon from '../icons/x.svg'
import { MouseEvent } from 'react'

interface Props {
  options: string[]
  callback?: (selectedItem: string) => void
}

export function Select({ options, callback }: Props) {
  const {
    isOpen, selectedItem, getToggleButtonProps,
    getMenuProps, highlightedIndex, getItemProps, selectItem,
  } = useSelect({
    items: options,
    onSelectedItemChange(changes) {
      if (callback) {
        callback(changes.selectedItem)
      }
    },
  })

  const clearSelection = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation() // don't open the menu when clearing the selection
    selectItem(null)
  }

  return (
    <div className="select">
      <label className="visually-hidden">Filter countries by region</label>

      <div className="toggle-button" {...getToggleButtonProps()}>
        <span>{selectedItem || 'Filter by Region'}</span>
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
            key={item}
            style={{
              backgroundColor: highlightedIndex === index ? 'color-mix(in srgb, var(--color-text), transparent 90%)' : 'transparent',
              fontWeight: selectedItem === item ? 800 : 300,
            }}
            {...getItemProps({ item, index })}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { CountrySimple } from '../data/entities'
import { MouseEvent, useRef } from 'react'

interface Props {
  country: CountrySimple
}

export function Card({ country }: Props) {
  const down = useRef<number | null>(null)
  const up = useRef<number | null>(null)
  const link = useRef<HTMLAnchorElement>(null)

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    down.current = +new Date()
    e.currentTarget.addEventListener('mouseup', () => {
      up.current = +new Date()
      if ((up.current - down.current!) < 200) {
        link.current?.click()
      }
    }, { once: true })
  }

  const prettify = (number: number): string =>
    new Intl.NumberFormat('en-US').format(number)

  return (
    <article className="card" onMouseDown={handleClick}>
      <div className="flag">
        <img loading="lazy" src={country.flag} alt="" />
      </div>
      <div className="text">
        <h3 className="title">
          <Link to={country.code.toLowerCase()} ref={link}>{country.name}</Link>
        </h3>
        <div className="info">
          <p><strong>Population:</strong> {prettify(country.population)}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital || 'None'}</p>
        </div>
      </div>
    </article>
  )
}

import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { getCountries } from '../countries'
import { Country } from '../data/entities'
import SearchBox from '../components/SearchBox'
import Card from '../components/Card'

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ request }: { request: { url: string } }) => {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  const countries = getCountries(q)
  return { countries, q }
}

const Index = () => {
  const { countries, q } = useLoaderData() as {
    countries: Country[]
    q: string | null
  }

  useEffect(() => {
    ;(document.getElementById('q') as HTMLInputElement).value = q || ''
  }, [q])

  return (
    <>
      <SearchBox q={q} />
      <ul className="card-grid">
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Card country={country} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Index

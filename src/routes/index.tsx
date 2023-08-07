import { Form, useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { getCountries, getRegions } from '../countries'
import { Country } from '../data/entities'
import SearchBox from '../components/SearchBox'
import Card from '../components/Card'
import FilterBox from '../components/FilterBox'

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ request }: { request: { url: string } }) => {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  const r = url.searchParams.get('region')

  const countries = getCountries(q, r)
  const regions = getRegions()
  return { countries, regions, q, r }
}

const Index = () => {
  const { countries, regions, q, r } = useLoaderData() as {
    countries: Country[]
    regions: Set<string>
    q: string | null
    r: string | null
  }

  useEffect(() => {
    // Sync form UIs with the URL
    ;(document.getElementById('q') as HTMLInputElement).value = q || ''
    ;(document.getElementById('region') as HTMLSelectElement).value = r || ''
  }, [q, r])

  return (
    <>
      <Form role="search" className="flex flex-wrap gap-8 justify-between">
        <SearchBox q={q} />
        <FilterBox options={regions} selected={r} />
      </Form>
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

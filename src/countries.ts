import data from '../data.json'
import { Country } from './data/entities'

const countries = data.countries as Country[]

const getCountries = (query: string | null): Country[] => {
  const initialCountries = [
    'DEU',
    'USA',
    'BRA',
    'ISL',
    'AFG',
    'ALA',
    'ALB',
    'DZA',
  ].map((code) => getCountry(code))

  return query
    ? countries.filter(({ name }) =>
        name.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : initialCountries
}

const getCountry = (code: string): Country => {
  return countries.find((c) => c.alpha3Code === code)!
}

export { getCountries, getCountry }

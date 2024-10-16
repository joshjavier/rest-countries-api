import axios from 'axios'
import { CountrySimple, RestCountry } from '../data/entities'

export const client = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
})

export async function getCountries(): Promise<CountrySimple[]> {
  const { data } = await client.get<RestCountry[]>('all?fields=name,population,region,capital,flags')

  // Simplify data structure
  const countries = data.map((country): CountrySimple => ({
    name: country.name.common,
    capital: country.capital[0],
    flag: country.flags.png,
    population: country.population,
    region: country.region,
  }))

  // Sort alphabetically
  countries.sort((a, b) => a.name.localeCompare(b.name, 'en'))

  return countries
}

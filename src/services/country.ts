import axios from 'axios'
import { CountryDetail, CountryName, CountrySimple, RestCountry } from '../data/entities'

export const client = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
})

export async function getCountries(): Promise<{
  countries: CountrySimple[]
  regions: string[]
}> {
  const { data } = await client.get<RestCountry[]>('all?fields=cca3,name,population,region,capital,flags')

  // Simplify data structure
  const countries = data.map((country): CountrySimple => ({
    code: country.cca3,
    name: country.name.common,
    capital: country.capital[0],
    flag: country.flags.png,
    population: country.population,
    region: country.region,
  }))

  // Sort alphabetically
  countries.sort((a, b) => a.name.localeCompare(b.name, 'en'))

  // Collect regions into an array
  const regions = Array.from(new Set(countries.map(c => c.region)))
  regions.sort((a, b) => a.localeCompare(b))

  return { countries, regions }
}

export async function getCountry(query: string): Promise<CountryDetail> {
  const fields = 'cca3,name,population,region,subregion,capital,tld,currencies,languages,borders,flag,flags'
  const endpoint = `${query.length === 3 ? 'alpha' : 'name'}/${query}`
  const { data } = await client.get<RestCountry | RestCountry[]>(`${endpoint}?fields=${fields}`)

  // Simplify data structure
  const simplify = (country: RestCountry): CountryDetail => ({
    code: country.cca3,
    name: country.name.common,
    nativeName: Object.values(country.name.nativeName)[0]?.common,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    tld: country.tld,
    currencies: Object.values(country.currencies).map(c => c.name),
    languages: Object.values(country.languages).sort(),
    borders: country.borders,
    flag: {
      ...country.flags,
      emoji: country.flag,
    },
  })

  return simplify(Array.isArray(data) ? data[0] : data)
}

export async function getCountryNames(codes: string[]): Promise<CountryName[]> {
  if (codes.length === 0) return []

  const fields = 'cca3,name'
  const { data } = await client.get<RestCountry[]>(`alpha?codes=${codes.join()}&fields=${fields}`)

  // Simplify data structure
  const countryNames = data.map(c => ({
    code: c.cca3,
    name: c.name.common,
  }))

  return countryNames
}

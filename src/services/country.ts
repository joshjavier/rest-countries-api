import axios from 'axios'
import { CountryDetail, CountrySimple, RestCountry } from '../data/entities'

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

export async function getCountry(name: string): Promise<CountryDetail> {
  const fields = 'name,population,region,subregion,capital,tld,currencies,languages,borders,flag,flags'
  const { data } = await client.get<RestCountry[]>(`name/${name}?fields=${fields}`)

  // Simplify data structure
  const country: CountryDetail = {
    name: data[0].name.common,
    nativeName: Object.values(data[0].name.nativeName)[0].common,
    population: data[0].population,
    region: data[0].region,
    subregion: data[0].subregion,
    capital: data[0].capital,
    tld: data[0].tld,
    currencies: Object.values(data[0].currencies).map(c => c.name),
    languages: Object.values(data[0].languages).toSorted(),
    borders: data[0].borders,
    flag: {
      ...data[0].flags,
      emoji: data[0].flag,
    },
  }

  return country
}

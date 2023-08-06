import data from '../data.json'

const countries = data.countries

const getCountries = () => {
  return data.countries
}

const getCountry = (code: string) => {
  return countries.find((c) => c.alpha3Code === code)
}

export { getCountries, getCountry }

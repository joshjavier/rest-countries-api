export type Country = {
  name: string
  // cca3: string
  alpha3Code: string
  population: number
  region: string
  subregion: string
  capital: string
  flags: {
    png: string
    // alt: string
  }
  borders?: string[] // typeof cca3
  nativeName: string
  // tld: string[]
  topLevelDomain: string[]
  // currencies: { [key: string]: { name: string; symbol: string } }
  currencies?: {
    code: string
    name: string
    symbol: string
  }[]
  // languages: { [key: string]: string }
  languages: {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }[]
}

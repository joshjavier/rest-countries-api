export interface RestCountry {
  name: {
    common: string
  }
  capital: string[]
  flags: {
    png: string
    alt: string
  }
  population: number
  region: string
}

export interface CountrySimple {
  name: string
  population: number
  region: string
  capital: string
  flag: string
}

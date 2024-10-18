export interface RestCountry {
  name: {
    common: string
    nativeName: Record<string, Record<'official' | 'common', string>>
  }
  tld: string[]
  cca3: string
  currencies: Record<string, Record<'name' | 'symbol', string>>
  capital: string[]
  region: string
  subregion: string
  languages: Record<string, string>
  borders: string[]
  flag: string
  population: number
  flags: Record<'png' | 'svg' | 'alt', string>
}

export interface CountryName {
  code: string
  name: string
}

export interface CountrySimple {
  code: string
  name: string
  population: number
  region: string
  capital: string
  flag: string
}

export interface CountryDetail {
  code: string
  name: string
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string[]
  tld: string[]
  currencies: string[]
  languages: string[]
  borders: string[] | CountryName[]
  flag: Record<'png' | 'alt' | 'emoji', string>
}

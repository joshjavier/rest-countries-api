export interface RestCountry {
  name: {
    common: string
    nativeName: {
      [key: string]: Record<'official' | 'common', string>
    }
  }
  tld: string[]
  currencies: {
    [key: string]: Record<'name' | 'symbol', string>
  }
  capital: string[]
  region: string
  subregion: string
  languages: Record<string, string>
  borders: string[]
  flag: string
  population: number
  flags: Record<'png' | 'svg' | 'alt', string>
}

export interface CountrySimple {
  name: string
  population: number
  region: string
  capital: string
  flag: string
}

export interface CountryDetail {
  name: string,
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string[]
  tld: string[]
  currencies: string[]
  languages: string[]
  borders: string[]
  flag: Record<'png' | 'alt' | 'emoji', string>
}

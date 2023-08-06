import { useEffect, useState } from 'react'

import Card from './components/Card'
import Header from './components/Header'
import CountryInfo from './components/CountryInfo'
import SearchBox from './components/SearchBox'

import { Country } from './data/entities'
import data from '../data.json'

const countries = data.countries as Country[]

function App() {
  const [index, setIndex] = useState<number>(0)

  const country = countries.find((_, i) => i === index) as Country
  // console.log(country)

  // const moreThanOne = countries.filter((c) => c.currencies?.length > 1)
  // console.log(moreThanOne)
  // console.log(moreThanOne[0].currencies?.map((c) => c.name).join(', '))

  // const noData = countries.filter((c) => !c.borders)
  // console.log(noData)

  const handleClick = () => {
    setIndex(Math.floor(Math.random() * countries.length))
  }

  const navToCountry = (code: string) => {
    const country = countries.findIndex((c) => c.alpha3Code === code)
    setIndex(country)
  }

  const searchCountry = (query: string) => {
    console.log(query)
  }

  useEffect(() => {
    const antarctica = countries.findIndex((c) => c.name === 'Antarctica')
    setIndex(antarctica)
  }, [])

  return (
    <>
      <Header title="Where in the world?" />
      <main id="main" className="py-12">
        <div className="[ wrapper flow ]">
          <SearchBox callback={searchCountry} />
          <button className="button" onClick={handleClick}>
            🎲 Randomize
          </button>
          <Card country={country} />
          <CountryInfo
            country={country}
            countries={countries}
            level="detail"
            navToCountry={navToCountry}
          />
        </div>
      </main>
    </>
  )
}

export default App

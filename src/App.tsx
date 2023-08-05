import { useEffect, useState } from 'react'

import Card from './components/Card'
import Header from './components/Header'
import CountryInfo from './components/CountryInfo'

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

  useEffect(() => {
    const antarctica = countries.findIndex((c) => c.name === 'Antarctica')
    setIndex(antarctica)
  }, [])

  return (
    <>
      <Header title="Where in the world?" />
      <button onClick={handleClick}>🎲 Randomize</button>
      <Card country={country} />
      <CountryInfo country={country} level="detail" />
    </>
  )
}

export default App

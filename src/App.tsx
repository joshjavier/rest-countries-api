import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import Details from './components/Details'
import { Country } from './data/entities'
import data from '../data.json'

const countries = data.countries as Country[]

function App() {
  const [index, setIndex] = useState<number>(0)

  // const country = countries.find((c) => c.name === 'Indonesia') as Country
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

  return (
    <>
      <button onClick={handleClick}>🎲 Randomize</button>
      <Card country={country} />
      <Details country={country} countries={countries} />
    </>
  )
}

export default App

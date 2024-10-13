import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Root, Home, Country } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

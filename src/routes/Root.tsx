import { Outlet } from 'react-router-dom'
import { Header } from '../components'

export function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

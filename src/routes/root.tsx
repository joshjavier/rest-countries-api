import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../components/Header'

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Header title="Where in the world?" />
      <main id="main">
        <div className="[ wrapper flow ]">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Root

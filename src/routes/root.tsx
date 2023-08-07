import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Root = () => {
  return (
    <>
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

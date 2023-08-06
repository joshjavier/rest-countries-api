import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
// import SearchBox from '../components/SearchBox'

const Root = () => {
  return (
    <>
      <Header title="Where in the world?" />
      <main id="main" className="py-12">
        <div className="[ wrapper flow ]">
          {/* <SearchBox /> */}
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Root

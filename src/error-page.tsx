import { Link, useRouteError } from 'react-router-dom'
import { ReactComponent as BackIcon } from './assets/arrow-back-outline.svg'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div
      id="error-page"
      className="[ flow wrapper ] [ text-center grid min-h-screen justify-items-center content-center ]"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-neutral-400">
        {(error as { statusText: string }).statusText ||
          (error as Error).message}
      </p>
      <div className="[ navigation ] [ flex flex-wrap items-center justify-center gap-4 mt-12 font-semibold ]">
        <Link to=".." className="[ button ] [ px-8 shadow-lg ]">
          <BackIcon className="icon icon-stroke" />
          Back
        </Link>
        <Link to="/" className="[ button ] [ text-sky-600 px-8 shadow-lg ]">
          Go to homepage
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage

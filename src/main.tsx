import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import Country, { loader as countryLoader } from './routes/country.tsx'
import Index, { loader as countriesLoader } from './routes/index.tsx'

import App from './App.tsx'
import './css/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: countriesLoader,
      },
      {
        path: 'country/:countryCode',
        element: <Country />,
        loader: countryLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// Toggle dark mode based on system and user preference
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './src/routes/ErrorPage/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
)

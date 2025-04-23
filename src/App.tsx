import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import HomePage from "./pages/Home/homePage"
import { homeLoader } from "./pages/Home/homeLoader"
import { Suspense } from "react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
    ],
  },
])

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App

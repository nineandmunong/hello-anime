import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import HomePage from "./pages/Home/homePage"
import { homeLoader } from "./pages/Home/homeLoader"

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
  return <RouterProvider router={router} />
}

export default App

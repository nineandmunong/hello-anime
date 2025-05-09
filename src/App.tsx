import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import HomePage from "./pages/Home/homePage"
import { homeLoader } from "./pages/Home/homeLoader"
import DiscoveryPage from "./pages/discovery/DiscoveryPage"
import discoveryLoader from "./pages/discovery/discoveryLoader"

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
      {
        path: "/discovery",
        element: <DiscoveryPage />,
        loader: discoveryLoader,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

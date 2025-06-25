import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import HomePage from "./pages/Home/HomePage"
import { HomeLoader } from "./pages/Home/HomeLoader"
import DiscoveryPage from "./pages/Discovery/DiscoveryPage"
import DiscoveryLoader from "./pages/Discovery/DiscoveryLoader"
import SearchAnimePage from "./pages/SearchAnime/SearchAnimePage"
import DetailPage from "./pages/DetailPage/DetailPage"
import { DetailLoader } from "./pages/DetailPage/DetailLoader"
import GamePage from "./pages/GamePage/GamePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomeLoader,
      },
      {
        path: "/discovery",
        element: <DiscoveryPage />,
        loader: DiscoveryLoader,
      },
      {
        path: "/searchanime",
        element: <SearchAnimePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
        loader: DetailLoader,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

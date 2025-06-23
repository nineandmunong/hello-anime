import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/Footer/ScrollToTop"

export default function Root() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

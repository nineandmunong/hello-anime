import { Link } from "react-router-dom"
import logo from "../../img/logo/logo1.png"
import emoji from "../../img/emoji-mashup.png"
import { useState } from "react"

export default function Header() {
  const [navCollapse, setnavCollapse] = useState(true)

  const handleNavCollapse = () => setnavCollapse(!navCollapse)
  return (
    <div className="container">
      <div className="flex row justify-content-between align-items-center fs-3 border-bottom py-3">
        <div className="d-md-block d-none col-6 col-md-4 pt-1">
          <a className="link-primary link-underline-opacity-50 " href="#">
            <img src={emoji} alt="emoji" style={{ height: "50px" }} />
          </a>
        </div>
        <div className="col-6 col-md-4 text-md-center">
          <Link className="blog-header-logo text-decoration-none" to="/">
            <img src={logo} style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-end align-items-center column-gap-2">
          <a className="btn btn-sm btn-outline-danger" href="#">
            Sign-up
          </a>
          <a className="btn btn-sm btn-outline-success" href="#">
            Log-in
          </a>
        </div>
      </div>

      <nav className="navbar navbar-expand-md py-1 mb-3 border-bottom">
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${navCollapse ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav nav-underline justify-content-between w-100">
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis" to="/">
                🏠Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis" to="/discovery">
                🌏Discovery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis" to="/searchanime">
                🔎Anime Search
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link link-body-emphasis" href="/game">
                👾Mini Game
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

import logo from "../img/logo/logo1.png"

export default function Header() {
  return (
    <div className="container">
      <div className="flex row justify-content-between align-items-center fs-3 border-bottom py-3">
        <div className="col-4 pt-1">
          <a className="link-primary link-underline-opacity-50 " href="#">
            **Get Banana!!**
          </a>
        </div>
        <div className="col-4 text-center">
          <a
            className="blog-header-logo text-decoration-none"
            href="#"
            style={{ color: "orange" }}
          >
            <img src={logo} style={{ height: "50px" }} />
          </a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center column-gap-2">
          <a className="btn btn-sm btn-outline-danger" href="#">
            Sign-up
          </a>
          <a className="btn btn-sm btn-outline-success" href="#">
            Log-in
          </a>
        </div>
      </div>

      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="#">
            World
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            U.S.
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            Technology
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            Design
          </a>

          <a className="nav-item nav-link link-body-emphasis" href="#">
            Style
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            Travel
          </a>
        </nav>
      </div>
    </div>
  )
}

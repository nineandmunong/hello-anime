import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import logo from "../../img/logo/logo1.png"
import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 mb-3">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Anime Logo" style={{ height: "40px" }} />
              <h5 className="ms-2 mb-0" style={{ color: "orange" }}>
                Hello Anime
              </h5>
            </div>
            <p className="text-white">
              Your ultimate source for anime information, reviews, and upcoming
              releases. Stay updated with the latest anime news and trends.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5 footer-link">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-5 footer-link">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-5 footer-link">
                <FaEnvelope />
              </a>
              <a href="#" className="text-white fs-5 footer-link">
                <IoCall />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="d-flex flex-column align-items-center col-lg-2 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="flex-column align-items-center list-unstyled d-flex">
              <li className="mb-2">
                <Link
                  className="text-light text-decoration-none footer-link "
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-light text-decoration-none footer-link "
                  to="/discovery"
                >
                  Discovery
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-light text-decoration-none footer-link "
                  to="/searchanime"
                >
                  SearchAnime
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-light text-decoration-none footer-link "
                  to="/home"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4">
            <h5 className="mb-3">Subscribe to Newsletter</h5>
            <p className="text-light">
              Get the latest updates on anime releases and news
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                aria-label="Your email"
              />
              <button className="btn btn-warning" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary pt-4 mt-4 text-center">
          <p className="mb-0">
            &copy; {currentYear} Hello Anime. All rights reserved.
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="text-light text-decoration-none me-3 footer-link"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-light text-decoration-none me-3 footer-link"
            >
              Terms of Service
            </a>
            <a href="#" className="text-light text-decoration-none footer-link">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

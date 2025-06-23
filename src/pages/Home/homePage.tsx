import { useLoaderData } from "react-router-dom"
import Carousel from "../../components/Homepage/Carousel/Carousel"
import line from "../../img/gif_a.png"
import { HomeLoaderResult } from "./HomeLoader"
import SideBar from "../../components/Homepage/SideBar/SideBar"
import SeasonalAnime from "../../components/Homepage/seasonalAnime/seasonalAnime"

export default function HomePage() {
  const { seasonalAnime } = useLoaderData() as HomeLoaderResult

  return (
    <div>
      {/* Carousel Section  */}
      <section>
        <div
          className="ms-3 ps-lg-5 pt-3"
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            color: "#ff758c",
          }}
        >
          Coming Soon...
        </div>

        <div className="d-flex justify-content-center">
          <Carousel />
        </div>
      </section>

      {/*  Divider Image */}
      <div className="text-center my-4 mb-lg-5">
        <img
          src={line}
          alt=""
          style={{ maxWidth: "30%" }}
          className="img-fluid"
        />
      </div>

      {/* Top Anime Section  */}
      <section className="bg-dark px-1 text-white">
        <div className="m-1">
          <div className="row">
            <div className="col-12 col-xl-2 mt-5 pt-2 ps-2">
              <SideBar />
            </div>
            <div className="col mt-5">
              <div className="fs-3 mb-3" style={{ cursor: "default" }}>
                Anime Rank 👑
              </div>
              <hr />
              <div className="container mt-3 mb-3">
                <SeasonalAnime anime={seasonalAnime} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

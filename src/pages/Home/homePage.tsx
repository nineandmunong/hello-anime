import { useLoaderData } from "react-router-dom"
import Carousel from "../../components/Homepage/Carousel/Carousel"
import line from "../../img/gif_a.png"
import { HomeLoaderResult } from "./homeLoader"
import SideBar from "../../components/Homepage/SideBar/SideBar"
import SeasonalAnime from "../../components/Homepage/seasonalAnime/seasonalAnime"

export default function Home() {
  const { seasonalAnime } = useLoaderData() as HomeLoaderResult

  return (
    <div>
      {/* Carousel Section  */}
      <section>
        <div
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            color: "#ff758c",
            paddingRight: "10px",
            marginLeft: "100px",
          }}
        >
          Coming Soon...
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Carousel />
        </div>
      </section>

      {/*  Divider Image */}
      <div>
        <img
          src={line}
          alt=""
          style={{ width: "500px", height: "30px", margin: "0 0 30px 35%" }}
        />
      </div>

      {/* Top Anime Section  */}
      <section className="bg-dark px-1 text-white">
        <div className="m-1">
          <div className="row">
            <div className="col-2 ">
              <SideBar />
            </div>
            <div className="col mx-5 py-5 ">
              <div className="fs-3 mb-3" style={{ cursor: "default" }}>
                Anime Rank 👑
              </div>
              <hr />
              <div className="container mt-3">
                <SeasonalAnime anime={seasonalAnime} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

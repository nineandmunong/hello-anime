import { SeasonalAnimeTypes } from "../../../API/type/seasonalAnimeType"
import "./seasonalAnime.css"

interface SeasonalAnimeProps {
  anime: SeasonalAnimeTypes[]
}

const colors: { [key: string]: string } = {
  Action: "rgb(195, 53, 37)",
  Adventure: "rgb(23, 146, 75)",
  Comedy: "rgb(48, 140, 202)",
  Fantasy: "rgb(131, 74, 153)",
  Mystery: "rgb(226, 189, 38)",
  Romance: "rgb(232, 139, 171)",
  "Sci-Fi": "rgb(36, 130, 224)",
}

export default function SeasonalAnime({ anime }: SeasonalAnimeProps) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 ">
      {anime.map((item, index) => (
        <div className="col d-flex" key={item.mal_id}>
          <div className="card h-100 w-100 d-flex flex-column anime-card">
            <div
              className="card-img-top"
              style={{
                aspectRatio: "2 / 3",
                overflow: "hidden",
              }}
            >
              <img
                src={item.images.jpg.large_image_url}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="card-body d-flex justify-content-center align-items-center"
              style={{ paddingBottom: "3px", paddingTop: "8px" }}
            >
              <h5 className="card-title text-center"> {item.title} </h5>
            </div>

            <div className="d-flex flex-column mx-3 gap-1">
              <div>
                <h6>Rank {index + 1}</h6>
              </div>
              <div className="d-flex justify-content-between w-100">
                <div>
                  <h5>🌟 {item.score}</h5>
                </div>
                <div>
                  <h5>👶🏻 {item.scored_by}</h5>
                </div>
              </div>

              <div>
                <h6 className="text-primary my-1">
                  🎞️ {item.studios[0].name || "Unknown Studio"}
                </h6>
                <div style={{ marginTop: "5px" }}>
                  <span style={{ fontSize: "16px" }}>{item.status} * </span>
                  <span className="text-success" style={{ fontSize: "16px" }}>
                    {item.episodes != null
                      ? `${item.episodes} episodes`
                      : "? Episodes"}
                  </span>
                </div>
              </div>

              <div>
                {item.genres.slice(0, 3).map((genres) => (
                  <span
                    className="badge rounded-pill text-white"
                    key={genres.name}
                    style={{
                      backgroundColor: colors[genres.name] || "#7f8c8d",
                      fontSize: "12px",
                      margin: "10px 2px",
                      padding: "6px 10px",
                    }}
                  >
                    {genres.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

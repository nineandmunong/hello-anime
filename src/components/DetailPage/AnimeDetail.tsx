import { AnimeInfoType } from "../../API/type/animeInfoType"
import "./AnimeDetail.css"

interface AnimeDetailProps {
  animeDetail: AnimeInfoType
}

export default function AnimeDetail({ animeDetail }: AnimeDetailProps) {
  const { data } = animeDetail

  const genresColor: { [key: string]: string } = {
    Action: "primary",
    Adventure: "success",
    Comedy: "warning",
    Drama: "danger",
    Fantasy: "danger",
    Horror: "dark",
    Romance: "secondary",
    SciFi: "dark",
  }

  return (
    <div className="row gy-4">
      {/* Left Side */}
      <div className="col-12 col-lg-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="mb-4 d-flex justify-content-center align-items-center">
            <img
              src={data.images.jpg.large_image_url}
              alt="image_title"
              style={{ width: "75%" }}
            />
          </div>

          <div className="card mb-4 w-75">
            <div className="row card-body">
              <div className="col-4 text-center">
                <div>Score</div>
                <div>⭐ {data.score || "N/A"}</div>
              </div>
              <div className="col-4 text-center">
                <div>Rank</div>
                <div>🔰 {data.rank || "N/A"}</div>
              </div>
              <div className="col-4  text-center">
                <div>Type</div>
                <div>📺{data.type}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="text-primary text-center pb-2 border-bottom">
                Production
              </h5>
              <div className="row">
                <div className="col-6">
                  <h6 className="text-muted">Studios</h6>
                  <ul className="list-unstyled">
                    {data.studios.map((s) => (
                      <li key={s.name}>• {s.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-6">
                  <h6 className="text-muted">Producers</h6>
                  <ul className="list-unstyled">
                    {data.producers.map((p) => (
                      <li key={p.name}>• {p.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-12 col-lg-8">
        <div className="mb-4 border-bottom">
          <h1 className="fw-bold text-dark">{data.title}</h1>
          {data.title_japanese && (
            <h4 className="text-muted">{data.title_japanese}</h4>
          )}
        </div>

        <div className="mb-4">
          <div className="row card-body">
            <div className="col-6">
              <div className="d-flex flex-wrap gap-2">
                <h6 className="text-muted">Genres:</h6>
                {data.genres.map((genre) => {
                  const color = genresColor[genre.name] || "light"
                  return (
                    <div
                      key={genre.name}
                      className={`badge bg-${color} text-white p-2`}
                      style={{ maxWidth: "75px" }}
                    >
                      {genre.name}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-2">
                <h6 className="text-muted">Themes: </h6>
                {data.themes.map((theme) => (
                  <div
                    key={theme.name}
                    className="badge text-dark p-2 "
                    style={{
                      backgroundColor: "rgba(255, 255, 133, 0.89)",
                      border: "1px solid rgba(255, 72, 90, 0.89)",
                    }}
                  >
                    {theme.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h4 className="text-primary border-bottom pb-2">Synopsis</h4>
          <p className="text-muted text-center">
            {data.synopsis || "No synopsis available."}
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-primary border-bottom pb-2">Information</h4>
          <div className="row mt-3">
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <span>
                  <b>Episodes: </b>
                  {data.episodes || "Unknown"} Episodes
                </span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <span>
                  <b>Duration: </b>
                  {data.duration}
                </span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <span>
                  <b>Season: </b>
                  {data.season} {data.year}
                </span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <span>
                  <b>Status:</b> {data.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {data.trailer.youtube_id && (
          <div className="mb-5">
            <h4 className="text-primary border-bottom pb-2">Trailer</h4>
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${data.trailer.youtube_id}`}
                title="Anime Trailer"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

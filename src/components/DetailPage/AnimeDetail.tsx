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
      <div className="col-lg-4">
        <div className="row">
          <div className="mb-4 d-flex justify-content-center align-items-center ">
            <img
              src={data.images.jpg.large_image_url}
              alt="image_title"
              style={{ width: "75%" }}
            />
          </div>

          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <h5 className="card-title text-primary">Tags</h5>
              <h6 className="text-muted">Genres</h6>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {data.genres.map((genre) => {
                  const color = genresColor[genre.name] || "light"
                  return (
                    <span
                      key={genre.name}
                      className={`badge bg-${color} text-white p-2`}
                    >
                      {genre.name}
                    </span>
                  )
                })}
              </div>
              <h6 className="text-muted">Themes</h6>
              <div className="d-flex flex-wrap gap-2">
                {data.themes.map((theme) => (
                  <span
                    key={theme.mal_id}
                    className="badge bg-light border text-dark"
                  >
                    {theme.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title text-primary">Production</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6 className="text-muted">Studios</h6>
                  <ul className="list-unstyled">
                    {data.studios.map((s) => (
                      <li key={s.mal_id}>• {s.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="text-muted">Producers</h6>
                  <ul className="list-unstyled">
                    {data.producers.map((p) => (
                      <li key={p.mal_id}>• {p.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-lg-8">
        <div className="mb-4">
          <h1 className="fw-bold text-dark ">{data.title}</h1>
          {data.title_japanese && (
            <h4 className="text-muted">{data.title_japanese}</h4>
          )}
        </div>

        <div className="mb-4 d-flex flex-wrap gap-2">
          <span className="badge bg-warning text-dark">
            ⭐ {data.score || "N/A"}
          </span>
          <span className="badge bg-info">#{data.rank || "N/A"}</span>
          <span className="badge bg-secondary">{data.type}</span>
        </div>

        <div className="mb-5">
          <h4 className="text-primary border-bottom pb-2">Synopsis</h4>
          <p className="text-muted" style={{ textAlign: "justify" }}>
            {data.synopsis || "No synopsis available."}
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-primary border-bottom pb-2">Information</h4>
          <ul className="list-unstyled mt-3">
            <li>
              <strong>Episodes:</strong> {data.episodes || "Unknown"}
            </li>
            <li>
              <strong>Duration:</strong> {data.duration}
            </li>
            <li>
              <strong>Source:</strong> {data.source}
            </li>
            <li>
              <strong>Season:</strong> {data.season} {data.year}
            </li>
            <li>
              <strong>Status:</strong> {data.status}
            </li>
          </ul>
        </div>

        {data.trailer.youtube_id && (
          <div className="mb-5">
            <h4 className="text-primary border-bottom pb-2">Trailer</h4>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${data.trailer.youtube_id}`}
                title="Anime Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

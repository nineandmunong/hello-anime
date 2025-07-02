import { Link } from "react-router-dom"
import { AnimeData } from "../../API/type/searchAnimeType"
import "../SearchAnimePage/SearchAnimeCard.css"

interface SearchAnimeCardProps {
  data: AnimeData[]
}

export default function SearchAnimeCard({ data }: SearchAnimeCardProps) {
  return (
    <div className="row ">
      {data.map((animeItem, index) => (
        <div
          key={animeItem.mal_id}
          className="col-6 col-lg-4 mb-4 "
          style={{
            animation: `cardIn 0.8s ease-in-out ${index * 0.1}s both`,
          }}
        >
          <Link
            to={`/detail/${animeItem.mal_id}`}
            className="text-decoration-none text-dark"
          >
            <div
              className="card h-100 shadow-sm bounce"
              style={{
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              {/* Card ฝั่งซ้าย */}
              <div className="d-flex flex-column flex-md-row h-100">
                <div className="anime-card-image-wrapper">
                  <img
                    className="anime-card-image"
                    src={animeItem.images.webp.large_image_url}
                    alt={animeItem.title}
                  />
                  {animeItem.score && (
                    <div className="score-badge">🌟 {animeItem.score}</div>
                  )}
                </div>

                {/* Card ฝั่งชวา */}
                <div className="card-body d-flex flex-column p-3">
                  <h5 className="mb-2 fw-bold fs-6">{animeItem.title}</h5>

                  <div className="mb-2">
                    <span className="badge me-2 badge-type">
                      {animeItem.type}
                    </span>
                    {animeItem.episodes && (
                      <span className="badge badge-episodes">
                        {animeItem.episodes} EP
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: "14px" }}>
                    {animeItem.synopsis
                      ? animeItem.synopsis.substring(0, 120) + "..."
                      : "No synopsis available."}
                  </p>
                  <div className="mt-auto d-flex justify-content-end">
                    <button
                      className="btn p-2 detail-btn"
                      style={{
                        color: "white",
                        borderRadius: "12px",
                        fontWeight: "600",
                        fontSize: "12px",
                        background:
                          "linear-gradient(60deg,rgba(0, 183, 255, 1) 0%, rgba(87, 199, 133, 1) 81%, rgba(237, 221, 83, 1) 100%)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

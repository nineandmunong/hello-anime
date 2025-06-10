import { AnimeData } from "../../API/type/searchAnimeType"
import "../SearchAnimePage/SearchAnimeCard.css"

interface SearchAnimeCardProps {
  data: AnimeData[]
}

export default function SearchAnimeCard({ data }: SearchAnimeCardProps) {
  return (
    <div className="row">
      {data.map((animeItem, index) => (
        <div
          key={animeItem.mal_id}
          className="col-12 col-md-6 col-lg-4 mb-3"
          style={{
            borderRadius: "16px",
            animation: `cardIn 0.8s ease-in-out ${index * 0.1}s both`,
          }}
        >
          <div
            className="card h-100 shadow-sm bounce"
            style={{
              cursor: "pointer",
            }}
          >
            <div className="d-flex flex-column flex-md-row h-100">
              <div className="col-12 col-sm-4">
                <div className="h-100 position-relative">
                  <img
                    className="h-100 w-100"
                    src={animeItem.images.webp.large_image_url}
                    style={{
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    alt={animeItem.title}
                  />

                  {animeItem.score && (
                    <div
                      className="position-absolute top-0 start-0 m-1 p-1"
                      style={{
                        color: "white",
                        backgroundColor: "rgba(32, 32, 32, 1)",
                        borderRadius: "11px",
                        fontSize: "11px",
                      }}
                    >
                      🌟 {animeItem.score}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-12 col-sm-8 p-0">
                <div className="card-body h-100 d-flex flex-column">
                  <h5 className="mb-2 fw-bold fs-6 fs-md-5">
                    {animeItem.title}
                  </h5>

                  <div className="mb-3">
                    <span
                      className="badge me-2 "
                      style={{
                        backgroundColor: "rgba(199, 255, 181, 1)",
                        color: "rgba(169, 4, 255, 1)",
                        fontSize: "10px",
                      }}
                    >
                      {animeItem.type}
                    </span>
                    {animeItem.episodes && (
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "rgba(192, 254, 255, 1)",
                          color: "rgba(0, 175, 6, 1)",
                          fontSize: "10px",
                        }}
                      >
                        {animeItem.episodes} EP
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {animeItem.synopsis
                      ? animeItem.synopsis.substring(0, 150) + "..."
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
          </div>
        </div>
      ))}
    </div>
  )
}

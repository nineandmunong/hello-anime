import { useState } from "react"
import { animeRandomType } from "../../API/type/animeRandomType"
import animeRandomService from "../../API/services/animeRandomService"
import humen from "../../img/humen.png"
import spinner from "../../img/spinner.png"
import "./Random.css"

export default function Random() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [anime, setAnime] = useState<animeRandomType | null>(null)

  const randomAnime = async () => {
    setLoading(true)
    setError(null)

    setTimeout(() => {
      fetchAnimeData()
    }, 2000)
  }

  const fetchAnimeData = async () => {
    try {
      const randomAnime = await animeRandomService()
      setAnime(randomAnime)
    } catch (err) {
      console.error(err)
      setAnime(null)
      setError("Error, Please try again")
    }
    setLoading(false)
  }

  return (
    <div
      className="py-5"
      style={{ minHeight: "100vh", background: "rgba(162, 240, 255,0.3)" }}
    >
      <div className="container">
        <div className="container">
          <h1 className="fw-bold text-success mb-3">Discovery Anime</h1>
          <p className="lead col-lg-8">
            Can't decide what anime to watch? 🤯 Let fate decide for you! Tap
            that random button 🎲 Discover hidden gems 💎 and enjoy the anime we
            have chosen for you! 🍿✨
          </p>
          <button
            type="button"
            onClick={randomAnime}
            disabled={loading}
            className="btn btn-primary btn-lg btn-rounded shadow px-4 py-2 mt-3"
          >
            {loading ? (
              <div>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Loading...
              </div>
            ) : (
              <div>Random 🎲</div>
            )}
          </button>
        </div>

        {!anime && !loading && (
          <div className="my-5 row justify-content-center">
            <div className="col-md-3 col-6">
              <img src={humen} alt="humen" className="img-fluid zoom" />
            </div>
            <div className="col-md-3 col-6">
              <img src={spinner} alt="spinner" className="img-fluid zoom" />
            </div>
          </div>
        )}
      </div>

      <div className="container">
        {loading && (
          <div className="my-5 row justify-content-center">
            <div className="col-md-4 col-6">
              <img
                src={humen}
                alt="humen"
                className="img-fluid rotateAnimated"
              />
            </div>
            <div className="col-md-4 col-6">
              <img
                src={spinner}
                alt="spinner"
                className="img-fluid rotateAnimated"
              />
            </div>
          </div>
        )}

        {error && (
          <div
            className="alert alert-danger p-3 rounded-lg mx-auto my-4"
            style={{ maxWidth: "700px" }}
          >
            <strong>{error}</strong>
          </div>
        )}

        {anime && !loading && (
          <div className="card shadow-lg my-5">
            <div className=" bg-primary text-white py-3 text-center">
              <h2>{anime.data.title}</h2>
            </div>
            <div>
              <div className="row g-0">
                <div className="col-lg-4">
                  <div className="p-3 h-100 d-flex align-items-center justify-content-center">
                    <img
                      className="img-fluid rounded-3"
                      src={anime.data.images.jpg.large_image_url}
                      alt={anime.data.title}
                    />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="p-4">
                    <div className="mb-3">
                      <span className="badge bg-success me-2">
                        Score: {anime.data.score || "N/A"}
                      </span>
                      <span className="badge bg-info me-2">
                        Episodes: {anime.data.episodes || "N/A"}
                      </span>
                      <span className="badge bg-warning text-dark">
                        Year: {anime.data.year || "N/A"}
                      </span>
                      <div className="mt-3">
                        {anime.data.synopsis?.substring(0, 300)}...
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="ratio ratio-16x9">
                        <iframe
                          src={anime.data.trailer.embed_url}
                          title={anime.data.title}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

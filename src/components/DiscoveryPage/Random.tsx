import { useState } from "react"
import { animeRandomType } from "../../API/type/animeRandomtype"
import animeRandomService from "../../API/services/animeRandomService"
import humen from "../../img/humen.png"
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
      setError("Error fetch RandomAnime")
    }
    setLoading(false)
  }

  return (
    <div style={{ height: "100%", width: "100%", minHeight: "100vh" }}>
      <div className="container">
        <div className="container">
          <h1>Discovery Anime</h1>
          <p>
            Can't decide what anime to watch? 🤯 Let fate decide for you! Tap
            that random button 🎲 Discover hidden gems 💎 and enjoy the anime we
            have chosen for you.! 🍿✨
          </p>
          <button
            type="button"
            onClick={randomAnime}
            disabled={loading}
            className="btn btn-success btn-rounded"
          >
            Random 🎲
          </button>
        </div>

        {!anime && !loading && (
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ marginTop: "100px" }}
          >
            <img src={humen} alt="humen" style={{ width: "20%" }} />
            <img src={humen} alt="humen" style={{ width: "20%" }} />
          </div>
        )}
      </div>

      <div>
        {loading && (
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ marginTop: "100px" }}
          >
            <img
              src={humen}
              alt="humen"
              className="humenAnimated"
              style={{ width: "20%" }}
            />
            <img
              src={humen}
              alt="humen"
              className="humenAnimated "
              style={{ width: "20%" }}
            />
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {anime && !loading && (
          <div>
            <h1>Show Anime Success</h1>
            <div>
              {anime.data.title}
              <hr />
              {anime.data.episodes}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

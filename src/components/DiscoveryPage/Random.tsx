import axios from "axios"
import { useState } from "react"
import { animeRandomType } from "../../API/type/animeRandomtype"

export default function Random() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [anime, setAnime] = useState<animeRandomType | null>(null)

  const randomAnime = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await axios.get("https://api.jikan.moe/v4/random/anime")
      const data = response.data
      setAnime(data)
    } catch (err) {
      setError("Failed to fetch anime. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <div className="container">
        <h1>Discovery Anime</h1>
        <p>
          Can't decide what anime to watch? 🤯 Let fate decide for you! Tap that
          random button 🎲 Discover hidden gems 💎 and enjoy the anime we have
          chosen for you.! 🍿✨
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

      <div>
        {loading && <div>Loading...</div>}

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {anime && (
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

import { useState, useEffect } from "react"
import searchAnimeService from "../../API/services/searchAnimeService"
import { AnimeData } from "../../API/type/searchAnimeType"
import SearchAnimeCard from "../../components/SearchAnimePage/SearchAnimeCard"
import cat from "../../img/cat.gif"

export default function SearchAnimePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<AnimeData[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.length < 3) {
        setResults([])
        return
      }
      try {
        setLoading(true)
        const response = await searchAnimeService(searchTerm)
        setResults(response)
      } catch (error) {
        console.error("Search Anime:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [searchTerm])

  return (
    <div
      className="container mt-4"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="">
        <div className="mb-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <input
            className="form-control shadow"
            placeholder="🔍 Search anime title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderRadius: "10px",
            }}
          />
          <small className="text-muted">
            Start typing at least 3 characters to search...
          </small>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <h5 className="text-muted">Found {results.length} results</h5>
            </div>
            <SearchAnimeCard data={results} />
          </div>
        </div>

        {results.length == 0 && !loading && (
          <div className="text-center mt-5 ">
            <div
              className="mb-4"
              style={{
                fontSize: "100px",
              }}
            >
              🔍
            </div>
            <h3 className="mb-3">Anime Searcher</h3>
            <p>
              Search for your anime titles, and get it more detail,
              <br />
              Start typing at least 3 characters to search...
            </p>
          </div>
        )}

        {loading && (
          <div className="text-center mt-5 ">
            <div className="mb-4">
              <img style={{ width: "350px", height: "250px" }} src={cat} />
            </div>

            <h3 className="mb-3">Loading...</h3>
            <p>Loading อยู่จ้า...</p>
          </div>
        )}
      </div>
    </div>
  )
}

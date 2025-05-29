import { useState, useEffect } from "react"
import searchAnimeService from "../../API/services/searchAnimeService"
import { AnimeData } from "../../API/type/searchAnimeType"

export default function SearchAnimePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<AnimeData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.length < 3) {
        setResults([])
        return
      }

      try {
        const response = await searchAnimeService(searchTerm)
        setResults(response.data)
      } catch (error) {
        console.error("Search Anime:", error)
      }
    }

    fetchData()
  }, [searchTerm])

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="mb-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <input
            className="form-control"
            placeholder="🔍 Search anime title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <small className="text-muted">
            Start typing at least 3 characters to search...
          </small>
        </div>
      </div>
    </div>
  )
}

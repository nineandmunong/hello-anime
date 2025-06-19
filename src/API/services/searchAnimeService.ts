import axios from "axios"
import { AnimeData, SearchAnimeResponse } from "../type/searchAnimeType"

export default async function searchAnimeService(
  name: string
): Promise<AnimeData[]> {
  try {
    const tvUrl = `https://api.jikan.moe/v4/anime?q=${name}&type=tv`
    const movieUrl = `https://api.jikan.moe/v4/anime?q=${name}&type=movie`

    const [tvResponse, movieResponse] = await Promise.all([
      axios.get<SearchAnimeResponse>(tvUrl),
      axios.get<SearchAnimeResponse>(movieUrl),
    ])

    const combinedResults = [
      ...tvResponse.data.data,
      ...movieResponse.data.data,
    ]
    const uniqueResults = Array.from(
      new Map(combinedResults.map((item) => [item.mal_id, item])).values()
    )

    return uniqueResults
  } catch (error) {
    console.log("fetch searchAnimeService Error")
    throw error
  }
}

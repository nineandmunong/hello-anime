import axios from "axios"
import { SearchAnimeResponse } from "../type/searchAnimeType"

export default async function searchAnimeService(
  name: string
): Promise<SearchAnimeResponse> {
  try {
    const response = await axios.get<SearchAnimeResponse>(
      `https://api.jikan.moe/v4/anime?q=${name}&limit=25`
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.log("fetch searchAnimeService Error")
    throw error
  }
}

import axios from "axios"
import {
  SeasonalAnimeResponse,
  SeasonalAnimeTypes,
} from "../type/seasonalAnimeType"

export default async function seasonalAnimeService(): Promise<
  SeasonalAnimeTypes[]
> {
  try {
    const seasonalUrl = "https://api.jikan.moe/v4/seasons/2025/winter"
    const response = await axios.get<SeasonalAnimeResponse>(seasonalUrl)

    const seasonalAnime = response.data.data

    const sortedAnime = seasonalAnime
      .filter((item: SeasonalAnimeTypes) => item.score !== null)
      .sort((a: SeasonalAnimeTypes, b: SeasonalAnimeTypes) => b.score - a.score)

    return sortedAnime
  } catch (error) {
    console.error("Error fetch seasonal anime:", error)
    throw error
  }
}

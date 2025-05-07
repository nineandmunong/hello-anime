import axios from "axios"
import {
  SeasonalAnimeResponse,
  SeasonalAnimeTypes,
} from "../type/seasonalAnimeType"

export default async function seasonalAnimeService(
  season: string,
  year: number
): Promise<SeasonalAnimeTypes[]> {
  try {
    const seasonalUrl = `https://api.jikan.moe/v4/seasons/${year}/${season}`
    const response = await axios.get<SeasonalAnimeResponse>(seasonalUrl)
    const rawAnime = response.data.data

    const seasonalAnime = rawAnime.filter(
      (item, index, self) =>
        index === self.findIndex((a) => a.mal_id === item.mal_id)
    )

    const sortedAnime = seasonalAnime
      .filter((item: SeasonalAnimeTypes) => item.rank !== null)
      .sort((a: SeasonalAnimeTypes, b: SeasonalAnimeTypes) => a.rank - b.rank)

    return sortedAnime
  } catch (error) {
    console.error("Error fetch seasonal anime:", error)
    throw error
  }
}

import axios from "axios"
import type { TopAnimeTypes, TopAnimeResponse } from "../type/topAnimeTypes"

export default async function topAnimeService(): Promise<TopAnimeTypes[]> {
  try {
    await new Promise((res) => setTimeout(res, 500))
    const topAnimeUrl = "https://api.jikan.moe/v4/top/anime?filter=airing"
    const response = await axios.get<TopAnimeResponse>(topAnimeUrl)
    const rawAnime = response.data.data

    const topAnime = rawAnime.filter(
      (item, index, self) =>
        index === self.findIndex((a) => a.mal_id === item.mal_id)
    )

    return topAnime
  } catch (error) {
    console.error("Error fetching TopAnime:", error)
    throw error
  }
}

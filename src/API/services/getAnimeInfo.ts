import axios from "axios"
import type { AnimeInfoType } from "../type/animeInfoType"

export default async function getAnimeInfo(
  ids: number[]
): Promise<AnimeInfoType[]> {
  const animeInfo: AnimeInfoType[] = []

  for (let i = 0; i < ids.length; i++) {
    if (i !== 0) {
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${ids[i]}`)
    animeInfo.push(res.data)
  }

  return animeInfo
}

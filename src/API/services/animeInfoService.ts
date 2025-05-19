import axios from "axios"
import type { AnimeInfoType } from "../type/animeInfoType"

export default async function getAnimeInfo(
  ids: number[]
): Promise<AnimeInfoType[]> {
  const animeInfo: AnimeInfoType[] = []
  const batchSize = 3

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize)

    for (const id of batch) {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        animeInfo.push(response.data)
        await delay(300) // เวลาหน่วงต่อ request
      } catch (error) {
        console.error(`Error fetching anime ID ${id}:`, error)
      }
    }

    if (i + batchSize < ids.length) {
      await delay(1000) // หน่วงระหว่าง batch
    }
  }

  return animeInfo
}

import axios from "axios"
import type { AnimeInfoType } from "../type/animeInfoType"

export default async function getAnimeInfo(
  ids: number[]
): Promise<AnimeInfoType[]> {
  const animeInfo: AnimeInfoType[] = []
  const batchSize = 3

  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize)

    const batchResults = await Promise.all(
      batch.map(async (id) => {
        try {
          const response = await axios.get(
            `https://api.jikan.moe/v4/anime/${id}`
          )
          return response.data
        } catch (error) {
          console.error(`Error fetching anime ID ${id}:`, error)
          return null
        }
      })
    )

    animeInfo.push(
      ...batchResults.filter((item): item is AnimeInfoType => item !== null)
    )

    if (i + batchSize < ids.length) {
      await new Promise((resolve) => setTimeout(resolve, 3500))
    }
  }

  return animeInfo
}

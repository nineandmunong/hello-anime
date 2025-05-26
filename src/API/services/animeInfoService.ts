import type { AnimeInfoType } from "../type/animeInfoType"

export default async function animeInfoService(
  malIds: number[]
): Promise<AnimeInfoType[]> {
  const animeInfo: AnimeInfoType[] = []

  for (let i = 0; i < malIds.length; i++) {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${malIds[i]}`)
      const data = await res.json()
      animeInfo.push(data)
    } catch (error) {
      console.error(`Error fetching mal_id ${malIds[i]}`, error)
    }
  }

  return animeInfo
}

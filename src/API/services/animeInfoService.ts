import axios from "axios"
import { AnimeInfoType } from "../type/animeInfoType"

export default async function animeInfoService(
  malIds: number
): Promise<AnimeInfoType | null> {
  try {
    const response = await axios.get<AnimeInfoType>(
      `https://api.jikan.moe/v4/anime/${malIds}`
    )
    return response.data
  } catch (error) {
    console.error(`Error fetching mal_id ${malIds}`, error)
    return null
  }
}

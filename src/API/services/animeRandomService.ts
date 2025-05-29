import axios from "axios"
import { animeRandomType } from "../type/animeRandomType"

export default async function animeRandomService(): Promise<animeRandomType> {
  const MAX_ATTEMPTS = 10
  let attempt = 0

  while (attempt < MAX_ATTEMPTS) {
    const response = await axios.get<animeRandomType>(
      "https://api.jikan.moe/v4/random/anime"
    )
    const hasTrailer = response?.data?.data?.trailer?.embed_url

    if (hasTrailer) {
      return response.data
    }

    attempt++
  }

  throw new Error("Could not find anime with a trailer after 10 attempts")
}

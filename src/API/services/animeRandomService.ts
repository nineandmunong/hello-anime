import { animeRandomType } from "../type/animeRandomtype"

const animeRandomService = async (): Promise<animeRandomType> => {
  const MAX_ATTEMPTS = 10
  let attempt = 0

  while (attempt < MAX_ATTEMPTS) {
    const response = await fetch("https://api.jikan.moe/v4/random/anime")
    const result: animeRandomType = await response.json()

    const hasTrailer = result?.data?.trailer?.embed_url
    if (hasTrailer) {
      return result
    }

    attempt++
  }

  throw new Error("Could not find anime with a trailer after 10 attempts")
}

export default animeRandomService

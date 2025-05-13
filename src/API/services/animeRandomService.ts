import axios from "axios"
import { animeRandomType } from "../type/animeRandomtype"

export default async function animeRandomService(): Promise<animeRandomType> {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/random/anime")
    const data = response.data
    return data
  } catch (err) {
    console.error("Error fetch AnimeRandom:", err)
    throw err
  }
}

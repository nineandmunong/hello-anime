import axios from "axios"
import type { UpComingType } from "../type/upComingTypes"

export default async function upComingServices(): Promise<number[]> {
  try {
    const upComingUrl = "https://api.jikan.moe/v4/seasons/upcoming"
    const response = await axios.get(upComingUrl, {
      params: { limit: 5 },
    })

    const mal_id = response.data.data.map((upComing: UpComingType) => {
      return upComing.mal_id
    })

    return mal_id
  } catch (error) {
    console.error("Error fetching upcoming data:", error)
    throw error
  }
}

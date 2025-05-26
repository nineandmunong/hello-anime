import type { UpComingResponse } from "../type/upComingTypes"
import axios from "axios"

export default async function upComingServices(): Promise<string[]> {
  try {
    const response = await axios.get<UpComingResponse>(
      "https://api.jikan.moe/v4/seasons/upcoming"
    )

    const images = response.data.data
      .map((anime) => anime.trailer.images.maximum_image_url)
      .filter(Boolean)

    const uniqueImages = Array.from(new Set(images))
    return uniqueImages.slice(0, 10)
  } catch (err) {
    console.error("fetchUpComingImageError", err)
    return []
  }
}

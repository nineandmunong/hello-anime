import type { UpComingResponse } from "../type/upComingTypes"
import axios from "axios"

function getIdFromUrl(embedUrl?: string | null): string | null {
  if (!embedUrl) return null
  const after = embedUrl.split("/embed/")[1]
  return after.split(/[?&]/)[0]
}

const ytThumb = (
  id: string,
  q: "maxresdefault" | "hqdefault" = "maxresdefault"
) => `https://img.youtube.com/vi/${id}/${q}.jpg`

export default async function upComingServices(): Promise<string[]> {
  try {
    const { data } = await axios.get<UpComingResponse>(
      "https://api.jikan.moe/v4/seasons/upcoming"
    )

    const urls = data.data
      .map((a) => getIdFromUrl(a.trailer?.embed_url))
      .filter((id): id is string => Boolean(id))
      .map((id) => ytThumb(id, "maxresdefault"))

    // กันซ้ำ + จำกัดจำนวน
    return Array.from(new Set(urls)).slice(0, 10)
  } catch (err) {
    console.error("fetchUpComingImageError", err)
    return []
  }
}

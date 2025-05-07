import seasonalAnimeService from "../../API/services/seasonalAnimeService"
import { SeasonalAnimeTypes } from "../../API/type/seasonalAnimeType"

export interface HomeLoaderResult {
  seasonalAnime: SeasonalAnimeTypes[]
  season: string
  year: number
}

export async function homeLoader({
  request,
}: {
  request: Request
}): Promise<HomeLoaderResult> {
  const url = new URL(request.url)
  const season = url.searchParams.get("season") || "spring"
  const year = parseInt(url.searchParams.get("year") || "2025")

  const seasonalAnime = await seasonalAnimeService(season, year)

  return {
    seasonalAnime,
    season,
    year,
  }
}

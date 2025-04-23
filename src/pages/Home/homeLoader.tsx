import seasonalAnimeService from "../../API/services/seasonalAnimeService"
import { SeasonalAnimeTypes } from "../../API/type/seasonalAnimeType"

export interface HomeLoaderResult {
  seasonalAnime: SeasonalAnimeTypes[]
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const seasonalAnime = await seasonalAnimeService()

  return {
    seasonalAnime,
  }
}

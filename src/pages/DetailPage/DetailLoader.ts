import { LoaderFunctionArgs } from "react-router-dom"
import animeInfoService from "../../API/services/animeInfoService"
import { AnimeInfoType } from "../../API/type/animeInfoType"

export async function DetailLoader({
  params,
}: LoaderFunctionArgs): Promise<AnimeInfoType | null> {
  const id = Number(params.id)
  const animeInfo = await animeInfoService(id)
  return animeInfo
}

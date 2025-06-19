import { useLoaderData, useNavigate } from "react-router-dom"
import AnimeDetail from "../../components/DetailPage/AnimeDetail"
import { AnimeInfoType } from "../../API/type/animeInfoType"

export default function DetailPage() {
  const animeDetail = useLoaderData() as AnimeInfoType
  const navigate = useNavigate()

  return (
    <div>
      <div className="ms-5 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-primary rounded-pill px-4 mb-3"
        >
          ❮❮ Back
        </button>
      </div>
      <div className="p-4" style={{ backgroundColor: "#F5F7FB" }}>
        <AnimeDetail animeDetail={animeDetail} />
      </div>
    </div>
  )
}

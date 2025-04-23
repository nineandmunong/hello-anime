import { SeasonalAnimeTypes } from "../../../API/type/seasonalAnimeType"

interface SeasonalAnimeProps {
  anime: SeasonalAnimeTypes[]
}

export default function SeasonalAnime({ anime }: SeasonalAnimeProps) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
      {anime.map((item) => (
        <div className="col d-flex" key={item.mal_id}>
          <div className="card h-100 w-100 d-flex flex-column">
            {
              <img
                src={item.images.jpg.large_image_url}
                className="card-img-top"
                alt={item.title}
                style={{ height: "350px", objectFit: "cover", width: "100%" }}
              />
            }

            <div className="card-body d-flex justify-content-center align-items-center">
              <h5 className="card-title text-center"> {item.title} </h5>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item ">Rank: {item.rank} </li>
              <li className="list-group-item ">Score: {item.score} </li>
              <li className="list-group-item ">
                Episodes:{/*  {item.episodes} */}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

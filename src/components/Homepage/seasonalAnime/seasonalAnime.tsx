import { SeasonalAnimeTypes } from "../../../API/type/seasonalAnimeType"

interface SeasonalAnimeProps {
  anime: SeasonalAnimeTypes[]
}

export default function SeasonalAnime({ anime }: SeasonalAnimeProps) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
      {anime.map((item, index) => (
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

            <div className="d-flex flex-column mx-3 gap-1">
              <div className="d-flex justify-content-between w-100">
                <div>
                  <h5 className="">🌟 {item.score}</h5>
                </div>
                <div>
                  <h5 className="">👶🏻 {item.scored_by}</h5>
                </div>
              </div>

              <div>
                <h6 className="text-primary">
                  {item.studios[0].name || "Unknown Studio"},{index}
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

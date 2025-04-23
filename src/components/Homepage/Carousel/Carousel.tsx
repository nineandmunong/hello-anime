import { useEffect, useState } from "react"
import "./Carousel.css"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import upComingServices from "../../../API/services/upComingService"
import getAnimeInfo from "../../../API/services/getAnimeInfo"
import { AnimeInfoType } from "../../../API/type/animeInfoType"

export default function Carousel() {
  const [imageIndex, setImageIndex] = useState(0)
  const [malId, setMalId] = useState<number[]>([])
  const [animeInfo, setAnimeInfo] = useState<AnimeInfoType[]>([])
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    async function getId() {
      const id = await upComingServices()
      setMalId(id)
    }
    getId()
  }, [])

  useEffect(() => {
    if (malId.length > 0) {
      async function fetchAnimeInfo() {
        const info = await getAnimeInfo(malId)
        setAnimeInfo(info)
      }
      fetchAnimeInfo()
    }
  }, [malId])

  useEffect(() => {
    if (animeInfo.length > 0) {
      setImages(
        animeInfo.map(
          (info) => info.data.trailer?.images.maximum_image_url || ""
        )
      )
    }
  }, [animeInfo])

  function prevImage() {
    setImageIndex((index) => {
      if (index == 0) return images.length - 1
      return index - 1
    })
  }

  function nextImage() {
    setImageIndex((index) => {
      if (index == images.length - 1) return 0
      return index + 1
    })
  }

  return (
    <div className="slide">
      <div
        className="d-flex"
        style={{ overflow: "hidden", height: "90%", width: "100%" }}
      >
        {images.map((img, index) => (
          <img
            className="slideImg"
            src={img}
            key={index}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button className="slideBtn" onClick={prevImage} style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>
      <button className="slideBtn" onClick={nextImage} style={{ right: 0 }}>
        <ArrowBigRight />
      </button>
      <div className="selectSlideBtn">
        {images.map((_, index) => (
          <button
            key={`img_${index}`}
            className="imgSlideBtn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  )
}

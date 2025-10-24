import { useEffect, useState } from "react"
import "./Carousel.css"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import upComingServices from "../../../API/services/upComingService"

export default function Carousel() {
  const [imageIndex, setImageIndex] = useState(0)
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const img = await upComingServices()
      if (img) {
        console.log("From Component>>", img)
      }
      setImages(img)
    }
    fetchImages()
  }, [])

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

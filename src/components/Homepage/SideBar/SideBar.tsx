import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function SideBar() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const seasons = ["winter", "spring", "summer", "fall"]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 6 }, (_, i) => currentYear - i)

  const [selectedSeason, setSelectedSeason] = useState(
    searchParams.get("season") || "spring"
  )
  const [selectedYear, setSelectedYear] = useState(
    parseInt(searchParams.get("year") || "2025")
  )
  const [seasonDropdownOpen, setSeasonDropdownOpen] = useState(false)
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false)

  const handleSeasonChange = (season: string) => {
    setSelectedSeason(season)
    navigate(`/?season=${season}&year=${selectedYear}`)
    setSeasonDropdownOpen(false)
  }

  const handleYearChange = (year: number) => {
    setSelectedYear(year)
    navigate(`/?season=${selectedSeason}&year=${year}`)
    setYearDropdownOpen(false)
  }

  // กดข้างนอกปิด Dropdown ได้
  const handleClickOutside = () => {
    setSeasonDropdownOpen(false)
    setYearDropdownOpen(false)
  }

  return (
    <div
      className="d-flex flex-column text-bg-dark"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="fs-4" style={{ cursor: "default" }}>
        Filter
      </div>
      <hr />
      <div className="mb-3">
        <h5 style={{ cursor: "default" }}>Season</h5>
        <div className="position-relative">
          <button
            className="btn btn-secondary w-100 d-flex justify-content-between align-items-center"
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setSeasonDropdownOpen(!seasonDropdownOpen)
              setYearDropdownOpen(false)
            }}
          >
            {selectedSeason.charAt(0).toUpperCase() + selectedSeason.slice(1)}
            <span className="ms-2">▼</span>
          </button>
          {seasonDropdownOpen && (
            <ul
              className="list-group position-absolute w-100 mt-1"
              style={{ zIndex: 1000 }}
            >
              {seasons.map((season) => (
                <li
                  key={season}
                  className={`list-group-item ${
                    selectedSeason === season ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSeasonChange(season)}
                >
                  {season.charAt(0).toUpperCase() + season.slice(1)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mb-3">
        <h5 className="text-white" style={{ cursor: "default" }}>
          Year
        </h5>
        <div className="position-relative">
          <button
            className="btn btn-secondary w-100 d-flex justify-content-between align-items-center"
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setYearDropdownOpen(!yearDropdownOpen)
              setSeasonDropdownOpen(false)
            }}
          >
            {selectedYear}
            <span className="ms-2">▼</span>
          </button>
          {yearDropdownOpen && (
            <ul
              className="list-group position-absolute w-100 mt-1"
              style={{ zIndex: 1000 }}
            >
              {years.map((year) => (
                <li
                  key={year}
                  className={`list-group-item ${
                    selectedYear === year ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr />

      {(seasonDropdownOpen || yearDropdownOpen) && (
        <div
          onClick={handleClickOutside}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        />
      )}
    </div>
  )
}

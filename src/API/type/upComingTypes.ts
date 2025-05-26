export interface UpComingResponse {
  data: UpComingType[]
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    items: {
      count: number
      total: number
      per_page: number
    }
  }
}

export interface UpComingType {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  trailer: {
    youtube_id: string | null
    url: string | null
    embed_url: string | null
    images: {
      image_url: string
      small_image_url: string
      medium_image_url: string
      large_image_url: string
      maximum_image_url: string
    }
  }
  approved: boolean
  titles: {
    type: string
    title: string
  }[]
  title: string
  title_english: string | null
  title_japanese: string | null
  title_synonyms: string[]
  type: string
  source: string
  episodes: number | null
  status: string
  airing: boolean
  aired: {
    from: string | null
    to: string | null
    prop: {
      from: { day: number | null; month: number | null; year: number | null }
      to: { day: number | null; month: number | null; year: number | null }
      string: string
    }
  }
  duration: string
  rating: string
  score: number | null
  scored_by: number | null
  rank: number | null
  popularity: number
  members: number
  favorites: number
  synopsis: string | null
  background: string | null
  season: string | null
  year: number | null
  broadcast: {
    day: string | null
    time: string | null
    timezone: string | null
    string: string
  }
  producers: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  licensors: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  studios: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  explicit_genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  themes: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  demographics: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}

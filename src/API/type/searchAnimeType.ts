export interface ImageUrls {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Images {
  jpg: ImageUrls
  webp: ImageUrls
}

export interface Trailer {
  youtube_id: string | null
  url: string | null
  embed_url: string | null
}

export interface Title {
  type: string
  title: string
}

export interface AiredPropFromTo {
  day: number | null
  month: number | null
  year: number | null
}

export interface AiredProp {
  from: AiredPropFromTo
  to: AiredPropFromTo
  string: string
}

export interface Aired {
  from: string | null
  to: string | null
  prop: AiredProp
  string: string
}

export interface Broadcast {
  day: string | null
  time: string | null
  timezone: string | null
  string: string | null
}

export interface ExternalLink {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface AnimeData {
  mal_id: number
  url: string
  images: Images
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english: string | null
  title_japanese: string | null
  title_synonyms: string[]
  type: string | null
  source: string | null
  episodes: number | null
  status: string | null
  airing: boolean
  aired: Aired
  duration: string | null
  rating: string | null
  score: number | null
  scored_by: number | null
  rank: number | null
  popularity: number | null
  members: number | null
  favorites: number | null
  synopsis: string | null
  background: string | null
  season: string | null
  year: number | null
  broadcast: Broadcast
  producers: ExternalLink[]
  licensors: ExternalLink[]
  studios: ExternalLink[]
  genres: ExternalLink[]
  explicit_genres: ExternalLink[]
  themes: ExternalLink[]
  demographics: ExternalLink[]
}

export interface PaginationItems {
  count: number
  total: number
  per_page: number
}

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: PaginationItems
}

export interface SearchAnimeResponse {
  data: AnimeData[]
  pagination: Pagination
}

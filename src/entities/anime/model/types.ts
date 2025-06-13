export interface AnimeResponse {
	success: boolean
	data: IAnime
	error: null
	meta: null
}

export interface IAnime {
	id: string
	alias: string
	malId: string
	shikimoriId: string
	name: string
	description: string
	russian: string
	english: string
	japanese: string
	synonyms: string[]
	status: string
	kind: string
	episodes: number
	episodesAired: number
	duration: number
	score: number
	shikimoriScore: number
	airedOn: string
	releasedOn: string
	shikimoriUrl: string
	season: null
	isCensored: boolean
	rating: string
	nextEpisodeAt: null
	createdAt: string
	updatedAt: string
	genres: Genre[]
	theme: any[]
	demographic: any[]
	studios: Studio[]
	poster: Poster[]
	screenshots: Screenshot[]
	videos: Video[]
	kodik: {
		kodik: KodikData | null
	}
	anilibiria: {
		anilibria: AnilibriaData | null
	}
}

export interface Genre {
	animeId: string
	genreId: string
	genre: {
		id: string
		requestId: number
		name: string
		russian: string
	}
}

interface Studio {
	animeId: string
	studioId: string
	studio: {
		id: string
		name: string
		imageUrl: string
	}
}

interface Poster {
	id: string
	shikimoriId: string
	animeId: string
	originalUrl: string
	mainUrl: string
}

interface Screenshot {
	animeId: string
	screenshotId: string
	screenshot: {
		id: string
		shikimoriId: string
		originalUrl: string
		x332Url: string
	}
}

interface Video {
	animeId: string
	videoId: string
	video: {
		id: string
		shikimoriId: string
		url: string
		name: string
		kind: string
		playerUrl: string
		imageUrl: string
	}
}

interface KodikData {
	russian: string
	name: string
	year: number
	shikimoriId: string
	episodesCount: number
	translations: KodikTranslation[]
}

interface KodikTranslation {
	translation: {
		id: number
		title: string
		type: string
	}
	lastEpisode: number
	seasons: KodikSeason[]
}

interface KodikSeason {
	season: number
	episodes: KodikEpisode[]
}

interface KodikEpisode {
	number: number
	link: string
	screenshots: string[]
}

interface AnilibriaData {
	russian: string
	name: string
	year: number
	shikimoriId: string
	episodesCount: number
	translations: AnilibriaTranslation[]
}

interface AnilibriaTranslation {
	translation: {
		title: string
		type: string
	}
	lastEpisode: number
	seasons: AnilibriaSeason[]
}

interface AnilibriaSeason {
	season: number
	episodes: AnilibriaEpisode[]
}

interface AnilibriaEpisode {
	id: string
	name: string
	ordinal: number
	opening: {
		stop: null
		start: null
	}
	ending: {
		stop: null
		start: null
	}
	preview: {
		src: string
		preview: string
		thumbnail: string
		optimized: {
			src: string
			preview: string
			thumbnail: string
		}
	}
	hls_480: string
	hls_720: string
	hls_1080: string
	duration: number
	rutube_id: null
	youtube_id: null
	updated_at: string
	sort_order: number
	name_english: null
}

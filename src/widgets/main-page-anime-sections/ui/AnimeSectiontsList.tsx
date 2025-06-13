'use client'
import { AnimeCard } from '@/src/entities/anime/ui/AnimeCard'
import { CardContent, Loading } from '@/src/shared/components/ui'
import { IAnime } from '@/src/entities/anime/model/types'

export function AnimeSectionList({ animes }: { animes?: IAnime[] | null }) {
	if (!animes) return <Loading></Loading>

	return (
		<CardContent className='flex flex-row items-center justify-between gap-5'>
			{animes
				.filter(anime => anime.shikimoriScore && anime.episodesAired)
				.sort((a, b) => b.shikimoriScore - a.shikimoriScore)
				.slice(0, 6)
				.map(anime => (
					<AnimeCard
						key={anime.id}
						anime={anime}
						className='w-full'
					></AnimeCard>
				))}
		</CardContent>
	)
}

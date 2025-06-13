import { Button } from '@/src/shared/components/ui'
import Image from 'next/image'
import { IAnime } from '../model/types'
import { formatWithDots } from '@/src/shared/utils'
import { AGE_RATINGS, SEASONS_RU } from '@/src/shared/constants'

export function PlainAnimeCard({ anime }: { anime: IAnime }) {
	const animeYear = anime.airedOn.split('-')[0]
	const season = anime.season
		? SEASONS_RU[String(anime.season).split('_')[0] as keyof typeof SEASONS_RU]
		: null
	const ageRaing = AGE_RATINGS.find(
		rating => rating.value === anime.rating
	)?.label
	const genres = anime.genres.map(genre => genre.genre.russian)
	const formattedGenres = formatWithDots(genres)

	const formattedFooter = formatWithDots([
		animeYear,
		season,
		anime.kind,
		ageRaing,
	])
	return (
		<div className='flex w-full items-center justify-start gap-3 px-3 py-3 text-left transition-colors hover:bg-muted rounded-md'>
			<div className='w-[180px] aspect-[2/3] relative flex-shrink-0 overflow-hidden rounded-md'>
				<Image
					src={anime.poster[0].originalUrl}
					alt={anime.name}
					fill
					className='object-cover rounded-md'
				/>
			</div>

			<div className='flex flex-col overflow-hidden gap-2 max-w-[35vw]'>
				<div>
					<span className='text-lg font-medium text-foreground line-clamp-2 truncate'>
						{anime.russian || anime.name}
					</span>
					{anime.name && (
						<span className='text-xs text-muted-foreground truncate'>
							{anime.name}
						</span>
					)}
				</div>
				<div className='text-xs text-muted-foreground flex flex-col '>
					<span>{formattedGenres}</span>
					<span>{formattedFooter}</span>
				</div>

				{anime.description && (
					<p className='text-sm text-muted-foreground line-clamp-5 break-words'>
						{anime.description}
					</p>
				)}
			</div>
		</div>
	)
}

import {
	Button,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/src/shared/components/ui'
import { IAnime } from '../model/types'
import Image from 'next/image'
import { cn, formatWithDots } from '@/src/shared/utils'
import { AGE_RATINGS, SEASONS_RU } from '@/src/shared/constants'
import { Heart, Play } from 'lucide-react'

interface AnimeCardProps {
	anime: IAnime
	className?: string
}

export function AnimeCard({ anime, className }: AnimeCardProps) {
	const posterUrl = anime.poster[0]?.originalUrl
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
	console.log(anime.genres)

	return (
		<div className={cn('group relative overflow-hidden ', className)}>
			<div className='relative aspect-[2/3] w-full overflow-hidden rounded-xl'>
				<Image
					src={posterUrl}
					alt={anime.name}
					fill
					className='object-cover transition-transform duration-300 '
					priority={false}
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
				<div className='absolute inset-x-0 bottom-0 p-3  opacity-0 transition-opacity duration-300 group-hover:opacity-100 h-full justify-between flex flex-col items-center'>
					<div className='border-2 font-bold bg-card/95 p-2 px-3 rounded-md'>
						<p>{anime.episodesAired} эпизод</p>
					</div>
					<CardTitle className='line-clamp-4 text-xl font-extrabold'>
						{anime.russian}
					</CardTitle>
					<div className='flex flex-col gap-1 items-center'>
						<div className='flex items-center justify-between text-sm text-muted-foreground flex-col font-medium'>
							<p>{formattedFooter}</p>
							<p className='text-xs'>{formattedGenres}</p>
						</div>
						<div className='flex flex-row gap-2'>
							<Button variant='secondary'>
								<Play className='mr-1' />
								Смотреть
							</Button>
							<Button variant='secondary'>
								<Heart className='h-4 w-4' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

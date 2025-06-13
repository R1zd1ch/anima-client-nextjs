import { IAnime } from '@/src/entities/anime/model/types'
import { Button } from '@/src/shared/components/ui'
import Image from 'next/image'

export function SimpleAnimeSearchAnimeCard({ anime }: { anime: IAnime }) {
	return (
		<Button
			variant='ghost'
			className='flex w-full h-fit items-center justify-start gap-3 px-3 py-2 text-left hover:bg-muted/50 transition-colors'
		>
			<div className='w-12 h-12 relative flex-shrink-0 overflow-hidden rounded-md'>
				<Image
					src={anime.poster[0].originalUrl}
					alt={anime.name}
					fill
					className='object-cover rounded-md'
				/>
			</div>
			<div className='flex flex-col overflow-hidden'>
				<span className='text-sm font-medium text-foreground truncate'>
					{anime.russian || anime.name}
				</span>
				{anime.name && (
					<span className='text-xs text-muted-foreground truncate'>
						{anime.name}
					</span>
				)}
				{anime.airedOn && (
					<span className='text-xs text-muted-foreground'>
						{anime.airedOn.slice(0, 4)} • {anime.kind}
					</span>
				)}
			</div>
		</Button>
	)
}

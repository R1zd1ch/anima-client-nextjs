import { Card } from '@/src/shared/components/ui'
import { CatalogListProps } from '../model'
import { cn } from '@/src/shared/utils'
import { useAdvancedAnimeSearch } from '@/src/features/advanced-search-anime/model'
import { PlainAnimeCard, PlainAnimeCardLoader } from '@/src/entities/anime'

export function CatalogList({ className }: CatalogListProps) {
	const { animes, isLoading } = useAdvancedAnimeSearch()
	return (
		<Card className={cn(className, 'w-full px-4')}>
			{isLoading &&
				!animes &&
				Array(10)
					.fill(0)
					.map((_, index) => (
						<PlainAnimeCardLoader key={index}></PlainAnimeCardLoader>
					))}
			{!isLoading &&
				animes?.map(anime => <PlainAnimeCard key={anime.id} anime={anime} />)}
		</Card>
	)
}

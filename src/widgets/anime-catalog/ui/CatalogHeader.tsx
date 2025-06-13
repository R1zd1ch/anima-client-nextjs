import { AdvancedAnimeSearch } from '@/src/features/advanced-search-anime'
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/src/shared/components/ui'
import { CircleX, Funnel, FunnelX } from 'lucide-react'
import { CatalogHeaderProps } from '../model'

export function CatalogHeader({
	isFilterVisible,
	setIsFilterVisible,
	className,
	onClearFilters,
}: CatalogHeaderProps) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Каталог аниме</CardTitle>
				<CardDescription>
					Смотрите самые свежие и новые эпизоды в любой озвучке
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-row gap-4 w-full'>
				<AdvancedAnimeSearch className='w-full' />
				<Button
					variant={'outline'}
					className='size-12'
					onClick={() => setIsFilterVisible(!isFilterVisible)}
				>
					{isFilterVisible ? (
						<Funnel className='size-5' />
					) : (
						<FunnelX className='size-5' />
					)}
				</Button>
				<Button
					variant={'outline'}
					className='size-12'
					onClick={() => onClearFilters()}
				>
					<CircleX className='size-5'></CircleX>
				</Button>
			</CardContent>
		</Card>
	)
}

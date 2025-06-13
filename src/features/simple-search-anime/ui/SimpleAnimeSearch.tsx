import { Button, Input } from '@/src/shared/components/ui'
import { useSimpleAnimeSearch } from '../model/useSimpleAnimeSearch'
import { CircleOff, CircleX, FolderSearch } from 'lucide-react'
import { SimpleAnimeSearchAction } from './SimpleAnimeSearchAction'
import { SimpleAnimeSearchLoader } from './SimpleAnimeSearchLoader'
import { SimpleAnimeSearchAnimeCard } from './SimpleAnimeSearchAnimeCard'

export function SimpleAnimeSearch() {
	const { query, setQuery, animes, isLoading } = useSimpleAnimeSearch()
	return (
		<div>
			<div className='relative '>
				<Input
					className='w-full mb-4 h-12 px-4'
					value={query}
					onChange={e => setQuery(e.target.value)}
					placeholder='Введите название аниме...'
				></Input>
				<div
					className={`
						absolute top-1.5 right-3.5
						transition-all duration-300 ease-in-out
						${query ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'}
					`}
				>
					<Button
						variant='ghost'
						className='size-9'
						size={'icon'}
						onClick={() => setQuery('')}
					>
						<CircleX className='size-6' />
					</Button>
				</div>
			</div>
			<div className='h-[50vh] flex flex-col w-full items-center justify-center'>
				{isLoading && (
					<div className='h-[50vh] w-full overflow-y-auto flex flex-col gap-2'>
						{Array(15)
							.fill(0)
							.map((_, index) => (
								<SimpleAnimeSearchLoader key={index} />
							))}
					</div>
				)}
				{query.length === 0 && (
					<SimpleAnimeSearchAction
						title='Введите название аниме'
						description='Результаты вашего поиска отобразятся здесь'
						Component={FolderSearch}
					></SimpleAnimeSearchAction>
				)}
				{query.length > 0 && !isLoading && animes && animes.length === 0 && (
					<SimpleAnimeSearchAction
						title='Ничего не найдено'
						description='По данному запросу ничего не найдено'
						Component={CircleOff}
					></SimpleAnimeSearchAction>
				)}
				{!isLoading && animes && animes.length > 0 && query.length > 0 && (
					<div className='h-[50vh] overflow-y-auto flex flex-col gap-2 max-w-lg'>
						{animes.map(anime => (
							<SimpleAnimeSearchAnimeCard
								anime={anime}
								key={anime.id}
							></SimpleAnimeSearchAnimeCard>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

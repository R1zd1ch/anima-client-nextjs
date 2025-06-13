'use client'
import { Button, Input } from '@/src/shared/components/ui'
import { CircleX } from 'lucide-react'
import { useAdvancedAnimeSearch } from '../model'

export function AdvancedAnimeSearch({ className }: { className?: string }) {
	const { setQuery, query } = useAdvancedAnimeSearch(300)
	return (
		<div className={className}>
			<div className='relative'>
				<Input
					value={query}
					onChange={e => setQuery(e.target.value)}
					className='h-12 px-4 text-2xl'
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
		</div>
	)
}

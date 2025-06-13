'use client'

import { SimpleAnimeSearch } from '@/src/features/simple-search-anime'
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
} from '@/src/shared/components/ui'
import { Button } from '@/src/shared/components/ui'
import { Search } from 'lucide-react'

export function SearchHeaderModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline' size='icon' className='size-9'>
					<Search />
				</Button>
			</DialogTrigger>
			<DialogContent className='min-w-xl backdrop-blur-sm bg-background/90'>
				<div className='flex flex-col gap-4'>
					<DialogTitle className='text-lg font-semibold'>
						Поиск аниме по названию
					</DialogTitle>
					<SimpleAnimeSearch></SimpleAnimeSearch>
				</div>
			</DialogContent>
		</Dialog>
	)
}

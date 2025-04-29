'use client'

import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Search } from 'lucide-react'

export function SearchHeaderModal() {
	//todo поиск
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline' size='icon' className='size-9'>
					<Search />
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-lg font-semibold'>Поиск</h2>
					<Input placeholder='Введите название аниме...' />
				</div>
			</DialogContent>
		</Dialog>
	)
}

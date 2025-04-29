import { LucideLoader2 } from 'lucide-react'

export function Loading() {
	return (
		<div className='flex items-center justify-center text-sm'>
			<LucideLoader2></LucideLoader2>
			Загрузка
		</div>
	)
}

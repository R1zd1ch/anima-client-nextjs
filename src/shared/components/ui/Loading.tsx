import { LucideLoader2 } from 'lucide-react'

export function Loading() {
	return (
		<div className='flex items-center justify-center text-sm gap-1'>
			<LucideLoader2 className='animate-spin'></LucideLoader2>
			Загрузка
		</div>
	)
}

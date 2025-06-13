import { Skeleton } from '@/src/shared/components/ui'

export function PlainAnimeCardLoader() {
	return (
		<div className='flex w-full items-center justify-start gap-3 px-3 py-3 text-left transition-colors hover:bg-muted rounded-md'>
			<Skeleton className='w-[180px] aspect-[2/3] rounded-md' />
			<div className='flex flex-col overflow-hidden gap-2 w-full'>
				<Skeleton className='h-6 w-3/4 mb-2' />
				<Skeleton className='h-4 w-1/2 mb-1' />
				<Skeleton className='h-4 w-2/3' />
				<Skeleton className='h-20 w-full mt-2' />
			</div>
		</div>
	)
}

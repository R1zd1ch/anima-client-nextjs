import { Button, Skeleton } from '@/src/shared/components/ui'

export function SimpleAnimeSearchLoader() {
	return (
		<Button
			variant='ghost'
			className='flex w-full h-fit items-center justify-start gap-3 px-3 py-2 text-left hover:bg-muted/50 transition-colors'
		>
			<Skeleton className='w-12 h-12 rounded-md' />
			<div className='flex flex-col gap-1 w-full overflow-hidden'>
				<Skeleton className='h-4 w-3/4' />
				<Skeleton className='h-3 w-1/2' />
				<Skeleton className='h-3 w-1/4' />
			</div>
		</Button>
	)
}

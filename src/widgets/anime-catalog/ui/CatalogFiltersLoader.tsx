import {
	Card,
	CardContent,
	CardHeader,
	Separator,
	Skeleton,
} from '@/src/shared/components/ui'
import { cn } from '@/src/shared/utils'

export function CatalogFiltersLoader({ className }: { className?: string }) {
	return (
		<Card className={cn(className, 'w-full p-0 pb-4 gap-0')}>
			<CardHeader className='p-4 pb-0 gap-0 mb-4'>
				<Skeleton className='h-6 w-24' />
				<Skeleton className='h-4 w-64 mt-2' />
			</CardHeader>
			<Separator />
			<CardContent className='p-0 flex flex-col gap-4 mt-4'>
				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-20' />
					<Skeleton className='h-4 w-48' />
					<div className='flex gap-2'>
						<Skeleton className='h-8 w-20' />
						<Skeleton className='h-8 w-20' />
						<Skeleton className='h-8 w-20' />
					</div>
				</div>
				<Separator />

				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-32' />
					<Skeleton className='h-4 w-56' />
					<div className='flex gap-2'>
						<Skeleton className='h-8 w-24' />
						<Skeleton className='h-8 w-24' />
					</div>
				</div>
				<Separator />
				{/* Seasons Filter */}
				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-20' /> {/* Title */}
					<Skeleton className='h-4 w-60' /> {/* Description */}
					<div className='flex gap-2'>
						<Skeleton className='h-8 w-20' />
						<Skeleton className='h-8 w-20' />
						<Skeleton className='h-8 w-20' />
					</div>
				</div>
				<Separator />
				{/* Year Slider Filter */}
				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-28' /> {/* Title */}
					<Skeleton className='h-4 w-56' /> {/* Description */}
					<Skeleton className='h-2 w-full' /> {/* Slider track */}
				</div>
				<Separator />
				{/* Themes Filter */}
				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-20' /> {/* Title */}
					<Skeleton className='h-4 w-48' /> {/* Description */}
					<Skeleton className='h-10 w-full' /> {/* Select */}
				</div>
				<Separator />
				{/* Genres Filter */}
				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-20' /> {/* Title */}
					<Skeleton className='h-4 w-48' /> {/* Description */}
					<Skeleton className='h-10 w-full' /> {/* Select */}
				</div>
				<Separator />
				{/* Demographics Filter */}
				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-24' /> {/* Title */}
					<Skeleton className='h-4 w-48' /> {/* Description */}
					<Skeleton className='h-10 w-full' /> {/* Select */}
				</div>
				<Separator />
				{/* Sorting Filter */}
				<div className='flex flex-col gap-2 px-4'>
					<Skeleton className='h-5 w-24' /> {/* Title */}
					<Skeleton className='h-4 w-56' /> {/* Description */}
					<Skeleton className='h-10 w-full' /> {/* Select */}
				</div>
			</CardContent>
		</Card>
	)
}

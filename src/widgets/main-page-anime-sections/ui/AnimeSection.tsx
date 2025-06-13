import { IAnime } from '@/src/entities/anime/model/types'
import {
	Button,
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/src/shared/components/ui'
import { cn } from '@/src/shared/utils'
import Link from 'next/link'
import { AnimeSectionList } from './AnimeSectiontsList'

export function AnimeSection({
	animes,
	className,
	title,
	description,
	href,
	buttonText,
}: {
	animes?: IAnime[] | null
	className?: string
	title?: string
	description?: string
	buttonText?: string
	href?: string
}) {
	return (
		<Card className={cn('w-full', className)}>
			<CardHeader className='flex flex-row items-start justify-between'>
				<div className='flex flex-col gap-1 items-start'>
					<CardTitle className='font-bold'>{title}</CardTitle>
					<CardDescription className='font-semibold'>
						{description}
					</CardDescription>
				</div>

				<Link href={href || '/'}>
					<Button variant='link'>{buttonText}</Button>
				</Link>
			</CardHeader>
			<AnimeSectionList animes={animes}></AnimeSectionList>
		</Card>
	)
}

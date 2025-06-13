// entities/user/ui/UserBio.tsx
import { cn } from '@/src/shared/utils'
import { UserBioProps } from '../model/types'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/src/shared/components/ui'

export function UserBio({ user, className }: UserBioProps) {
	const defaultBio =
		'Здесь могла бы быть ваша биография! Расскажите о себе. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero totam perferendis, soluta ratione architecto, atque obcaecati eveniet dolorum quis quae ut dicta dignissimos laborum nobis, voluptates sint placeat harum.'

	return (
		<Card className={cn('gap-1 h-fit', className)}>
			<CardHeader className=''>
				<CardTitle className='text-lg font-semibold m-0'>О себе</CardTitle>
			</CardHeader>
			<CardContent className='text-sm text-muted-foreground'>
				<p className='leading-relaxed'>{user.bio || defaultBio}</p>
			</CardContent>
		</Card>
	)
}

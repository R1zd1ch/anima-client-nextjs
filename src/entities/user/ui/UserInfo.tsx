// entities/user/ui/UserInfo.tsx
import { cn } from '@/src/shared/utils'
import { IUser } from '../model/types'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/src/shared/components/ui'
import { format } from 'date-fns'

interface UserInfoProps {
	user: IUser
	className?: string
}

export function UserInfo({ user, className }: UserInfoProps) {
	return (
		<Card className={cn('gap-1 h-fit', className)}>
			<CardHeader className='pb-2'>
				<CardTitle className='text-lg font-semibold m-0'>Информация</CardTitle>
			</CardHeader>
			<CardContent className='text-sm text-muted-foreground grid gap-2'>
				<div className='flex items-center gap-2'>
					<span className='font-semibold'>Email:</span>
					<span>{user.email}</span>
				</div>
				{user.createdAt && (
					<div className='flex items-center gap-2'>
						<span className='font-semibold'>Присоединился:</span>
						<span>{format(new Date(user.createdAt), 'dd.MM.yyyy')}</span>{' '}
					</div>
				)}
				{user?.location && (
					<div className='flex items-center gap-2'>
						<span className='font-semibold'>Местоположение:</span>
						<span>{user?.location}</span>
					</div>
				)}
				{user?.website && (
					<div className='flex items-center gap-2'>
						<span className='font-semibold'>Веб-сайт:</span>
						<a
							href={user?.website}
							target='_blank'
							rel='noopener noreferrer'
							className='underline hover:text-foreground'
						>
							{user?.website}
						</a>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

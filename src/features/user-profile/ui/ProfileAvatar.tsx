import { IUser } from '@/src/entities/user/model/types'
import Image from 'next/image'

export function ProfileAvatar({ user }: { user: IUser }) {
	return (
		<div className='relative w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden'>
			{user.picture ? (
				<Image
					src={user.picture}
					alt={`${user.username || user.email}'s profile picture`}
					layout='fill'
					objectFit='cover'
					className='border-2'
				/>
			) : (
				<div className='absolute inset-0 bg-muted flex items-center justify-center text-xl md:text-2xl font-semibold rounded-lg border-2'>
					{user.username?.charAt(0).toUpperCase() ||
						user.email.charAt(0).toUpperCase()}
				</div>
			)}
		</div>
	)
}

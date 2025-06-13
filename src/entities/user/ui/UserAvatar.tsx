'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/src/shared/components/ui'
import { IUser } from '../model/types'

export function UserAvatar({ user }: { user: IUser }) {
	console.log(user)
	return (
		<Avatar>
			<AvatarImage src={user.picture}></AvatarImage>
			<AvatarFallback>{user.displayName.slice(0, 2)}</AvatarFallback>
		</Avatar>
	)
}

'use client'
import { ProfileHeader } from '@/src/features/user-profile/ui/ProfileHeader'
import { useProfile } from '@/src/entities/user/hooks'
import { UserBio } from '@/src/entities/user/ui/UserBio'
import { UserInfo } from '@/src/entities/user/ui/UserInfo'

export function UserProfile() {
	const { user } = useProfile()

	if (!user) return null
	return (
		<div className='flex items-center w-full h-full flex-col'>
			<ProfileHeader user={user}></ProfileHeader>
			<div className='grid grid-cols-4 mt-6 gap-4 h-full'>
				<div className='flex flex-col gap-4 col-span-1'>
					<UserInfo user={user}></UserInfo>
					<UserBio user={user}></UserBio>
				</div>
				<div className='w-full h-full bg-muted col-span-3'></div>
			</div>
		</div>
	)
}

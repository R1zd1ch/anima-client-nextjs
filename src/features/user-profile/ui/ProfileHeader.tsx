// features/profile/ui/ProfileHeader.tsx
import { ProfileCover } from './ProfileCover'
import { ProfileAvatar } from './ProfileAvatar'
import { IUser } from '@/src/entities/user/model/types'
import { UserIdentityInfo } from '@/src/entities/user/ui/UserIdentityInfo'

export function ProfileHeader({ user }: { user: IUser }) {
	return (
		<div className='w-full relative'>
			<ProfileCover />
			<div className='absolute left-4 -bottom-1 md:-bottom-1 shadow-lg rounded-lg overflow-hidden'>
				<ProfileAvatar user={user} />
			</div>
			<div className='ml-22 md:ml-32 mt-2 flex flex-row justify-between'>
				<UserIdentityInfo user={user}></UserIdentityInfo>
			</div>
		</div>
	)
}

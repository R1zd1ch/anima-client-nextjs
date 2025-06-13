'use client'
import { useProfile } from '@/src/entities/user/hooks'
import { ProfileSettings } from './ui'

export function UserAccountSettings() {
	const { user, isLoading } = useProfile()

	if (isLoading) return null
	if (!user) return null

	return (
		<div className='pl-6'>
			<ProfileSettings user={user}></ProfileSettings>
		</div>
	)
}

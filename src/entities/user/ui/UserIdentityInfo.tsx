import { cn } from '@/src/shared/utils'
import { IUserIdentityInfoProps } from '../model/types'
import { Check } from 'lucide-react'
import { isAdmin } from '@/src/shared/utils/is-admin'

export function UserIdentityInfo({ user, className }: IUserIdentityInfoProps) {
	return (
		<div className={cn('flex flex-col', className)}>
			<div className='flex flex-row items-center gap-1'>
				<h2 className='text-xl font-semibold text-foreground'>
					{user.displayName}
				</h2>
				{isAdmin(user.role) && <Check className='size-5'></Check>}
			</div>
			<p className='text-sm text-muted-foreground'>@{user.username}</p>
		</div>
	)
}

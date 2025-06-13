import { IUser } from '@/src/entities/user/model/types'
import { UpdateDisplayName } from '@/src/features/user-settings/ui'

export function ProfileSettings({ user }: { user: IUser }) {
	return (
		<div className='space-y-4'>
			<div className='pl-2'>
				<h1 className='font-bold text-xl'>Настройки профиля</h1>
				<p className='text-muted-foreground text-sm'>
					В данном разделе вы можете изменить информацию о вашем профиле
				</p>
			</div>
			<UpdateDisplayName user={user}></UpdateDisplayName>
		</div>
	)
}

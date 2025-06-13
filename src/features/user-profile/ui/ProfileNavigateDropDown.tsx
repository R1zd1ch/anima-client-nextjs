'use client'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	Button,
} from '@/src/shared/components/ui'
import { useProfile } from '@/src/entities/user/hooks'
import { useRouter } from 'next/navigation'
import { useLogoutMutation } from '../hooks'
import { Skeleton } from '@/src/shared/components/ui'
import { UserAvatar } from '@/src/entities/user/ui'
import { LucideLogOut, Settings, User, LogIn } from 'lucide-react'

export function ProfileNavigateDropDown() {
	const { user, isLoading } = useProfile()
	const { logout, isLoadingLogout } = useLogoutMutation()
	const router = useRouter()

	if (isLoading)
		return (
			<Button variant='ghost' className='w-9 h-9' size='icon'>
				<Skeleton className='rounded-full w-8 h-8 p-0 m-0' />
			</Button>
		)

	if (!user)
		return (
			<Button
				onClick={() => router.push('/auth/login')}
				variant={'outline'}
				className='w-9 h-9'
				size='icon'
			>
				<LogIn />
			</Button>
		)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon' className='size-9'>
					<UserAvatar user={user}></UserAvatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side='bottom'>
				<DropdownMenuItem
					onClick={() => router.push(`/users/${user.username}`)}
				>
					<User className='mr-1 size-4'></User>Профиль
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => router.push(`/users/${user.username}/settings`)}
				>
					<Settings className='mr-1 size-4'></Settings>Настройки
				</DropdownMenuItem>
				<DropdownMenuItem
					disabled={isLoadingLogout}
					className='w-full flex items-center'
					onClick={() => logout()}
				>
					<LucideLogOut className='mr-1 size-4'></LucideLogOut>Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

'use client'
import { useLogoutMutation } from '@/features/user/hooks'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	Button,
} from '@/shared/components/ui'
import { useProfile } from '@/shared/hooks'
import { LucideLogOut, Settings, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function UserNavigation() {
	const { user, isLoading } = useProfile()
	const router = useRouter()
	const { logout, isLoadingLogout } = useLogoutMutation()

	if (!user) return null
	//todo returns to userpages and make user pages

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon' className='size-9'>
					<Avatar>
						<AvatarImage src={user.picture}></AvatarImage>
						<AvatarFallback>{user.displayName.slice(0, 2)}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side='bottom'>
				<DropdownMenuItem>
					<User className='mr-2 size-4'></User> Профиль
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Settings className='mr-2 size-4'></Settings> Настройки
				</DropdownMenuItem>
				<DropdownMenuItem
					disabled={isLoadingLogout}
					className='w-full flex items-center'
					onClick={() => logout()}
				>
					<LucideLogOut className='mr-2 size-4'></LucideLogOut> Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

import { useProfile } from '@/shared/hooks'
import { useLogoutMutation } from '../hooks'
import {
	DropdownMenuContent,
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuTrigger,
	Skeleton,
} from '@/shared/components/ui'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { LucideLogOut } from 'lucide-react'
import { IUser } from '@/features/auth/types'

interface UserButtonProps {
	user: IUser
}

export function UserButton({ user }: UserButtonProps) {
	const { logout, isLoadingLogout } = useLogoutMutation()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={user.picture}></AvatarImage>
					<AvatarFallback>{user.displayName.slice(0, 2)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40' align='end'>
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

export function UserButtonLoading() {
	return <Skeleton className='h-10 w-10 rounded-full'></Skeleton>
}

import { logout as logoutRequest } from '@/src/shared/api'
import { toastMessageHandler } from '@/src/shared/utils'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useLogoutMutation() {
	const router = useRouter()

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => logoutRequest(),
		onSuccess() {
			toast.success('Вы успешно вышли из аккаунта')
			router.push('/auth/login')
		},
		onError(err) {
			toastMessageHandler(err)
		},
	})

	return {
		logout,
		isLoadingLogout,
	}
}

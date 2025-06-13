import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

import { toastMessageHandler } from '@/src/shared/utils'

import { NewPasswordType } from '../schemas'
import { newPassword as newPasswordRequest } from '../api'

export function useNewPasswordMutation() {
	const router = useRouter()
	const searchParams = useSearchParams()

	if (!searchParams) return null

	const token = searchParams.get('token')

	const { mutate: newPassword, isPending: isLoadingNew } = useMutation({
		mutationKey: ['new password'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: NewPasswordType
			recaptcha: string
		}) => newPasswordRequest(values, token, recaptcha),
		onSuccess() {
			toast.success('Пароль успешно изменён', {
				description: 'Теперь вы можете войти в свой аккаунт.',
			})
			router.push('/auth/login')
		},
		onError(error) {
			toastMessageHandler(error)
		},
	})

	return { newPassword, isLoadingNew }
}

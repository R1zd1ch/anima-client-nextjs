import { useMutation } from '@tanstack/react-query'
import { ResetPasswordType } from '../schemas/reset-password.schema'
import { passwordRecoveryService } from '../services'
import { toastMessageHandler } from '@/shared/utils'
import { toast } from 'sonner'

export function useResetPasswordMutation() {
	const { mutate: reset, isPending: isLoadingReset } = useMutation({
		mutationKey: ['reset password'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: ResetPasswordType
			recaptcha: string
		}) => passwordRecoveryService.reset(values, recaptcha),
		onSuccess() {
			toast.success('Проверьте почту', {
				description: 'На вашу почту была отправлена ссылка для подтверждения',
			})
		},
		onError(err) {
			toastMessageHandler(err)
		},
	})

	return {
		reset,
		isLoadingReset,
	}
}

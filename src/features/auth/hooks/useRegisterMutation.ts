import { useMutation } from '@tanstack/react-query'
import { authService } from '../services'
import { RegisterSchemaType } from '../schemas'
import { toastMessageHandler } from '@/shared/utils'
import { toast } from 'sonner'

export function useRegisterMutation() {
	const { mutate: register, isPending: isLoadingRegister } = useMutation({
		mutationKey: ['register user'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: RegisterSchemaType
			recaptcha: string
		}) => authService.register(values, recaptcha),
		onSuccess(data: any) {
			toastMessageHandler(data)
		},
		onError(err) {
			toastMessageHandler(err)
		},
	})

	return {
		register,
		isLoadingRegister,
	}
}

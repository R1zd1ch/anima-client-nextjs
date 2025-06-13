import { useMutation } from '@tanstack/react-query'
import { register as registerRequest } from '../api'
import { RegisterSchemaType } from '../schemas'
import { toastMessageHandler } from '@/src/shared/utils'
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
		}) => registerRequest(values, recaptcha),
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

import { useMutation } from '@tanstack/react-query'
import { login as loginRequest } from '../api'
import { LoginSchemaType } from '../schemas'
import { toastMessageHandler } from '@/src/shared/utils'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

export function useLoginMutation(
	setIsShowTwoFactor: Dispatch<SetStateAction<boolean>>
) {
	const router = useRouter()

	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: LoginSchemaType
			recaptcha: string
		}) => loginRequest(values, recaptcha),
		onSuccess(data: any) {
			if (data.message) {
				toastMessageHandler(data)
				setIsShowTwoFactor(true)
			} else {
				toast.success('Успешная авторизация')
				router.push('/dashboard/settings')
			}
		},
		onError(err) {
			toastMessageHandler(err)
		},
	})

	return {
		login,
		isLoadingLogin,
	}
}

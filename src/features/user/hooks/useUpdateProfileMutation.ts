import { useMutation } from '@tanstack/react-query'
import { TypeSettingsSchema } from '../schemas'
import { userService } from '../services'
import { toast } from 'sonner'
import { toastMessageHandler } from '@/shared/utils'

export function useUpdateProfileMutation() {
	const { mutate: update, isPending: IsLoadingUpdate } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeSettingsSchema) => userService.updateProfile(data),
		onSuccess() {
			toast.success('Профиль успешно обновлён')
		},
		onError(err) {
			toastMessageHandler(err)
		},
	})

	return {
		update,
		IsLoadingUpdate,
	}
}

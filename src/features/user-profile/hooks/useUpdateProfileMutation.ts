import { useMutation } from '@tanstack/react-query'
import { TypeSettingsSchema } from '../schemas'
import { updateProfile } from '../api'
import { toast } from 'sonner'
import { toastMessageHandler } from '@/src/shared/utils'

export function useUpdateProfileMutation() {
	const { mutate: update, isPending: IsLoadingUpdate } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeSettingsSchema) => updateProfile(data),
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

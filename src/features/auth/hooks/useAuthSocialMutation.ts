import { useMutation } from '@tanstack/react-query'
import { authService } from '../services'

export function useAuthSocialMutation() {
	const { mutateAsync, isPending: isLoadingOauth } = useMutation({
		mutationKey: ['oauth by provider'],
		mutationFn: async (provider: 'google' | 'yandex') =>
			await authService.oauthByProvider(provider),
	})

	return {
		mutateAsync,
		isLoadingOauth,
	}
}

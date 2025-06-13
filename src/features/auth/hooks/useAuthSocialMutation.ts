import { useMutation } from '@tanstack/react-query'
import { oauthByProvider as oauthByProviderRequest } from '../api'

export function useAuthSocialMutation() {
	const { mutateAsync, isPending: isLoadingOauth } = useMutation({
		mutationKey: ['oauth by provider'],
		mutationFn: async (provider: 'google' | 'yandex') =>
			await oauthByProviderRequest(provider),
	})

	return {
		mutateAsync,
		isLoadingOauth,
	}
}

import { api } from '@/src/shared/api'

export function oauthByProvider(provider: 'google' | 'yandex') {
	return api.get<{ url: string }>(`auth/oauth/connect/${provider}`)
}

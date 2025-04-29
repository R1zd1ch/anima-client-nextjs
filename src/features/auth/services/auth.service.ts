import { api } from '@/shared/api'
import { LoginSchemaType, RegisterSchemaType } from '../schemas'
import { IUser } from '../types'

class AuthService {
	public async register(body: RegisterSchemaType, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>('auth/register', body, {
			headers,
		})

		return response
	}

	public async login(body: LoginSchemaType, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>('auth/login', body, {
			headers,
		})

		return response
	}

	public async oauthByProvider(provider: 'google' | 'yandex') {
		const response = await api.get<{ url: string }>(
			`auth/oauth/connect/${provider}`
		)

		return response
	}

	public async logout() {
		const response = await api.post('auth/logout')

		return response
	}
}

export const authService = new AuthService()

import { api } from '@/src/shared/api'

export async function newUserVerification(token: string | null) {
	return api.post('auth/email-confirmation', { token })
}

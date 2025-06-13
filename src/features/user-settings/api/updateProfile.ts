import { api } from '@/src/shared/api'

export async function updateProfile(body: any) {
	const response = await api.patch('user/profile', body)
	return response
}

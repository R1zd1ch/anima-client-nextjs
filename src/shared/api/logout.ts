import { api } from '@/src/shared/api'

export async function logout() {
	return api.post(`auth/logout`)
}

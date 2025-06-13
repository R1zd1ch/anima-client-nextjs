import { api } from '@/src/shared/api'
import { IUser } from '../model/types'

export async function getProfile() {
	const response = await api.get<IUser>('user/profile')
	return response
}

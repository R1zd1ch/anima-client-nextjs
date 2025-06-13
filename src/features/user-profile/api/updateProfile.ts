import { api } from '@/src/shared/api'
import { TypeSettingsSchema } from '../schemas'
import { IUser } from '@/src/features/auth/types'

export async function updateProfile(body: TypeSettingsSchema) {
	const response = await api.patch<IUser>('user/profile', body)
	return response
}

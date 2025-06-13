import { api } from '@/src/shared/api'
import { RegisterSchemaType } from '../../schemas'
import { IUser } from '@/src/entities/user/model/types'

export function register(body: RegisterSchemaType, recaptcha?: string) {
	const headers = recaptcha ? { recaptcha } : undefined
	return api.post<IUser>('auth/register', body, { headers })
}

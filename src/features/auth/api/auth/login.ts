import { api } from '@/src/shared/api'
import { LoginSchemaType } from '../../schemas'
import { IUser } from '@/src/entities/user/model/types'

export async function login(body: LoginSchemaType, recaptcha?: string) {
	const header = recaptcha ? { recaptcha } : undefined
	return api.post<IUser>('auth/login', body, {
		headers: header,
	})
}

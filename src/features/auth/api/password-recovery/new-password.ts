import { api } from '@/src/shared/api'
import { NewPasswordType } from '../../schemas'
import { IUser } from '@/src/entities/user/model/types'

export async function newPassword(
	body: NewPasswordType,
	token: string | null,
	recaptcha?: string
) {
	const headers = recaptcha ? { recaptcha } : undefined
	return api.post<IUser>(`auth/password-recovery/new/${token}`, body, {
		headers,
	})
}

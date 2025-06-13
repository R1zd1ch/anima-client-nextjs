import { api } from '@/src/shared/api'
import { ResetPasswordType } from '../../schemas'
import { IUser } from '@/src/entities/user/model/types'

export async function resetPassword(
	body: ResetPasswordType,
	recaptcha?: string
) {
	const headers = recaptcha ? { recaptcha } : undefined
	return api.post<IUser>(`auth/reset-password`, body, { headers })
}

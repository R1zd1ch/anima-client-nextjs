import { z } from 'zod'

export const NewPasswordSchema = z.object({
	password: z.string().min(6, {
		message: 'Пароль минимум 6 символов',
	}),
})
export type NewPasswordType = z.infer<typeof NewPasswordSchema>
